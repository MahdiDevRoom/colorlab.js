/**
 * @name ColorLab
 * @version 2.0.0
 * @author Mahdi
 * @license MIT
 * @see https://github.com/mahdidevroom/Colorlab.js
 */

/* ------------------------------------------------
    Imports
------------------------------------------------ */
import { COLORS, COLORS_MAP, HARMONIES } from "./core/constants.js";
import REGEXP from "./core/regexp.js";
import NORMALIZE from "./core/normalize.js";
import EXTRACT from "./core/extract.js";
import { trimCase, toHex2, clamp } from "./core/helpers.js";

// Space Modules
import SRGB from "./spaces/srgb.js";
import CIE from "./spaces/cie.js";
import OK from "./spaces/ok.js";

/* ------------------------------------------------
    ColorLab Class
------------------------------------------------ */
export default class ColorLab {
    static version = '2.0.0';

    //--- Private Static Values -------------------
    static #COLORS = COLORS;
    static #COLORS_MAP = COLORS_MAP;
    static #HARMONIES = HARMONIES;
    static #REGEXP = REGEXP;
    static #NORMALIZE = NORMALIZE;
    static #EXTRACT = EXTRACT;

    //--- Private Static Methods (Core Logic) -----
    
    static #detectSmart(input) {
        if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
            if ('R' in input && 'G' in input && 'B' in input) return 'RGB';
            if ('H' in input && 'S' in input && 'L' in input) return 'HSL';
            if ('H' in input && 'S' in input && 'V' in input) return 'HSV';
            if ('C' in input && 'M' in input && 'Y' in input && 'K' in input) return 'CMYK';
            if ('L' in input && 'a' in input && 'b' in input) return 'OKLAB';
            if ('L' in input && 'C' in input && 'h' in input) return 'OKLCH';
            if ('L' in input && 'a' in input && 'b' in input && input.L <= 1) return 'LAB'; // تمایز LAB از OKLAB بر اساس محدوده L
            
