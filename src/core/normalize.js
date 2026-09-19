/* ------------------------------------------------
    src/core/normalize.js
------------------------------------------------ */

import REGEXP from "./regexp.js";
import { isInRange, normalizeHue } from "./helpers.js";

export default {
    HEX: (input) => {
        if (!REGEXP.HEX.test(input)) return null;
        let hex = input.slice(1).toUpperCase();

        if (hex.length === 3) hex = hex.split('').map(c => c + c).join('') + 'FF';
        else if (hex.length === 4) hex = hex.split('').map(c => c + c).join('');
        else if (hex.length === 6) hex += 'FF';

        return `#${hex}`;
    },

    RGB: (input) => {
        const match = input.match(REGEXP.RGB);
        if (!match) return null;

        let [, r, g, b, a] = match;
        r = parseInt(r, 10);
        g = parseInt(g, 10);
        b = parseInt(b, 10);
        a = a !== undefined ? parseFloat(a) : 1;

        if (!isInRange([r, g, b], 0, 255) || !isInRange([a], 0, 1)) return null;

        return `rgb(${r} ${g} ${b} / ${a})`;
    },

    HSL: (input) => {
        const match = input.match(REGEXP.HSL);
        if (!match) return null;

        let [, h, s, l, a] = match;
        h = normalizeHue(h);
        s = Math.round(parseFloat(s));
        l = Math.round(parseFloat(l));
        a = a !== undefined ? parseFloat(a) : 1;

        if (!isInRange([s, l], 0, 100) || !isInRange([a], 0, 1)) return null;

        return `hsl(${h}deg ${s}% ${l}% / ${a})`;
    },

    HSV: (input) => {
        const match = input.match(REGEXP.HSV);
        if (!match) return null;

        let [, h, s, v, a] = match;
        h = normalizeHue(h);
        s = Math.round(parseFloat(s));
        v = Math.round(parseFloat(v));
        a = a !== undefined ? parseFloat(a) : 1;

        if (!isInRange([s, v], 0, 100) || !isInRange([a], 0, 1)) return null;

        return `hsv(${h}deg ${s}% ${v}% / ${a})`;
    },

    HWB: (input) => {
        const match = input.match(REGEXP.HWB);
        if (!match) return null;

        let [, h, w, b, a] = match;
        h = normalizeHue(h);
        w = Math.round(parseFloat(w));
        b = Math.round(parseFloat(b));
        a = a !== undefined ? parseFloat(a) : 1;

        if (!isInRange([w, b], 0, 100) || !isInRange([a], 0, 1)) return null;
        if (w + b > 100) return null;

        return `hwb(${h}deg ${w}% ${b}% / ${a})`;
    },

    CMYK: (input) => {
        const match = input.match(REGEXP.CMYK);
        if (!match) return null;

        let [, c, m, y, k] = match;
        c = parseFloat(c);
        m = parseFloat(m);
        y = parseFloat(y);
        k = parseFloat(k);

        if (!isInRange([c, m, y, k], 0, 100)) return null;

        return `cmyk(${c}% ${m}% ${y}% ${k}%)`;
    },

    LAB: (input) => {
        const match = input.match(REGEX.LAB);
        if (!match) return null;

        let [, L, a, b, alpha] = match;
        L = parseFloat(L);
        a = parseFloat(a);
        b = parseFloat(b);
        alpha = alpha !== undefined ? parseFloat(alpha) : 1;

        if (L < 0 || L > 100) return null;
        if (a < -128 || a > 128) return null;
        if (b < -128 || b > 128) return null;
        if (alpha < 0 || alpha > 1) return null;

        return `lab(${L}% ${a} ${b} / ${alpha})`;
    },

    LCH: (input) => {
        const match = input.match(REGEX.LCH);
        if (!match) return null;

        let [, L, C, h, alpha] = match;
        L = parseFloat(L);
        C = parseFloat(C);
        h = normalizeHue(h);
        alpha = alpha !== undefined ? parseFloat(alpha) : 1;

        if (L < 0 || L > 100) return null;
        if (C < 0 || C > 130) return null;
        if (alpha < 0 || alpha > 1) return null;

        return `lch(${L}% ${C} ${h}deg / ${alpha})`;
    },

    OKLAB: (input) => {
        const match = input.match(REGEXP.OKLAB);
        if (!match) return null;

        let [, L, a, b, alpha] = match;
        L = parseFloat(L);
        a = parseFloat(a);
        b = parseFloat(b);
        alpha = alpha !== undefined ? parseFloat(alpha) : 1;

        if (!isInRange([L], 0, 1) || !isInRange([a, b], -0.4, 0.4) || !isInRange([alpha], 0, 1)) return null;

        return `oklab(${L} ${a} ${b} / ${alpha})`;
    },

    OKLCH: (input) => {
        const match = input.match(REGEXP.OKLCH);
        if (!match) return null;

        let [, L, C, h, alpha] = match;
        L = parseFloat(L);
        C = parseFloat(C);
        h = normalizeHue(h);
        alpha = alpha !== undefined ? parseFloat(alpha) : 1;

        if (!isInRange([L], 0, 1) || !isInRange([C], 0, 0.4) || !isInRange([alpha], 0, 1)) return null;

        return `oklch(${L} ${C} ${h}deg / ${alpha})`;
    },

    OKHSL: (input) => {
        const match = input.match(REGEXP.OKHSL);
        if (!match) return null;

        let [, h, s, l, a] = match;
        h = normalizeHue(h);
        s = Math.round(parseFloat(s));
        l = Math.round(parseFloat(l));
        a = a !== undefined ? parseFloat(a) : 1;

        if (!isInRange([s, l], 0, 100) || !isInRange([a], 0, 1)) return null;

        return `okhsl(${h}deg ${s}% ${l}% / ${a})`;
    },

    OKHSV: (input) => {
        const match = input.match(REGEXP.OKHSV);
        if (!match) return null;

        let [, h, s, v, a] = match;
        h = normalizeHue(h);
        s = Math.round(parseFloat(s));
        v = Math.round(parseFloat(v));
        a = a !== undefined ? parseFloat(a) : 1;

        if (!isInRange([s, v], 0, 100) || !isInRange([a], 0, 1)) return null;

        return `okhsv(${h}deg ${s}% ${v}% / ${a})`;
    },

    XYZ: (input) => {
        const match = input.match(REGEXP.XYZ);
        if (!match) return null;

        let [, x, y, z, alpha] = match;
        x = parseFloat(x);
        y = parseFloat(y);
        z = parseFloat(z);
        alpha = alpha !== undefined ? parseFloat(alpha) : 1;

        if (!isInRange([alpha], 0, 1)) return null;

        return `color(xyz ${x} ${y} ${z} / ${alpha})`;
    },

    P3: (input) => {
        const match = input.match(REGEXP.P3);
        if (!match) return null;

        let [, r, g, b, alpha] = match;
        r = parseFloat(r);
        g = parseFloat(g);
        b = parseFloat(b);
        alpha = alpha !== undefined ? parseFloat(alpha) : 1;

        if (!isInRange([alpha], 0, 1)) return null;

        return `color(display-p3 ${r} ${g} ${b} / ${alpha})`;
    },
};