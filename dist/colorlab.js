/**
 * @name ColorLab
 * @version 1.0.0
 * @author Mahdi
 * @license MIT
 * @see https://github.com/mahdidevroom/Colorlab.js
 */

export default class ColorLab {
    /* --------------------------------------------
        Public Values
    -------------------------------------------- */
    static version = '1.0.0';

    /* --------------------------------------------
        Private Values
    -------------------------------------------- */
    static #COLORS;
    static #COLORS_MAP;
    static #HARMONIES;
    static #REGEXP;
    static #NORMALIZE;
    static #EXTRACT;
    
    /* --------------------------------------------
        Private Methods
    -------------------------------------------- */
    
    /* --------------------------------------------
        Convert Engine
    -------------------------------------------- */
    static #CONVERT = {};
    
    /* --------------------------------------------
        Public Methods
    -------------------------------------------- */
    // Tools
    static detect() {};
    static normalize() {};
    static isValid() {};
    static analyze() {};
    static channels() {};
    static random() {};
    
    // Color Conversions
    static toKeyword() {};
    static toRgb() {};
    static toHex() {};
    static toHsl() {};
    static toHsv() {};
    static toCmyk() {};
    static toXyz() {};
    static toLab() {};
    static toLch() {};
    static toOkLab() {};
    static toOkLch() {};
    static toOkHsl() {};
    static toOkHsv() {};
    
    // Shading
    static hue() {};
    static okhue() {};
    static tint() {};
    static tone() {};
    static shade() {};
    static ray() {};
    
    // Get Detail
    static getRed() {};
    static getGreen() {};
    static getBlue() {};
    static getAlpha() {};
    static getHue() {};
    static getSaturation() {};
    static getLightness() {};
    static getCyan() {};
    static getMagenta() {};
    static getYellow() {};
    static getKey() {};
    static getValue() {};
    static getRay() {};
    
    // Change Detail
    static changeRed() {};
    static changeGreen() {};
    static changeBlue() {};
    static changeAlpha() {};
    static changeHue() {};
    static changeSaturation() {};
    static changeLightness() {};
    static changeCyan() {};
    static changeMagenta() {};
    static changeYellow() {};
    static changeKey() {};
    static changeValue() {};
    static changeRay() {};
    
    // Contrast
    static getContrast() {};
    static getContrastLevel() {};
    static getBestContrastColor() {};
    
    // Harmonies
    static getHarmonies() {};
    
    // Mix
    static mix() {};
    
    // convert 
    static convert() {};
}