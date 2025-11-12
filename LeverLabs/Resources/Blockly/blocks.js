// Motor Stop Block
Blockly.Blocks['motor_stop'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Stop");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Stop all motors");
    }
};

Blockly.Cpp.forBlock['motor_stop'] = function(block, generator) {
    return 'motors.stop();\n';
};

console.log('Blocks loaded');
