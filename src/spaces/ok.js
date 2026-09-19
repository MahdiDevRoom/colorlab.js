/* ------------------------------------------------
    src/spaces/ok.js
------------------------------------------------ */

import {
    OKLAB_M1,
    OKLAB_M2
} from "../core/constants.js";

import {
    srgbToLinear,
    linearToSrgb,
    multiplyMatrix,
    clamp,
    getOkCuspFromHue,
    okSaturationToChroma,
    okChromaToSaturation
} from "../core/helpers.js";

export default {
    RGB_TO_OKLAB: ({ R, G, B, A = 1 }) => {
        const rLin = srgbToLinear(R);
        const gLin = srgbToLinear(G);
        const bLin = srgbToLinear(B);

        const [l, m, s] = multiplyMatrix(OKLAB_M1, [rLin, gLin, bLin]);
        const [L, a, b] = multiplyMatrix(OKLAB_M2, [
            Math.cbrt(l),
            Math.cbrt(m),
            Math.cbrt(s)
        ]);

        return { L, a, b, A: parseFloat(A.toFixed(2)) };
    },

    OKLAB_TO_RGB: ({ L, a, b, A = 1 }) => {
        const [l_, m_, s_] = multiplyMatrix(OKLAB_M1_INV, [L, a, b]);
        const [rLin, gLin, bLin] = multiplyMatrix(OKLAB_M2_INV, [
            l_ * l_ * l_,
            m_ * m_ * m_,
            s_ * s_ * s_
        ]);

        return {
            R: linearToSrgb(rLin),
            G: linearToSrgb(gLin),
            B: linearToSrgb(bLin),
            A: parseFloat(A.toFixed(2))
        };
    },

    OKLAB_TO_OKLCH: ({ L, a, b, A = 1 }) => {
        const C = Math.sqrt(a * a + b * b);
        let h = Math.atan2(b, a) * (180 / Math.PI);
        if (h < 0) h += 360;
        return { L, C, h, A: parseFloat(A.toFixed(2)) };
    },

    OKLCH_TO_OKLAB: ({ L, C, h, A = 1 }) => {
        const hRad = (h * Math.PI) / 180;
        return {
            L,
            a: C * Math.cos(hRad),
            b: C * Math.sin(hRad),
            A: parseFloat(A.toFixed(2))
        };
    },

    OKLCH_TO_OKHSL: ({ L, C, h, A = 1 }) => {
        const S = okChromaToSaturation(L, C, h);
        return {
            H: Math.round(h),
            S: Math.round(S * 100),
            L: Math.round(L * 100),
            A: parseFloat(A.toFixed(2))
        };
    },

    OKHSL_TO_OKLCH: ({ H, S, L, A = 1 }) => {
        const lNorm = L / 100;
        const sNorm = S / 100;
        const C = okSaturationToChroma(lNorm, sNorm, H);
        return {
            L: lNorm,
            C,
            h: H,
            A: parseFloat(A.toFixed(2))
        };
    },

    OKLCH_TO_OKHSV: ({ L, C, h, A = 1 }) => {
        const cusp = getOkCuspFromHue(h);
        const V = cusp.L > 0 ? clamp(L / cusp.L, 0, 1) : 0;
        const S = V > 0 ? clamp(C / (cusp.C * V), 0, 1) : 0;

        return {
            H: Math.round(h),
            S: Math.round(S * 100),
            V: Math.round(V * 100),
            A: parseFloat(A.toFixed(2))
        };
    },

    OKHSV_TO_OKLCH: ({ H, S, V, A = 1 }) => {
        const cusp = getOkCuspFromHue(H);
        const vNorm = V / 100;
        const sNorm = S / 100;

        const L = cusp.L * vNorm;
        const C = cusp.C * vNorm * sNorm;

        return {
            L,
            C,
            h: H,
            A: parseFloat(A.toFixed(2))
        };
    },

    RGB_TO_OKLCH: (rgb) => OK.OKLAB_TO_OKLCH(OK.RGB_TO_OKLAB(rgb)),
    OKLCH_TO_RGB: (oklch) => OK.OKLAB_TO_RGB(OK.OKLCH_TO_OKLAB(oklch)),
    RGB_TO_OKHSL: (rgb) => OK.OKLCH_TO_OKHSL(OK.RGB_TO_OKLCH(rgb)),
    OKHSL_TO_RGB: (okhsl) => OK.OKLCH_TO_RGB(OK.OKHSL_TO_OKLCH(okhsl)),
    RGB_TO_OKHSV: (rgb) => OK.OKLCH_TO_OKHSV(OK.RGB_TO_OKLCH(rgb)),
    OKHSV_TO_RGB: (okhsv) => OK.OKLCH_TO_RGB(OK.OKHSV_TO_OKLCH(okhsv)),
};