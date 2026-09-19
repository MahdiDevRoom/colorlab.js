/* ------------------------------------------------
    src/core/extract.js
------------------------------------------------ */

import REGEXP from "./regexp.js";

export default {
    HEX: (input) => {
        const match = input.match(REGEXP.EX_HEX);
        if (!match) return null;
        return {
            R: parseInt(match[1], 16),
            G: parseInt(match[2], 16),
            B: parseInt(match[3], 16),
            A: match[4] ? parseFloat((parseInt(match[4], 16) / 255).toFixed(2)) : 1
        };
    },

    RGB: (input) => {
        const match = input.match(REGEXP.EX_RGB);
        if (!match) return null;
        return {
            R: parseInt(match[1], 10),
            G: parseInt(match[2], 10),
            B: parseInt(match[3], 10),
            A: parseFloat(match[4])
        };
    },

    HSL: (input) => {
        const match = input.match(REGEXP.EX_HSL);
        if (!match) return null;
        return {
            H: parseInt(match[1], 10),
            S: parseInt(match[2], 10),
            L: parseInt(match[3], 10),
            A: parseFloat(match[4])
        };
    },

    HSV: (input) => {
        const match = input.match(REGEXP.EX_HSV);
        if (!match) return null;
        return {
            H: parseInt(match[1], 10),
            S: parseInt(match[2], 10),
            V: parseInt(match[3], 10),
            A: parseFloat(match[4])
        };
    },

    HWB: (input) => {
        const match = input.match(REGEXP.EX_HWB);
        if (!match) return null;
        return {
            H: parseInt(match[1], 10),
            W: parseInt(match[2], 10),
            B: parseInt(match[3], 10),
            A: parseFloat(match[4])
        };
    },

    CMYK: (input) => {
        const match = input.match(REGEXP.EX_CMYK);
        if (!match) return null;
        return {
            C: parseFloat(match[1]),
            M: parseFloat(match[2]),
            Y: parseFloat(match[3]),
            K: parseFloat(match[4]),
            A: 1
        };
    },

    LAB: (input) => {
        const match = input.match(REGEXP.EX_LAB);
        if (!match) return null;
        return {
            L: parseFloat(match[1]),
            a: parseFloat(match[2]),
            b: parseFloat(match[3]),
            A: parseFloat(match[4])
        };
    },

    LCH: (input) => {
        const match = input.match(REGEXP.EX_LCH);
        if (!match) return null;
        return {
            L: parseFloat(match[1]),
            C: parseFloat(match[2]),
            h: parseFloat(match[3]),
            A: parseFloat(match[4])
        };
    },


    OKLAB: (input) => {
        const match = input.match(REGEXP.EX_OKLAB);
        if (!match) return null;
        return {
            L: parseFloat(match[1]),
            a: parseFloat(match[2]),
            b: parseFloat(match[3]),
            A: parseFloat(match[4])
        };
    },

    OKLCH: (input) => {
        const match = input.match(REGEXP.EX_OKLCH);
        if (!match) return null;
        return {
            L: parseFloat(match[1]),
            C: parseFloat(match[2]),
            h: parseFloat(match[3]),
            A: parseFloat(match[4])
        };
    },

    OKHSL: (input) => {
        const match = input.match(REGEXP.EX_OKHSL);
        if (!match) return null;
        return {
            H: parseInt(match[1], 10),
            S: parseInt(match[2], 10),
            L: parseInt(match[3], 10),
            A: parseFloat(match[4])
        };
    },

    OKHSV: (input) => {
        const match = input.match(REGEXP.EX_OKHSV);
        if (!match) return null;
        return {
            H: parseInt(match[1], 10),
            S: parseInt(match[2], 10),
            V: parseInt(match[3], 10),
            A: parseFloat(match[4])
        };
    },

    XYZ: (input) => {
        const match = input.match(REGEXP.EX_XYZ);
        if (!match) return null;
        return {
            X: parseFloat(match[1]),
            Y: parseFloat(match[2]),
            Z: parseFloat(match[3]),
            A: parseFloat(match[4])
        };
    },

    P3: (input) => {
        const match = input.match(REGEXP.EX_P3);
        if (!match) return null;
        return {
            R: parseFloat(match[1]),
            G: parseFloat(match[2]),
            B: parseFloat(match[3]),
            A: parseFloat(match[4])
        };
    }
};