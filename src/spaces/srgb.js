/* ------------------------------------------------
    src/spaces/srgb.js
------------------------------------------------ */

import { clamp } from "../core/helpers.js";

export default {
    RGB_TO_HSL: ({ R, G, B, A = 1 }) => {
        const r = R / 255, g = G / 255, b = B / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const delta = max - min;

        let H = 0, S = 0;
        const L = (max + min) / 2;

        if (delta !== 0) {
            S = L <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
            switch (max) {
                case r: H = ((g - b) / delta) % 6; break;
                case g: H = (b - r) / delta + 2; break;
                case b: H = (r - g) / delta + 4; break;
            }
            H = Math.round(H * 60);
            if (H < 0) H += 360;
        }

        return {
            H,
            S: Math.round(S * 100),
            L: Math.round(L * 100),
            A: parseFloat(A.toFixed(2))
        };
    },

    HSL_TO_RGB: ({ H, S, L, A = 1 }) => {
        const h = H / 360, s = S / 100, l = L / 100;
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h * 6) % 2 - 1));
        const m = l - c / 2;

        let r = 0, g = 0, b = 0;
        const sector = Math.floor(h * 6);

        switch (sector % 6) {
            case 0: r = c; g = x; b = 0; break;
            case 1: r = x; g = c; b = 0; break;
            case 2: r = 0; g = c; b = x; break;
            case 3: r = 0; g = x; b = c; break;
            case 4: r = x; g = 0; b = c; break;
            case 5: r = c; g = 0; b = x; break;
        }

        return {
            R: Math.round(clamp((r + m) * 255, 0, 255)),
            G: Math.round(clamp((g + m) * 255, 0, 255)),
            B: Math.round(clamp((b + m) * 255, 0, 255)),
            A: parseFloat(A.toFixed(2))
        };
    },

    RGB_TO_HSV: ({ R, G, B, A = 1 }) => {
        const r = R / 255, g = G / 255, b = B / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const delta = max - min;

        let H = 0, S = 0;
        const V = max;

        if (delta !== 0) {
            S = delta / max;
            switch (max) {
                case r: H = ((g - b) / delta) % 6; break;
                case g: H = (b - r) / delta + 2; break;
                case b: H = (r - g) / delta + 4; break;
            }
            H = Math.round((H * 60 + 360) % 360);
        }

        return {
            H,
            S: Math.round(S * 100),
            V: Math.round(V * 100),
            A: parseFloat(A.toFixed(2))
        };
    },

    HSV_TO_RGB: ({ H, S, V, A = 1 }) => {
        const h = H / 60, s = S / 100, v = V / 100;
        const c = v * s;
        const x = c * (1 - Math.abs(h % 2 - 1));
        const m = v - c;

        let r = 0, g = 0, b = 0;

        switch (Math.floor(h) % 6) {
            case 0: r = c; g = x; b = 0; break;
            case 1: r = x; g = c; b = 0; break;
            case 2: r = 0; g = c; b = x; break;
            case 3: r = 0; g = x; b = c; break;
            case 4: r = x; g = 0; b = c; break;
            case 5: r = c; g = 0; b = x; break;
        }

        return {
            R: Math.round(clamp((r + m) * 255, 0, 255)),
            G: Math.round(clamp((g + m) * 255, 0, 255)),
            B: Math.round(clamp((b + m) * 255, 0, 255)),
            A: parseFloat(A.toFixed(2))
        };
    },

    RGB_TO_CMYK: ({ R, G, B, A = 1 }) => {
        const r = R / 255, g = G / 255, b = B / 255;
        const K = 1 - Math.max(r, g, b);

        if (K === 1) {
            return { C: 0, M: 0, Y: 0, K: 100, A: parseFloat(A.toFixed(2)) };
        }

        const C = (1 - r - K) / (1 - K);
        const M = (1 - g - K) / (1 - K);
        const Y = (1 - b - K) / (1 - K);

        return {
            C: Math.round(clamp(C * 100, 0, 100)),
            M: Math.round(clamp(M * 100, 0, 100)),
            Y: Math.round(clamp(Y * 100, 0, 100)),
            K: Math.round(clamp(K * 100, 0, 100)),
            A: parseFloat(A.toFixed(2))
        };
    },

    CMYK_TO_RGB: ({ C, M, Y, K, A = 1 }) => {
        const c = C / 100, m = M / 100, y = Y / 100, k = K / 100;

        return {
            R: Math.round(clamp(255 * (1 - c) * (1 - k), 0, 255)),
            G: Math.round(clamp(255 * (1 - m) * (1 - k), 0, 255)),
            B: Math.round(clamp(255 * (1 - y) * (1 - k), 0, 255)),
            A: parseFloat(A.toFixed(2))
        };
    },

    HSL_TO_HSV: (hsl) => SRGB.RGB_TO_HSV(SRGB.HSL_TO_RGB(hsl)),
    HSV_TO_HSL: (hsv) => SRGB.RGB_TO_HSL(SRGB.HSV_TO_RGB(hsv)),
    CMYK_TO_HSL: (cmyk) => SRGB.RGB_TO_HSL(SRGB.CMYK_TO_RGB(cmyk)),
    HSL_TO_CMYK: (hsl) => SRGB.RGB_TO_CMYK(SRGB.HSL_TO_RGB(hsl)),
};
