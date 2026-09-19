/* ------------------------------------------------
    src/spaces/cie.js
------------------------------------------------ */

import { 
    D65, 
    RGB_TO_XYZ_MATRIX, 
    XYZ_TO_RGB_MATRIX 
} from "../core/constants.js";

import { 
    srgbToLinear, 
    linearToSrgb, 
    multiplyMatrix,
    xyzToLabF,
    labToXyzF
} from "../core/helpers.js";

export default {
    RGB_TO_XYZ: ({ R, G, B, A = 1 }) => {
        const rLin = srgbToLinear(R);
        const gLin = srgbToLinear(G);
        const bLin = srgbToLinear(B);
        const [X, Y, Z] = multiplyMatrix(RGB_TO_XYZ_MATRIX, [rLin, gLin, bLin]);
        return { X, Y, Z, A: parseFloat(A.toFixed(2)) };
    },

    XYZ_TO_RGB: ({ X, Y, Z, A = 1 }) => {
        const [rLin, gLin, bLin] = multiplyMatrix(XYZ_TO_RGB_MATRIX, [X, Y, Z]);
        return {
            R: linearToSrgb(rLin),
            G: linearToSrgb(gLin),
            B: linearToSrgb(bLin),
            A: parseFloat(A.toFixed(2))
        };
    },

    XYZ_TO_LAB: ({ X, Y, Z, A = 1 }) => {
        const fx = xyzToLabF(X / D65.X);
        const fy = xyzToLabF(Y / D65.Y);
        const fz = xyzToLabF(Z / D65.Z);
        return {
            L: 116 * fy - 16,
            a: 500 * (fx - fy),
            b: 200 * (fy - fz),
            A: parseFloat(A.toFixed(2))
        };
    },

    LAB_TO_XYZ: ({ L, a, b, A = 1 }) => {
        const fy = (L + 16) / 116;
        const fx = a / 500 + fy;
        const fz = fy - b / 200;
        return {
            X: labToXyzF(fx) * D65.X,
            Y: labToXyzF(fy) * D65.Y,
            Z: labToXyzF(fz) * D65.Z,
            A: parseFloat(A.toFixed(2))
        };
    },

    LAB_TO_LCH: ({ L, a, b, A = 1 }) => {
        const C = Math.sqrt(a * a + b * b);
        let h = Math.atan2(b, a) * (180 / Math.PI);
        if (h < 0) h += 360;
        return { L, C, h, A: parseFloat(A.toFixed(2)) };
    },

    LCH_TO_LAB: ({ L, C, h, A = 1 }) => {
        const hRad = h * (Math.PI / 180);
        return {
            L,
            a: C * Math.cos(hRad),
            b: C * Math.sin(hRad),
            A: parseFloat(A.toFixed(2))
        };
    },

    RGB_TO_LAB: (rgb) => CIE.XYZ_TO_LAB(CIE.RGB_TO_XYZ(rgb)),
    LAB_TO_RGB: (lab) => CIE.XYZ_TO_RGB(CIE.LAB_TO_XYZ(lab)),
    RGB_TO_LCH: (rgb) => CIE.LAB_TO_LCH(CIE.RGB_TO_LAB(rgb)),
    LCH_TO_RGB: (lch) => CIE.LAB_TO_RGB(CIE.LCH_TO_LAB(lch)),
};