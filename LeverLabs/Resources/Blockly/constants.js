/**
 * Constants for Blockly block definitions
 * Includes block types, field names, colors, and enums
 */

// ============================================================================
// CATEGORY COLORS (hex values for Blockly setColour)
// ============================================================================

const COLORS = {
    LOGIC: '#1CB0F6',      // macaw blue - rgb(28, 176, 246)
    SENSORS: '#FF4B4B',    // cardinal red - rgb(255, 75, 75)
    MOTORS: '#23C864',     // charging green - rgb(35, 200, 100)
    LED: '#FF9600',        // fox orange - rgb(255, 150, 0)
    SPEAKER: '#2B70C9',    // humpback blue - rgb(43, 112, 201)
    BUTTONS: '#B66E28'     // beak inner brown - rgb(182, 110, 40)
};

// ============================================================================
// LOGIC BLOCKS
// ============================================================================

const START_BLOCK_TYPES = {
    BUTTON_PRESS_START: 'start_button_press'
};

const VARIABLE_BLOCK_TYPES = {
    VARIABLE_DECLARE_FLOAT: 'variable_declare_float',
    VARIABLE_DECLARE_INT: 'variable_declare_int',
    VARIABLE_DECLARE_BOOL: 'variable_declare_bool',
    VARIABLE_ASSIGN: 'variable_assign',
    VARIABLE_GET_FLOAT: 'variable_get_float',
    VARIABLE_GET_INT: 'variable_get_int',
    VARIABLE_GET_BOOL: 'variable_get_bool'
};

const VARIABLE_FIELD_VALUES = {
    VARIABLE_NAME: 'VARIABLE_NAME',
    VARIABLE_VALUE: 'VARIABLE_VALUE'
};

const CONDITIONAL_BLOCK_TYPES = {
    IF: 'logic_if',
    IF_ELSE: 'logic_if_else',
    IF_ELSEIF_ELSE: 'logic_if_elseif_else',
    IF_2ELSEIF_ELSE: 'logic_if_2elseif_else'
};

const CONDITIONAL_FIELD_VALUES = {
    IF_CONDITION: 'IF_CONDITION',
    IF_DO: 'IF_DO',
    IF1_CONDITION: 'IF1_CONDITION',
    IF1_DO: 'IF1_DO',
    IF2_CONDITION: 'IF2_CONDITION',
    IF2_DO: 'IF2_DO',
    IF3_CONDITION: 'IF3_CONDITION',
    IF3_DO: 'IF3_DO',
    ELSE_DO: 'ELSE_DO'
};

const MATH_BLOCK_TYPES = {
    COMPARE: 'math_compare',
    OPERATION: 'math_operation',
    NEGATE: 'math_negate',
    NUMBER: 'math_number',
    ARITHMETIC: 'math_arithmetic'
};

const MATH_FIELD_VALUES = {
    COMPARE_A: 'COMPARE_A',
    COMPARE_B: 'COMPARE_B',
    COMPARE_OP: 'COMPARE_OP',
    OPERATION_A: 'OPERATION_A',
    OPERATION_B: 'OPERATION_B',
    OPERATION_OP: 'OPERATION_OP',
    NEGATE_BOOL: 'NEGATE_BOOL',
    NUMBER_NUM: 'NUMBER_NUM',
    ARITHMETIC_A: 'ARITHMETIC_A',
    ARITHMETIC_B: 'ARITHMETIC_B',
    ARITHMETIC_OP: 'ARITHMETIC_OP'
};

const LOOP_BLOCK_TYPES = {
    REPEAT: 'loop_repeat',
    WAIT: 'loop_wait',
    FOREVER_LOOP: 'loop_forever'
};

const LOOP_FIELD_VALUES = {
    REPEAT_TIMES: 'REPEAT_TIMES',
    REPEAT_DO: 'REPEAT_DO'
};

