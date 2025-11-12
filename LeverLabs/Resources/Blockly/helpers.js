/**
 * Helper functions for Blockly code generation
 * Includes statement traversal and string utilities
 */

/**
 * Generates code for a statement input (like the body of an if or loop).
 * Traverses all blocks connected to the input and generates properly indented code.
 *
 * This is critical for control flow blocks (if, loops) that contain other blocks.
 * Each nested block gets additional indentation.
 *
 * @param {Blockly.Block} block - The parent block (e.g., an if block)
 * @param {string} inputName - Name of the statement input (e.g., 'IF_DO', 'LOOP_BODY')
 * @returns {string} Indented code for all blocks in the statement, or "\n" if empty
 *
 * @example
 * // For an if block with two statements inside:
 * if (condition) {
 *     motors.drive(FORWARD, 50);    // <- indented with INDENT
 *     wait(2);                       // <- indented with INDENT
 * }
 */
function generateStatementCode(block, inputName) {
    const generator = getCppGenerator();
    const input = block.getInput(inputName);
    const firstBlock = input?.connection?.targetBlock();
    let bodyCode = "";

    if (firstBlock) {
        let currentBlock = firstBlock;
        
        // Traverse all blocks in the statement sequence
        while (currentBlock) {
            const code = generator.blockToCode(currentBlock);
            
            if (Array.isArray(code)) {
                // blockToCode returned [code, order] - we only need the code
                bodyCode += code[0].split("\n")
                    .map(line => line ? generator.INDENT + line : line)
                    .join("\n") + "\n";
                    
            } else if (code) {
                // blockToCode returned just a string
                bodyCode += code.split("\n")
                    .map(line => line ? generator.INDENT + line : line)
                    .join("\n");
            }
            
            currentBlock = currentBlock.getNextBlock();
        }
    }

    return bodyCode || "\n";
}

/**
 * Capitalizes the first letter of a string.
 * Simple inline implementation of lodash's upperFirst.
 *
 * @param {string} str - The string to capitalize
 * @returns {string} String with first letter capitalized
 *
 * @example
 * upperFirst("forward") // "Forward"
 * upperFirst("CLOCKWISE") // "CLOCKWISE"
 */
function upperFirst(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts entire string to uppercase.
 * Simple inline implementation of lodash's toUpper.
 *
 * @param {string} str - The string to convert
 * @returns {string} Uppercase string
 *
 * @example
 * toUpper("forward") // "FORWARD"
 */
function toUpper(str) {
    if (!str) return str;
    return str.toUpperCase();
}

/**
 * Converts entire string to lowercase.
 *
 * @param {string} str - The string to convert
 * @returns {string} Lowercase string
 *
 * @example
 * toLower("FORWARD") // "forward"
 */
function toLower(str) {
    if (!str) return str;
    return str.toLowerCase();
}
