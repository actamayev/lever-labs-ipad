// Toolbox Configuration
const toolbox = {
    kind: "categoryToolbox",
    contents: [
        {
            kind: "category",
            name: "Motors",
            colour: COLORS.MOTORS, // <- Using constant
            contents: [
                { kind: "block", type: MOTOR_BLOCK_TYPES.STOP } // <- Using constant
            ]
        }
    ]
};

console.log('Toolbox configured');