// Combine all logic block types
const LOGIC_BLOCK_TYPES = {
    ...START_BLOCK_TYPES,
    ...VARIABLE_BLOCK_TYPES,
    ...CONDITIONAL_BLOCK_TYPES,
    ...MATH_BLOCK_TYPES,
    ...LOOP_BLOCK_TYPES
};

// ============================================================================
// MOTOR BLOCKS
// ============================================================================

const MOTOR_BLOCK_TYPES = {
    DRIVE: 'motors_drive',
    DRIVE_TIME: 'motors_drive_time',
    DRIVE_DISTANCE: 'motors_drive_distance',
    TURN: 'motors_turn',
    STOP: 'motors_stop',
    SPIN: 'motors_spin'
};

const MOTOR_FIELD_VALUES = {
    DIRECTION: 'DIRECTION',
    DRIVING_PERCENTAGE: 'DRIVING_PERCENTAGE',
    DRIVING_SECONDS: 'DRIVING_SECONDS',
    DRIVING_DISTANCE: 'DRIVING_DISTANCE',
    TURN_DIRECTION: 'TURN_DIRECTION',
    TURN_DEGREES: 'TURN_DEGREES'
};

const MOTOR_DIRECTIONS = {
    FORWARD: 'FORWARD',
    BACKWARD: 'BACKWARD'
};

const TURN_DIRECTIONS = {
    CLOCKWISE: 'CLOCKWISE',
    COUNTERCLOCKWISE: 'COUNTERCLOCKWISE'
};

// ============================================================================
// SENSOR BLOCKS
// ============================================================================

const SENSORS_BLOCK_TYPES = {
    IMU_READ: 'sensors_imu_read',
    SIDE_TOF_READ: 'sensors_side_tof_read',
    CENTER_TOF_READ: 'sensors_center_tof_read',
    COLOR_SENSOR_READ: 'sensors_color_sensor_read',
    GET_FRONT_TOF_DISTANCE: 'sensors_get_front_tof_distance'
};

const SENSORS_FIELD_VALUES = {
    IMU_READ: 'IMU_READ',
    SIDE_TOF_READ: 'SIDE_TOF_READ',
    COLOR_SENSOR_READ: 'COLOR_SENSOR_READ'
};

const SENSOR_TYPES = {
    IMU: {
        YAW: 'yaw',
        PITCH: 'pitch',
        ROLL: 'roll',
        HEADING: 'heading',
        ACCELERATION_X: 'acceleration_x',
        ACCELERATION_Y: 'acceleration_y',
        ACCELERATION_Z: 'acceleration_z'
    },
    LEFTRIGHT: {
        LEFT: 'LEFT',
        RIGHT: 'RIGHT'
    },
    LED_COLORS: {
        RED: 'RED',
        GREEN: 'GREEN',
        BLUE: 'BLUE',
        PURPLE: 'PURPLE',
        YELLOW: 'YELLOW',
        WHITE: 'WHITE',
        OFF: 'OFF'
    },
    COLOR_SENSOR_READ_COLORS: {
        RED: 'RED',
        GREEN: 'GREEN',
        BLUE: 'BLUE',
        WHITE: 'WHITE',
        BLACK: 'BLACK'
    },
    TONE_NAMES: {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        E: 'E',
        F: 'F',
        G: 'G'
    }
};

// ============================================================================
// LED BLOCKS
// ============================================================================

const LED_BLOCK_TYPES = {
    CONTROL_ALL_LEDS: 'led_control_all'
};

const LED_FIELD_VALUES = {
    LED_COLOR: 'LED_COLOR'
};

// ============================================================================
// SPEAKER BLOCKS
// ============================================================================

const SPEAKER_BLOCK_TYPES = {
    PLAY_TONE: 'speaker_play_tone'
};

// ============================================================================
// BUTTON BLOCKS
// ============================================================================

const BUTTON_BLOCK_TYPES = {
    RIGHT_BUTTON_PRESS: 'button_right_press'
};
