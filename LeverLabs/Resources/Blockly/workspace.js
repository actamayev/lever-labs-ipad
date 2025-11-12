// Workspace Initialization
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    },
    trashcan: true
});

// Swift Bridge Function
function generateCode() {
    const code = Blockly.Cpp.workspaceToCode(workspace);
    console.log("Generated C++ code:", code);
    
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.codeGenerated) {
        window.webkit.messageHandlers.codeGenerated.postMessage(code);
    }
    
    return code;
}

console.log('Workspace initialized');
