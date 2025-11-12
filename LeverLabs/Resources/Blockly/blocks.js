/**
 * Motor Block Definitions
 * Currently contains just STOP block as proof of concept
 */

// ============================================================================
// STOP BLOCK
// ============================================================================

// Register block with correct type: 'stop' (not 'motors_stop')
Blockly.Blocks[MOTOR_BLOCK_TYPES.STOP] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Stop");
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(COLORS.MOTORS);
        this.setTooltip("Stop all motors");
        this.setInputsInline(true);
    }
};

Blockly.Cpp.forBlock[MOTOR_BLOCK_TYPES.STOP] = function(block) {
    return 'motors.stop();\n';
};
