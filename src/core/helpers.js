/* ------------------------------------------------
    src/core/helpers.js
------------------------------------------------ */

import { OKLAB_M1_INV, OKLAB_M2_INV } from "./constants.js";

export const normalizeHue = (hue) => {
    return Math.round(((parseFloat(hue) % 360) + 360) % 360);
};

export const isInRange = (values, min, max) => {
    return values.every(v => v >= min && v <= max);
};

export const trimCase = (input) => {
    return String(input).replace(/\s+/g, '').toLowerCase();
};

export const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
};

export const toHex2 = (num) => {
    const hex = Math.round(num).toString(16).toUpperCase();
    return hex.length === 1 ? '0' + hex : hex;
};

export const srgbToLinear = (c) => {
    c = c / 255;
    return c <= 0.04045 
        ? c / 12.92 
        : Math.pow((c + 0.055) / 1.055, 2.4);
};

export const linearToSrgb = (c) => {
    c = c <= 0.0031308 
        ? 12.92 * c 
        : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
    return Math.round(clamp(c, 0, 1) * 255);
};

export const multiplyMatrix = (matrix, vector) => {
    return matrix.map(row => 
        row.reduce((sum, val, i) => sum + val * vector[i], 0)
    );
};

export const xyzToLabF = (t) => {
    return t > 0.008856 
        ? Math.cbrt(t) 
        : (903.3 * t + 16) / 116;
};

export const labToXyzF = (t) => {
    const t3 = t * t * t;
    return t3 > 0.008856 
        ? t3 
        : (116 * t - 16) / 903.3;
};

export const computeOkChannel = (rowIndex, L, a, b) => {
    const l_ = L + OKLAB_M2_INV[0][1] * a + OKLAB_M2_INV[0][2] * b;
    const m_ = L + OKLAB_M2_INV[1][1] * a + OKLAB_M2_INV[1][2] * b;
    const s_ = L + OKLAB_M2_INV[2][1] * a + OKLAB_M2_INV[2][2] * b;

    const l = l_ * l_ * l_;
    const m = m_ * m_ * m_;
    const s = s_ * s_ * s_;

    return OKLAB_M1_INV[rowIndex][0] * l + 
           OKLAB_M1_INV[rowIndex][1] * m + 
           OKLAB_M1_INV[rowIndex][2] * s;
};

export const findOkCusp = (a, b) => {
    let bestL = 0;
    let bestC = 0;
    const abLength = Math.sqrt(a * a + b * b);

    if (abLength === 0) return { L: 0, C: 0 };

    for (let i = 0; i < 3; i++) {
        const S_c0 = computeOkChannel(i, 0, a, b);
        const T_c0 = computeOkChannel(i, 1, 0, 0) - 1;
        
        if (S_c0 !== 0) {
            const L_cusp = -T_c0 / S_c0;
            if (L_cusp > 0 && L_cusp <= 1) {
                const C_cusp = L_cusp / abLength;
                if (L_cusp > bestL) {
                    bestL = L_cusp;
                    bestC = C_cusp;
                }
            }
        }

        const S_c1 = computeOkChannel(i, 0, a, b);
        const T_c1 = computeOkChannel(i, 1, 0, 0) - 1;
        const denom = S_c1 + T_c1;
        
        if (denom !== 0) {
            const L_cusp = (1 - T_c1) / denom;
            if (L_cusp > 0 && L_cusp <= 1) {
                const C_cusp = L_cusp / abLength;
                if (L_cusp > bestL) {
                    bestL = L_cusp;
                    bestC = C_cusp;
                }
            }
        }
    }

    return { L: bestL, C: bestC };
};

export const getOkCuspFromHue = (h) => {
    const hRad = (h * Math.PI) / 180;
    const a = Math.cos(hRad);
    const b = Math.sin(hRad);
    return findOkCusp(a, b);
};

export const okSaturationToChroma = (L, S, h) => {
    if (S === 0 || L === 0 || L >= 1) return 0;

    const cusp = getOkCuspFromHue(h);
    if (cusp.L === 0) return 0;

    const C_max = L <= cusp.L 
        ? cusp.C * (L / cusp.L)
        : cusp.C * ((1 - L) / (1 - cusp.L));

    return S * C_max;
};

export const okChromaToSaturation = (L, C, h) => {
    if (C === 0 || L === 0 || L >= 1) return 0;

    const cusp = getOkCuspFromHue(h);
    if (cusp.L === 0) return 0;

    const C_max = L <= cusp.L 
        ? cusp.C * (L / cusp.L)
        : cusp.C * ((1 - L) / (1 - cusp.L));

    return C_max === 0 ? 0 : clamp(C / C_max, 0, 1);
};