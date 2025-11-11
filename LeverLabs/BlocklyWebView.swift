import SwiftUI
import WebKit

struct BlocklyWebView: UIViewRepresentable {
    @Binding var generatedCode: String
    var onCodeGenerated: ((String) -> Void)?
    
    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }
    
    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
        
        // Add message handler for JS -> Swift communication
        config.userContentController.add(context.coordinator, name: "codeGenerated")
        
        let webView = WKWebView(frame: .zero, configuration: config)
        context.coordinator.webView = webView
        
        // Load the bundled HTML file
        if let htmlURL = Bundle.main.url(forResource: "blockly", withExtension: "html") {
            webView.loadFileURL(htmlURL, allowingReadAccessTo: htmlURL.deletingLastPathComponent())
        }
        
        return webView
    }
    
    func updateUIView(_ webView: WKWebView, context: Context) {
        // No updates needed
    }
    
    // Coordinator handles messages from JavaScript
    class Coordinator: NSObject, WKScriptMessageHandler {
        var parent: BlocklyWebView
        var webView: WKWebView?
        
        init(_ parent: BlocklyWebView) {
            self.parent = parent
        }
        
        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            if message.name == "codeGenerated", let code = message.body as? String {
                print("📦 Received C++ code from JavaScript:")
                print(code)
                
                // Update binding
                parent.generatedCode = code
                
                // Call callback if provided
                parent.onCodeGenerated?(code)
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

// Extension to make it easier to call JS from SwiftUI
extension BlocklyWebView {
    func generateCode() {
        // This will be called from the parent view
    }
}
