import SwiftUI
import WebKit

struct ContentView: View {
    @State private var generatedCode: String = ""
    @State private var webViewCoordinator: BlocklyWebViewWrapper.Coordinator?  // <- Changed this line
    
    var body: some View {
        VStack(spacing: 0) {
            // Toolbar with Generate button
            HStack {
                Text("Blockly Test")
                    .font(.headline)
                
                Spacer()
                
                Button(action: {
                    // Call JavaScript to generate code
                    webViewCoordinator?.generateCode()
                }) {
                    Text("Generate Code")
                        .padding(.horizontal, 16)
                        .padding(.vertical, 8)
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .cornerRadius(8)
                }
            }
            .padding()
            .background(Color(UIColor.systemGray6))
            
            // Blockly WebView
            BlocklyWebViewWrapper(
                generatedCode: $generatedCode,
                coordinator: $webViewCoordinator
            )
            
            // Display generated code
            if !generatedCode.isEmpty {
                VStack(alignment: .leading, spacing: 8) {
                    Text("Generated C++ Code:")
                        .font(.headline)
                    
                    ScrollView {
                        Text(generatedCode)
                            .font(.system(.body, design: .monospaced))
                            .frame(maxWidth: .infinity, alignment: .leading)
                    }
                    .frame(height: 150)
                    .padding()
                    .background(Color(UIColor.systemGray6))
                    .cornerRadius(8)
                }
                .padding()
            }
        }
    }
}

// Helper wrapper to capture coordinator
struct BlocklyWebViewWrapper: UIViewRepresentable {
    @Binding var generatedCode: String
    @Binding var coordinator: BlocklyWebViewWrapper.Coordinator?  // <- And this line
    
    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
        config.userContentController.add(context.coordinator, name: "codeGenerated")
        
        let webView = WKWebView(frame: .zero, configuration: config)
        context.coordinator.webView = webView
        
        // Load Blockly HTML from bundle
        if let htmlURL = Bundle.main.url(forResource: "Blockly/blockly", withExtension: "html") {
            webView.loadFileURL(htmlURL, allowingReadAccessTo: htmlURL.deletingLastPathComponent())
        }
        
        // Capture coordinator for later use
        DispatchQueue.main.async {
            self.coordinator = context.coordinator
        }
        
        return webView
    }
    
    func updateUIView(_ uiView: WKWebView, context: Context) {
        // No updates needed
    }
    
    func makeCoordinator() -> Coordinator {
        return Coordinator(generatedCode: $generatedCode)
    }
    
    // Coordinator handles messages from JavaScript
    class Coordinator: NSObject, WKScriptMessageHandler {
        @Binding var generatedCode: String
        var webView: WKWebView?
        
        init(generatedCode: Binding<String>) {
            self._generatedCode = generatedCode
        }
        
        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            if message.name == "codeGenerated", let code = message.body as? String {
                print("📦 Received C++ code from JavaScript:")
                print(code)
                
                // Update binding
                generatedCode = code
            }
        }
        
        // Helper to call JS functions from Swift
        func generateCode() {
            webView?.evaluateJavaScript("generateCode()") { result, error in
                if let error = error {
                    print("❌ Error generating code: \(error)")
                } else if let code = result as? String {
                    print("✅ Generated code: \(code)")
                }
            }
        }
    }
}
