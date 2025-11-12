/**
 * Constants for Blockly block definitions
 * Matches TypeScript types exactly from common-ts package
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
    BUTTON_PRESS_START: 'button_press_start'
};

const VARIABLE_BLOCK_TYPES = {
    VARIABLE_DECLARE_FLOAT: 'variable_declare_float',
    VARIABLE_GET_FLOAT: 'variable_get_float',
    VARIABLE_GET_INT: 'variable_get_int',
    VARIABLE_DECLARE_INT: 'variable_declare_int',
    VARIABLE_GET_BOOL: 'variable_get_bool',
    VARIABLE_DECLARE_BOOL: 'variable_declare_bool',
    VARIABLE_ASSIGN: 'variable_assign'
};

const VARIABLE_FIELD_VALUES = {
    VARIABLE_NAME: 'VAR_NAME',
    VARIABLE_VALUE: 'VAR_VALUE'
};

const CONDITIONAL_BLOCK_TYPES = {
    IF: 'controls_if',
    IF_ELSE: 'controls_if_else',
    IF_ELSEIF_ELSE: 'controls_if_elseif',
    IF_2ELSEIF_ELSE: 'controls_if_2elseif'
};

const CONDITIONAL_FIELD_VALUES = {
    IF_CONDITION: 'IF0',
    IF_DO: 'DO0',
    IF1_CONDITION: 'IF1',
    IF1_DO: 'DO1',
    IF2_CONDITION: 'IF2',
    IF2_DO: 'DO2',
    IF3_CONDITION: 'IF3',
    IF3_DO: 'DO3',
    ELSE_DO: 'ELSE'
};

const MATH_BLOCK_TYPES = {
    COMPARE: 'logic_compare',
    OPERATION: 'logic_operation',
    NEGATE: 'logic_negate',
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
    NEGATE_BOOL: 'BOOL',
    NUMBER_NUM: 'NUMBER_NUM',
    ARITHMETIC_A: 'ARITHMETIC_A',
    ARITHMETIC_B: 'ARITHMETIC_B',
    ARITHMETIC_OP: 'ARITHMETIC_OP'
};

const LOOP_BLOCK_TYPES = {
    REPEAT: 'for_loop',
    WAIT: 'wait',
    FOREVER_LOOP: 'forever_loop'
};

const LOOP_FIELD_VALUES = {
    REPEAT_TIMES: 'TIMES',
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
    DRIVE: 'drive',
    DRIVE_TIME: 'drive_time',
    DRIVE_DISTANCE: 'drive_distance',
    STOP: 'stop',
    TURN: 'turn',
    SPIN: 'spin'
};

const MOTOR_FIELD_VALUES = {
    DIRECTION: 'direction',
    DRIVING_PERCENTAGE: 'percentage',
    DRIVING_SECONDS: 'seconds',
    DRIVING_DISTANCE: 'distance',
    TURN_DIRECTION: 'turn_direction',
    TURN_DEGREES: 'turn_degrees'
};

const MOTOR_DIRECTIONS = {
    FORWARD: 'forward',
    BACKWARD: 'backward'
};

const TURN_DIRECTIONS = {
    CLOCKWISE: 'CLOCKWISE',
    COUNTERCLOCKWISE: 'COUNTERCLOCKWISE'
};

// ============================================================================
// SENSOR BLOCKS
// ============================================================================

const SENSORS_BLOCK_TYPES = {
    IMU_READ: 'imu_read',
    SIDE_TOF_READ: 'side_tof_read',
    CENTER_TOF_READ: 'center_tof_read',
    COLOR_SENSOR_READ: 'color_sensor_read',
    GET_FRONT_TOF_DISTANCE: 'get_front_distance_sensor_distance'
};

const SENSORS_FIELD_VALUES = {
    IMU_READ: 'imu_value',
    SIDE_TOF_READ: 'side_tof_value',
    CENTER_TOF_READ: 'center_tof_read',
    COLOR_SENSOR_READ: 'color_sensor'
};

// Keys are display names shown in dropdown, values are C++ function calls
const SENSOR_TYPES = {
    IMU: {
        'Yaw': 'getYaw()',
        'Pitch': 'getPitch()',
        'Roll': 'getRoll()',
        'X Acceleration': 'getXAccel()',
        'Y Acceleration': 'getYAccel()',
        'Z Acceleration': 'getZAccel()',
        'Acceleration Magnitude': 'getAccelMagnitude()',
        'X Rotation Rate': 'getXRotationRate()',
        'Y Rotation Rate': 'getYRotationRate()',
        'Z Rotation Rate': 'getZRotationRate()',
        'Magnetic Field X': 'getMagneticFieldX()',
        'Magnetic Field Y': 'getMagneticFieldY()',
        'Magnetic Field Z': 'getMagneticFieldZ()'
    },
    LEFTRIGHT: {
        'LEFT': 'LEFT',
        'RIGHT': 'RIGHT'
    },
    LED_COLORS: {
        'WHITE': 'WHITE',
        'RED': 'RED',
        'GREEN': 'GREEN',
        'BLUE': 'BLUE',
        'PURPLE': 'PURPLE',
        'YELLOW': 'YELLOW',
        'OFF': 'OFF'
    },
    COLOR_SENSOR_READ_COLORS: {
        'RED': 'RED',
        'GREEN': 'GREEN',
        'BLUE': 'BLUE',
        'YELLOW': 'YELLOW',
        'WHITE': 'WHITE',
        'BLACK': 'BLACK'
    },
    TONE_NAMES: {
        'A': 'A',
        'B': 'B',
        'C': 'C',
        'D': 'D',
        'E': 'E',
        'F': 'F',
        'G': 'G'
    }
};

// ============================================================================
// LED BLOCKS
// ============================================================================

const LED_BLOCK_TYPES = {
    CONTROL_ALL_LEDS: 'control_all_leds'
};

const LED_FIELD_VALUES = {
    LED_COLOR: 'led_color'
};

// ============================================================================
// SPEAKER BLOCKS
// ============================================================================

const SPEAKER_BLOCK_TYPES = {
    PLAY_TONE: 'play_tone'
};

const SPEAKER_FIELD_VALUES = {
    TONE_NAME: 'tone_name'
};

// ============================================================================
// BUTTON BLOCKS
// ============================================================================

const BUTTON_BLOCK_TYPES = {
    RIGHT_BUTTON_PRESS: 'right_button_press'
};
