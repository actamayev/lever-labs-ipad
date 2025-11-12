// C++ Generator Setup
Blockly.Cpp = new Blockly.Generator('CPP');
Blockly.Cpp.INDENT = '    ';

// Define operator precedence
Blockly.Cpp.ORDER_ATOMIC = 0;
Blockly.Cpp.ORDER_MEMBER = 1;
Blockly.Cpp.ORDER_FUNCTION_CALL = 2;
Blockly.Cpp.ORDER_INCREMENT = 3;
Blockly.Cpp.ORDER_DECREMENT = 4;
Blockly.Cpp.ORDER_LOGICAL_NOT = 5;
Blockly.Cpp.ORDER_BITWISE_NOT = 6;
Blockly.Cpp.ORDER_UNARY_PLUS = 7;
Blockly.Cpp.ORDER_UNARY_MINUS = 8;
Blockly.Cpp.ORDER_MULTIPLICATION = 9;
Blockly.Cpp.ORDER_ADDITION = 10;
Blockly.Cpp.ORDER_BITWISE_SHIFT = 11;
Blockly.Cpp.ORDER_RELATIONAL = 12;
Blockly.Cpp.ORDER_EQUALITY = 13;
Blockly.Cpp.ORDER_BITWISE_AND = 14;
Blockly.Cpp.ORDER_BITWISE_XOR = 15;
Blockly.Cpp.ORDER_BITWISE_OR = 16;
Blockly.Cpp.ORDER_LOGICAL_AND = 17;
Blockly.Cpp.ORDER_LOGICAL_OR = 18;
Blockly.Cpp.ORDER_CONDITIONAL = 19;
Blockly.Cpp.ORDER_ASSIGNMENT = 20;
Blockly.Cpp.ORDER_COMMA = 21;
Blockly.Cpp.ORDER_NONE = 99;

// Handle block sequences
Blockly.Cpp.scrub_ = function(block, code, thisOnly) {
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock && !thisOnly) {
        return code + Blockly.Cpp.blockToCode(nextBlock);
    }
    return code;
};

// Initialize forBlock object
Blockly.Cpp.forBlock = {};

console.log('C++ Generator initialized');
