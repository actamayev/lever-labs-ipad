/**
 * C++ Code Generator for Blockly
 * Creates the Blockly.Cpp generator and provides global access via getCppGenerator()
 */

// Create the C++ generator
Blockly.Cpp = new Blockly.Generator('CPP');

// Set indentation to 4 spaces
Blockly.Cpp.INDENT = '    ';

/**
 * The scrub_ function handles code generation for sequences of blocks.
 * It takes the generated code from a single block and optionally adds
 * code from the next block in the sequence.
 *
 * This is what allows blocks to stack vertically and execute in order.
 *
 * @param {Blockly.Block} block - The current block being processed
 * @param {string} code - The generated code for this block
 * @param {boolean} opt_thisOnly - If true, only return this block's code
 * @returns {string} The combined code for this block and subsequent blocks
 */
Blockly.Cpp.scrub_ = function(block, code, opt_thisOnly) {
    let nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    
    // If opt_thisOnly is true, or there's no next block, return just this code
    if (opt_thisOnly || !nextBlock) {
        return code;
    }
    
    // Generate code for the next block and append it
    let nextCode = Blockly.Cpp.blockToCode(nextBlock);
    
    // Handle both string and [string, number] returns
    if (Array.isArray(nextCode)) {
        nextCode = nextCode[0];
    }
    
    return code + nextCode;
};

/**
 * Global accessor for the C++ generator.
 * Provides singleton-style access matching the TypeScript pattern.
 *
 * @returns {Blockly.Generator} The C++ code generator
 */
window.getCppGenerator = function() {
    return Blockly.Cpp;
};