            if (typeof input.toHexString === 'function') input = input.toHexString();
            else if (typeof input.toRgbString === 'function') input = input.toRgbString();
            else if (typeof input.toString === 'function' && input.toString() !== '[object Object]') input = String(input);
            else return null;
        }

        if (typeof input !== 'string') return null;
        const trimmed = trimCase(input);

        if (ColorLab.#COLORS_MAP.has(trimmed)) return 'KEYWORD';
        if (ColorLab.#REGEXP.HEX.test(trimmed)) return 'HEX';
        if (ColorLab.#REGEXP.RGB.test(trimmed)) return 'RGB';
        if (ColorLab.#REGEXP.HSL.test(trimmed)) return 'HSL';
        if (ColorLab.#REGEXP.HSV.test(trimmed)) return 'HSV';
        if (ColorLab.#REGEXP.CMYK.test(trimmed)) return 'CMYK';
        if (ColorLab.#REGEXP.OKLAB.test(trimmed)) return 'OKLAB';
        if (ColorLab.#REGEXP.OKLCH.test(trimmed)) return 'OKLCH';
        if (ColorLab.#REGEXP.OKHSL.test(trimmed)) return 'OKHSL';
        if (ColorLab.#REGEXP.OKHSV.test(trimmed)) return 'OKHSV';
        if (ColorLab.#REGEXP.LAB.test(trimmed)) return 'LAB';
        if (ColorLab.#REGEXP.LCH.test(trimmed)) return 'LCH';

        return null;
    }

    static #normalizeSmart(input) {
        const type = ColorLab.#detectSmart(input);
        if (!type) return null;

        if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
            if (type === 'RGB') return `rgb(${input.R} ${input.G} ${input.B} / ${input.A ?? 1})`;
            if (type === 'HSL') return `hsl(${input.H}deg ${input.S}% ${input.L}% / ${input.A ?? 1})`;
            if (type === 'HSV') return `hsv(${input.H}deg ${input.S}% ${input.V}% / ${input.A ?? 1})`;
            if (type === 'CMYK') return `cmyk(${input.C}% ${input.M}% ${input.Y}% ${input.K}%)`;
            if (type === 'OKLAB') return `oklab(${input.L} ${input.a} ${input.b} / ${input.A ?? 1})`;
            if (type === 'OKLCH') return `oklch(${input.L} ${input.C} ${input.h}deg / ${input.A ?? 1})`;
        }

        if (type === 'KEYWORD') return ColorLab.#COLORS_MAP.get(trimCase(input));
        return ColorLab.#NORMALIZE[type](input);
    }

    static #getChannels(input) {
        const type = ColorLab.#detectSmart(input);
        if (!type) return null;

        if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
            let channels = null;
            if (type === 'RGB')  channels = { R: Number(input.R), G: Number(input.G), B: Number(input.B), A: Number(input.A ?? 1) };
            if (type === 'HSL')  channels = { H: Number(input.H), S: Number(input.S), L: Number(input.L), A: Number(input.A ?? 1) };
            if (type === 'HSV')  channels = { H: Number(input.H), S: Number(input.S), V: Number(input.V), A: Number(input.A ?? 1) };
            if (type === 'CMYK') channels = { C: Number(input.C), M: Number(input.M), Y: Number(input.Y), K: Number(input.K), A: Number(input.A ?? 1) };
            if (type === 'OKLAB')channels = { L: Number(input.L), a: Number(input.a), b: Number(input.b), A: Number(input.A ?? 1) };
            if (type === 'OKLCH')channels = { L: Number(input.L), C: Number(input.C), h: Number(input.h), A: Number(input.A ?? 1) };
            return channels;
        }

        if (type === 'KEYWORD') {
            const hex = ColorLab.#COLORS_MAP.get(trimCase(input));
            return ColorLab.#EXTRACT.HEX(hex);
        }

        const normalized = ColorLab.#NORMALIZE[type](input);
        if (!normalized) return null;

        return ColorLab.#EXTRACT[type](normalized);
    }

    static #getRgbChannels(input) {
        const channels = ColorLab.#getChannels(input);
        if (!channels) return null;

        if (channels.R !== undefined) return channels;
        if (channels.H !== undefined && channels.L !== undefined) return SRGB.HSL_TO_RGB(channels);
        if (channels.H !== undefined && channels.V !== undefined) return SRGB.HSV_TO_RGB(channels);
        if (channels.C !== undefined && channels.M !== undefined) return SRGB.CMYK_TO_RGB(channels);
        if (channels.a !== undefined) return CIE.LAB_TO_RGB(channels);
        if (channels.C !== undefined && channels.h !== undefined) return OK.OKLCH_TO_RGB(channels);

        return null;
    }

    static #rgbToHex(rgb) {
        if (!rgb) return null;
        const r = toHex2(rgb.R), g = toHex2(rgb.G), b = toHex2(rgb.B);
        return rgb.A === 1 ? `#${r}${g}${b}` : `#${r}${g}${b}${toHex2(rgb.A * 255)}`;
    }

    //--- Public Static Methods (API) -------------

    /* 1. Detection & Normalization */
    static detect(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.#detectSmart(item));
        return ColorLab.#detectSmart(input);
    }

    static normalize(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.#normalizeSmart(item));
        return ColorLab.#normalizeSmart(input);
    }

    static isValid(input) {
        if (Array.isArray(input)) return input.every(item => ColorLab.#detectSmart(item) !== null);
        return ColorLab.#detectSmart(input) !== null;
    }

    static analyze(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.analyze(item));
        return {
            keyword: ColorLab.toKeyword(input),
            hex: ColorLab.toHex(input),
            rgb: ColorLab.toRgb(input),
            hsl: ColorLab.toHsl(input),
            hsv: ColorLab.toHsv(input),
            cmyk: ColorLab.toCmyk(input),
            oklab: ColorLab.toOklab(input),
            oklch: ColorLab.toOklch(input),
        };
    }

    /* 2. Channel Extraction */
    static getChannels(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getChannels(item));
        return ColorLab.#getChannels(input);
    }

    static getRgbChannels(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getRgbChannels(item));
        return ColorLab.#getRgbChannels(input);
    }

    static getHslChannels(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getHslChannels(item));
        const ch = ColorLab.#getChannels(input);
        if (!ch) return null;
        if (ch.H !== undefined && ch.L !== undefined) return ch;
        const rgb = ColorLab.#getRgbChannels(input);
        return rgb ? SRGB.RGB_TO_HSL(rgb) : null;
    }

    static getHsvChannels(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getHsvChannels(item));
        const ch = ColorLab.#getChannels(input);
        if (!ch) return null;
        if (ch.H !== undefined && ch.V !== undefined) return ch;
        const rgb = ColorLab.#getRgbChannels(input);
        return rgb ? SRGB.RGB_TO_HSV(rgb) : null;
    }

    static getCmykChannels(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getCmykChannels(item));
        const ch = ColorLab.#getChannels(input);
        if (!ch) return null;
        if (ch.C !== undefined && ch.M !== undefined) return ch;
        const rgb = ColorLab.#getRgbChannels(input);
        return rgb ? SRGB.RGB_TO_CMYK(rgb) : null;
    }

    static getHexChannels(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getHexChannels(item));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        return {
            R: toHex2(rgb.R), G: toHex2(rgb.G), B: toHex2(rgb.B),
            A: rgb.A === 1 ? 'FF' : toHex2(rgb.A * 255)
        };
    }

    static getAllChannels(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getAllChannels(item));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;

        const hsl = SRGB.RGB_TO_HSL(rgb);
        const hsv = SRGB.RGB_TO_HSV(rgb);
        const cmyk = SRGB.RGB_TO_CMYK(rgb);
        const oklch = OK.RGB_TO_OKLCH(rgb);

        return {
            R: rgb.R, G: rgb.G, B: rgb.B, A: rgb.A,
            H: hsl.H, S: hsl.S, L: hsl.L,
            V: hsv.V,
            C: cmyk.C, M: cmyk.M, Y: cmyk.Y, K: cmyk.K,
            okL: oklch.L, okC: oklch.C, okH: oklch.h
        };
    }

    /* 3. Single Channel Extraction */
    static getRed(input) { const ch = ColorLab.getRgbChannels(input); return ch ? ch.R : null; }
    static getGreen(input) { const ch = ColorLab.getRgbChannels(input); return ch ? ch.G : null; }
    static getBlue(input) { const ch = ColorLab.getRgbChannels(input); return ch ? ch.B : null; }
    static getAlpha(input) { const ch = ColorLab.getRgbChannels(input); return ch ? ch.A : null; }
    static getHue(input) { const ch = ColorLab.getHslChannels(input); return ch ? ch.H : null; }
    static getSaturation(input) { const ch = ColorLab.getHslChannels(input); return ch ? ch.S : null; }
    static getLightness(input) { const ch = ColorLab.getHslChannels(input); return ch ? ch.L : null; }

    /* 4. Color Conversions (String Output) */
    static toHex(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toHex(i));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        return ColorLab.#rgbToHex(rgb);
    }

    static toRgb(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toRgb(i));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        return rgb.A === 1 ? `rgb(${rgb.R} ${rgb.G} ${rgb.B})` : `rgb(${rgb.R} ${rgb.G} ${rgb.B} / ${rgb.A})`;
    }

    static toHsl(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toHsl(i));
        const hsl = ColorLab.getHslChannels(input);
        if (!hsl) return null;
        return hsl.A === 1 ? `hsl(${hsl.H}deg ${hsl.S}% ${hsl.L}%)` : `hsl(${hsl.H}deg ${hsl.S}% ${hsl.L}% / ${hsl.A})`;
    }

    static toHsv(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toHsv(i));
        const hsv = ColorLab.getHsvChannels(input);
        if (!hsv) return null;
        return hsv.A === 1 ? `hsv(${hsv.H}deg ${hsv.S}% ${hsv.V}%)` : `hsv(${hsv.H}deg ${hsv.S}% ${hsv.V}% / ${hsv.A})`;
    }

    static toCmyk(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toCmyk(i));
        const cmyk = ColorLab.getCmykChannels(input);
        if (!cmyk) return null;
        return `cmyk(${cmyk.C}% ${cmyk.M}% ${cmyk.Y}% ${cmyk.K}%)`;
    }

    static toKeyword(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toKeyword(i));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        
        let closest = null, minDist = Infinity;
        for (const [name, hex] of Object.entries(ColorLab.#COLORS)) {
            const target = ColorLab.#EXTRACT.HEX(hex);
            const dist = (rgb.R - target.R) ** 2 + (rgb.G - target.G) ** 2 + (rgb.B - target.B) ** 2;
            if (dist < minDist) { minDist = dist; closest = name; }
        }
        return closest.replace(/([A-Z])/g, ' $1').trim();
    }

    /* 5. Modern Color Conversions (OK / CIE / P3 / XYZ) */
    static toOklab(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toOklab(i));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const ok = OK.RGB_TO_OKLAB(rgb);
        return `oklab(${ok.L.toFixed(3)} ${ok.a.toFixed(3)} ${ok.b.toFixed(3)} / ${ok.A})`;
    }

    static toOklch(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toOklch(i));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const ok = OK.RGB_TO_OKLCH(rgb);
        return `oklch(${ok.L.toFixed(3)} ${ok.C.toFixed(3)} ${ok.h.toFixed(1)}deg / ${ok.A})`;
    }

    static toOkhsl(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toOkhsl(i));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const ok = OK.RGB_TO_OKHSL(rgb);
        return `okhsl(${ok.H}deg ${ok.S}% ${ok.L}% / ${ok.A})`;
    }

    static toOkhsv(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toOkhsv(i));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const ok = OK.RGB_TO_OKHSV(rgb);
        return `okhsv(${ok.H}deg ${ok.S}% ${ok.V}% / ${ok.A})`;
    }

    static toLab(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toLab(i));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const lab = CIE.RGB_TO_LAB(rgb);
        return `lab(${lab.L.toFixed(1)}% ${lab.a.toFixed(2)} ${lab.b.toFixed(2)} / ${lab.A})`;
    }

    static toLch(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toLch(i));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const lch = CIE.RGB_TO_LCH(rgb);
        return `lch(${lch.L.toFixed(1)}% ${lch.C.toFixed(2)} ${lch.h.toFixed(1)}deg / ${lch.A})`;
    }

    static toP3(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toP3(i));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const r = (rgb.R / 255).toFixed(3), g = (rgb.G / 255).toFixed(3), b = (rgb.B / 255).toFixed(3);
        return `color(display-p3 ${r} ${g} ${b} / ${rgb.A})`;
    }

    static toXyz(input) {
        if (Array.isArray(input)) return input.map(i => ColorLab.toXyz(i));
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const xyz = CIE.RGB_TO_XYZ(rgb);
        return `color(xyz ${xyz.X.toFixed(3)} ${xyz.Y.toFixed(3)} ${xyz.Z.toFixed(3)} / ${xyz.A})`;
    }

    /* 6. Luminance & Contrast (WCAG 2.1) */
    static getLuminance(input) {
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const toLinear = (c) => { const v = c / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
        return 0.2126 * toLinear(rgb.R) + 0.7152 * toLinear(rgb.G) + 0.0722 * toLinear(rgb.B);
    }

    static getContrast(color1, color2) {
        const lum1 = ColorLab.getLuminance(color1);
        const lum2 = ColorLab.getLuminance(color2);
        if (lum1 === null || lum2 === null) return null;
        const lighter = Math.max(lum1, lum2);
        const darker = Math.min(lum1, lum2);
        return parseFloat(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
    }

    static getContrastLevel(ratio, largeText = false) {
        if (ratio === null || typeof ratio !== 'number') return 'Fail';
        if (largeText) {
            if (ratio >= 4.5) return 'AAA';
            if (ratio >= 3) return 'AA Large';
            return 'Fail';
        }
        if (ratio >= 7) return 'AAA';
        if (ratio >= 4.5) return 'AA';
        return 'Fail';
    }

    static getBestContrast(input) {
        const lum = ColorLab.getLuminance(input);
        if (lum === null) return null;
        const contrastWhite = (1 + 0.05) / (lum + 0.05);
        const contrastBlack = (lum + 0.05) / (0 + 0.05);
        return contrastWhite > contrastBlack ? '#FFFFFF' : '#000000';
    }

    static isAccessible(color1, color2, level = 'AA', largeText = false) {
        const ratio = ColorLab.getContrast(color1, color2);
        if (ratio === null) return false;
        const thresholds = { 'AA': largeText ? 3 : 4.5, 'AAA': largeText ? 4.5 : 7 };
        return ratio >= (thresholds[level] || 4.5);
    }

    /* 7. Color Manipulation (Shading) */
    static tintHsl(input, amount = 10) {
        const hsl = ColorLab.getHslChannels(input);
        if (!hsl) return null;
        hsl.L = clamp(hsl.L + amount, 0, 100);
        return ColorLab.#rgbToHex(SRGB.HSL_TO_RGB(hsl));
    }

    static shadeHsl(input, amount = 10) {
        const hsl = ColorLab.getHslChannels(input);
        if (!hsl) return null;
        hsl.L = clamp(hsl.L - amount, 0, 100);
        return ColorLab.#rgbToHex(SRGB.HSL_TO_RGB(hsl));
    }

    static toneHsl(input, amount = 10) {
        const hsl = ColorLab.getHslChannels(input);
        if (!hsl) return null;
        hsl.S = clamp(hsl.S - amount, 0, 100);
        return ColorLab.#rgbToHex(SRGB.HSL_TO_RGB(hsl));
    }

    // --- Perceptually Uniform Shading (OKHSL) ---
    static tintOkhsl(input, amount = 10) {
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const okhsl = OK.RGB_TO_OKHSL(rgb);
        okhsl.L = clamp(okhsl.L + amount, 0, 100);
        return ColorLab.#rgbToHex(OK.OKLCH_TO_RGB(OK.OKHSL_TO_OKLCH(okhsl)));
    }

    static shadeOkhsl(input, amount = 10) {
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const okhsl = OK.RGB_TO_OKHSL(rgb);
        okhsl.L = clamp(okhsl.L - amount, 0, 100);
        return ColorLab.#rgbToHex(OK.OKLCH_TO_RGB(OK.OKHSL_TO_OKLCH(okhsl)));
    }

    static toneOkhsl(input, amount = 10) {
        const rgb = ColorLab.#getRgbChannels(input);
        if (!rgb) return null;
        const okhsl = OK.RGB_TO_OKHSL(rgb);
        okhsl.S = clamp(okhsl.S - amount, 0, 100);
        return ColorLab.#rgbToHex(OK.OKLCH_TO_RGB(OK.OKHSL_TO_OKLCH(okhsl)));
    }

    /* 8. Utilities (Mix, Random, Harmonies) */
    static mix(color1, color2, ratio = 0.5) {
        const rgb1 = ColorLab.#getRgbChannels(color1);
        const rgb2 = ColorLab.#getRgbChannels(color2);
        if (!rgb1 || !rgb2) return null;
        const r = Math.round(rgb1.R + (rgb2.R - rgb1.R) * ratio);
        const g = Math.round(rgb1.G + (rgb2.G - rgb1.G) * ratio);
        const b = Math.round(rgb1.B + (rgb2.B - rgb1.B) * ratio);
        const a = parseFloat((rgb1.A + (rgb2.A - rgb1.A) * ratio).toFixed(2));
        return ColorLab.#rgbToHex({ R: r, G: g, B: b, A: a });
    }

    static random() {
        return ColorLab.#rgbToHex({
            R: Math.floor(Math.random() * 256),
            G: Math.floor(Math.random() * 256),
            B: Math.floor(Math.random() * 256),
            A: 1
        });
    }

    static getHarmonies(input) {
        const hsl = ColorLab.getHslChannels(input);
        if (!hsl) return null;
        const result = {};
        for (const [name, deltas] of Object.entries(ColorLab.#HARMONIES)) {
            result[name] = deltas.map(delta => {
                const newH = ((hsl.H + delta) % 360 + 360) % 360;
                return ColorLab.#rgbToHex(SRGB.HSL_TO_RGB({ H: newH, S: hsl.S, L: hsl.L, A: hsl.A }));
            });
        }
        return result;
    }
}