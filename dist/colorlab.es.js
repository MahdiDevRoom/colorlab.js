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
    static #COLORS = {
        'AliceBlue':       '#F0F8FF', 'AntiqueWhite':      '#FAEBD7', 'Aqua':                 '#00FFFF', 'Aquamarine':       '#7FFFD4',
        'Azure':           '#F0FFFF', 'Beige':             '#F5F5DC', 'Bisque':               '#FFE4C4', 'Black':            '#000000',
        'BlanchedAlmond':  '#FFEBCD', 'Blue':              '#0000FF', 'BlueViolet':           '#8A2BE2', 'Brown':            '#A52A2A',
        'BurlyWood':       '#DEB887', 'CadetBlue':         '#5F9EA0', 'Chartreuse':           '#7FFF00', 'Chocolate':        '#D2691E',
        'Coral':           '#FF7F50', 'CornflowerBlue':    '#6495ED', 'Cornsilk':             '#FFF8DC', 'Crimson':          '#DC143C',
        'Cyan':            '#00FFFF', 'DarkBlue':          '#00008B', 'DarkCyan':             '#008B8B', 'DarkGoldenRod':    '#B8860B',
        'DarkGray':        '#A9A9A9', 'DarkGreen':         '#006400', 'DarkGrey':             '#A9A9A9', 'DarkKhaki':        '#BDB76B',
        'DarkMagenta':     '#8B008B', 'DarkOliveGreen':    '#556B2F', 'DarkOrange':           '#FF8C00', 'DarkOrchid':       '#9932CC',
        'DarkRed':         '#8B0000', 'DarkSalmon':        '#E9967A', 'DarkSeaGreen':         '#8FBC8F', 'DarkSlateBlue':    '#483D8B',
        'DarkSlateGray':   '#2F4F4F', 'DarkSlateGrey':     '#2F4F4F', 'DarkTurquoise':        '#00CED1', 'DarkViolet':       '#9400D3',
        'DeepPink':        '#FF1493', 'DeepSkyBlue':       '#00BFFF', 'DimGray':              '#696969', 'DimGrey':          '#696969',
        'DodgerBlue':      '#1E90FF', 'FireBrick':         '#B22222', 'FloralWhite':          '#FFFAF0', 'ForestGreen':      '#228B22',
        'Fuchsia':         '#FF00FF', 'Gainsboro':         '#DCDCDC', 'GhostWhite':           '#F8F8FF', 'Gold':             '#FFD700',
        'GoldenRod':       '#DAA520', 'Gray':              '#808080', 'Green':                '#008000', 'GreenYellow':      '#ADFF2F',
        'Grey':            '#808080', 'HoneyDew':          '#F0FFF0', 'HotPink':              '#FF69B4', 'IndianRed':        '#CD5C5C',
        'Indigo':          '#4B0082', 'Ivory':             '#FFFFF0', 'Khaki':                '#F0E68C', 'Lavender':         '#E6E6FA',
        'LavenderBlush':   '#FFF0F5', 'LawnGreen':         '#7CFC00', 'LemonChiffon':         '#FFFACD', 'LightBlue':        '#ADD8E6',
        'LightCoral':      '#F08080', 'LightCyan':         '#E0FFFF', 'LightGoldenRodYellow': '#FAFAD2', 'LightGray':        '#D3D3D3',
        'LightGreen':      '#90EE90', 'LightGrey':         '#D3D3D3', 'LightPink':            '#FFB6C1', 'LightSalmon':      '#FFA07A',
        'LightSeaGreen':   '#20B2AA', 'LightSkyBlue':      '#87CEFA', 'LightSlateGray':       '#778899', 'LightSlateGrey':   '#778899',
        'LightSteelBlue':  '#B0C4DE', 'LightYellow':       '#FFFFE0', 'Lime':                 '#00FF00', 'LimeGreen':        '#32CD32',
        'Linen':           '#FAF0E6', 'Magenta':           '#FF00FF', 'Maroon':               '#800000', 'MediumAquaMarine': '#66CDAA',
        'MediumBlue':      '#0000CD', 'MediumOrchid':      '#BA55D3', 'MediumPurple':         '#9370DB', 'MediumSeaGreen':   '#3CB371',
        'MediumSlateBlue': '#7B68EE', 'MediumSpringGreen': '#00FA9A', 'MediumTurquoise':      '#48D1CC', 'MediumVioletRed':  '#C71585',
        'MidnightBlue':    '#191970', 'MintCream':         '#F5FFFA', 'MistyRose':            '#FFE4E1', 'Moccasin':         '#FFE4B5', 
        'NavajoWhite':     '#FFDEAD', 'Navy':              '#000080', 'OldLace':              '#FDF5E6', 'Olive':            '#808000', 
        'OliveDrab':       '#6B8E23', 'Orange':            '#FFA500', 'OrangeRed':            '#FF4500', 'Orchid':           '#DA70D6', 
        'PaleGoldenRod':   '#EEE8AA', 'PaleGreen':         '#98FB98', 'PaleTurquoise':        '#AFEEEE', 'PaleVioletRed':    '#DB7093', 
        'PapayaWhip':      '#FFEFD5', 'PeachPuff':         '#FFDAB9', 'Peru':                 '#CD853F', 'Pink':             '#FFC0CB', 
        'Plum':            '#DDA0DD', 'PowderBlue':        '#B0E0E6', 'Purple':               '#800080', 'RebeccaPurple':    '#663399', 
        'Red':             '#FF0000', 'RosyBrown':         '#BC8F8F', 'RoyalBlue':            '#4169E1', 'SaddleBrown':      '#8B4513', 
        'Salmon':          '#FA8072', 'SandyBrown':        '#F4A460', 'SeaGreen':             '#2E8B57', 'SeaShell':         '#FFF5EE',
        'Sienna':          '#A0522D', 'Silver':            '#C0C0C0', 'SkyBlue':              '#87CEEB', 'SlateBlue':        '#6A5ACD', 
        'SlateGray':       '#708090', 'SlateGrey':         '#708090', 'Snow':                 '#FFFAFA', 'SpringGreen':      '#00FF7F', 
        'SteelBlue':       '#4682B4', 'Tan':               '#D2B48C', 'Teal':                 '#008080', 'Thistle':          '#D8BFD8', 
        'Tomato':          '#FF6347', 'Turquoise':         '#40E0D0', 'Violet':               '#EE82EE', 'Wheat':            '#F5DEB3', 
        'White':           '#FFFFFF', 'WhiteSmoke':        '#F5F5F5', 'Yellow':               '#FFFF00', 'YellowGreen':      '#9ACD32'
    };
    static #COLORS_MAP = ((C) => {
        const map = new Map();
        for (const [k, v] of Object.entries(C)) map.set(k.replace(/\s+/g, '').toLowerCase(), v);
        return map;
    })(ColorLab.#COLORS);
    static #HARMONIES = {
        'analogous':           [0, 30, -30],
        'complementary':       [0, 180],
        'tetradic':            [0, 60, 180, 240],
        'compound':            [0, 150, -150],
        'split-complementary': [0, 30, 180, 210],
        'triadic':             [0, 120, -120],
        'square':              [0, 90, -90, 180],
    };
    static #REGEXP = {
        // Detection
        HEX: /^#([a-f\d]{3}|[a-f\d]{4}|[a-f\d]{6}|[a-f\d]{8})$/i,
        RGB: /^rgba?\(\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
        HSL: /^hsla?\(\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*,?\s*(\d+(?:\.\d+)?)%?\s*,?\s*(\d+(?:\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
        HSV: /^hsva?\(\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*,?\s*(\d+(?:\.\d+)?)%?\s*,?\s*(\d+(?:\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
        CMYK: /^cmyka?\(\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
        LAB: /^lab\(\s*(-?\d+(?:\.\d+)?)%?\s*,?\s*(-?\d+(?:\.\d+)?)\s*,?\s*(-?\d+(?:\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
        LCH: /^lch\(\s*(\d+(?:\.\d+)?)%?\s*,?\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
        OKLAB: /^oklab\(\s*(-?\d+(?:\.\d+)?)\s*,?\s*(-?\d+(?:\.\d+)?)\s*,?\s*(-?\d+(?:\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
        OKLCH: /^oklch\(\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
        OKHSL: /^okhsla?\(\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*,?\s*(\d+(?:\.\d+)?)%?\s*,?\s*(\d+(?:\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
        OKHSV: /^okhsva?\(\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*,?\s*(\d+(?:\.\d+)?)%?\s*,?\s*(\d+(?:\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
        XYZ: /^color\(\s*xyz\s+(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
        
        // Extraction
        EX_HEX: /^#([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})?$/i,
        EX_RGB: /^rgb\(\s*(\d+)\s+(\d+)\s+(\d+)\s*\/\s*([\d.]+)\s*\)$/i,
        EX_HSL: /^hsl\(\s*(\d+)deg\s+(\d+)%\s+(\d+)%\s*\/\s*([\d.]+)\s*\)$/i,
        EX_HSV: /^hsv\(\s*(\d+)deg\s+(\d+)%\s+(\d+)%\s*\/\s*([\d.]+)\s*\)$/i,
        EX_CMYK: /^cmyk\(\s*(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%\s*\/\s*([\d.]+)\s*\)$/i,
        EX_LAB: /^lab\(\s*(-?\d+(?:\.\d+)?)%\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*\/\s*([\d.]+)\s*\)$/i,
        EX_LCH: /^lch\(\s*(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)deg\s*\/\s*([\d.]+)\s*\)$/i,
        EX_OKLAB: /^oklab\(\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*\/\s*([\d.]+)\s*\)$/i,
        EX_OKLCH: /^oklch\(\s*(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)deg\s*\/\s*([\d.]+)\s*\)$/i,
        EX_OKHSL: /^okhsl\(\s*(\d+)deg\s+(\d+)%\s+(\d+)%\s*\/\s*([\d.]+)\s*\)$/i,
        EX_OKHSV: /^okhsv\(\s*(\d+)deg\s+(\d+)%\s+(\d+)%\s*\/\s*([\d.]+)\s*\)$/i,
        EX_XYZ: /^color\(xyz\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\/\s*([\d.]+)\s*\)$/i,
    };
    static #NORMALIZE = {
        HEX: (input) => {
            if (!ColorLab.#REGEXP.HEX.test(input)) return null;
            let hex = input.slice(1).toUpperCase();
            
            if (hex.length === 3) hex = hex.split('').map(c => c + c).join('') + 'FF';
            else if (hex.length === 4) hex = hex.split('').map(c => c + c).join('');
            else if (hex.length === 6) hex += 'FF';
            
            return `#${hex}`;
        },
        RGB: (input) => {
            const match = input.match(ColorLab.#REGEXP.RGB);
            if (!match) return null;
            
            let [, R, G, B, A] = match;
            R = parseInt(R, 10);
            G = parseInt(G, 10);
            B = parseInt(B, 10);
            A = A !== undefined ? parseFloat(A) : 1;
            
            if (!ColorLab.#isInRange([R, G, B], 0, 255) || !ColorLab.#isInRange([A], 0, 1)) return null;
            
            return `rgb(${R} ${G} ${B} / ${A})`;
        },
        HSL: (input) => {
            const match = input.match(ColorLab.#REGEXP.HSL);
            if (!match) return null;
            
            let [, H, S, L, A] = match;
            H = ColorLab.#normalizeHue(H);
            S = Math.round(parseFloat(S));
            L = Math.round(parseFloat(L));
            A = A !== undefined ? parseFloat(A) : 1;
            
            if (!ColorLab.#isInRange([S, L], 0, 100) || !ColorLab.#isInRange([A], 0, 1)) return null;
            
            return `hsl(${H}deg ${S}% ${L}% / ${A})`;
        },
        HSV: (input) => {
            const match = input.match(ColorLab.#REGEXP.HSV);
            if (!match) return null;
            
            let [, H, S, V, A] = match;
            H = ColorLab.#normalizeHue(H);
            S = Math.round(parseFloat(S));
            V = Math.round(parseFloat(V));
            A = A !== undefined ? parseFloat(A) : 1;
            
            if (!ColorLab.#isInRange([S, V], 0, 100) || !ColorLab.#isInRange([A], 0, 1)) return null;
            
            return `hsv(${H}deg ${S}% ${V}% / ${A})`;
        },
        CMYK: (input) => {
            const match = input.match(ColorLab.#REGEXP.CMYK);
            if (!match) return null;
            
            let [, C, M, Y, K, A] = match;
            C = parseFloat(C);
            M = parseFloat(M);
            Y = parseFloat(Y);
            K = parseFloat(K);
            A = A !== undefined ? parseFloat(A) : 1;
            
            if (!ColorLab.#isInRange([C, M, Y, K], 0, 100) || !ColorLab.#isInRange([A], 0, 1)) return null;
            
            return `cmyk(${C}% ${M}% ${Y}% ${K}% / ${A})`;
        },
        LAB: (input) => {
            const match = input.match(ColorLab.#REGEXP.LAB);
            if (!match) return null;
            
            let [, L, a, b, A] = match;
            L = parseFloat(L);
            a = parseFloat(a);
            b = parseFloat(b);
            A = A !== undefined ? parseFloat(A) : 1;
            
            if (L < 0 || L > 100) return null;
            if (a < -128 || a > 128) return null;
            if (b < -128 || b > 128) return null;
            if (A < 0 || A > 1) return null;
            
            return `lab(${L}% ${a} ${b} / ${A})`;
        },
        LCH: (input) => {
            const match = input.match(ColorLab.#REGEXP.LCH);
            if (!match) return null;
            
            let [, L, C, H, A] = match;
            L = parseFloat(L);
            C = parseFloat(C);
            H = ColorLab.#normalizeHue(H);
            A = A !== undefined ? parseFloat(A) : 1;
            
            if (L < 0 || L > 100) return null;
            if (C < 0 || C > 230) return null;
            if (A < 0 || A > 1) return null;
            
            return `lch(${L}% ${C} ${H}deg / ${A})`;
        },
        OKLAB: (input) => {
            const match = input.match(ColorLab.#REGEXP.OKLAB);
            if (!match) return null;
            
            let [, L, a, b, A] = match;
            L = parseFloat(L);
            a = parseFloat(a);
            b = parseFloat(b);
            A = A !== undefined ? parseFloat(A) : 1;
            
            if (!ColorLab.#isInRange([L], 0, 1) || !ColorLab.#isInRange([a, b], -0.4, 0.4) || !ColorLab.#isInRange([A], 0, 1)) return null;
            
            return `oklab(${L} ${a} ${b} / ${A})`;
        },
        OKLCH: (input) => {
            const match = input.match(ColorLab.#REGEXP.OKLCH);
            if (!match) return null;
            
            let [, L, C, H, A] = match;
            L = parseFloat(L);
            C = parseFloat(C);
            H = ColorLab.#normalizeHue(H);
            A = A !== undefined ? parseFloat(A) : 1;
            
            if (!ColorLab.#isInRange([L], 0, 1) || !ColorLab.#isInRange([C], 0, 0.4) || !ColorLab.#isInRange([A], 0, 1)) return null;
            
            return `oklch(${L} ${C} ${H}deg / ${A})`;
        },
        OKHSL: (input) => {
            const match = input.match(ColorLab.#REGEXP.OKHSL);
            if (!match) return null;
            
            let [, H, S, L, A] = match;
            H = ColorLab.#normalizeHue(H);
            S = Math.round(parseFloat(S));
            L = Math.round(parseFloat(L));
            A = A !== undefined ? parseFloat(A) : 1;
            
            if (!ColorLab.#isInRange([S, L], 0, 100) || !ColorLab.#isInRange([A], 0, 1)) return null;
            
            return `okhsl(${H}deg ${S}% ${L}% / ${A})`;
        },
        OKHSV: (input) => {
            const match = input.match(ColorLab.#REGEXP.OKHSV);
            if (!match) return null;
            
            let [, H, S, V, A] = match;
            H = ColorLab.#normalizeHue(H);
            S = Math.round(parseFloat(S));
            V = Math.round(parseFloat(V));
            A = A !== undefined ? parseFloat(A) : 1;
            
            if (!ColorLab.#isInRange([S, V], 0, 100) || !ColorLab.#isInRange([A], 0, 1)) return null;
            
            return `okhsv(${H}deg ${S}% ${V}% / ${A})`;
        },
        XYZ: (input) => {
            const match = input.match(ColorLab.#REGEXP.XYZ);
            if (!match) return null;
            
            let [, X, Y, Z, A] = match;
            X = parseFloat(X);
            Y = parseFloat(Y);
            Z = parseFloat(Z);
            A = A !== undefined ? parseFloat(A) : 1;
            
            if (!ColorLab.#isInRange([A], 0, 1)) return null;
            
            return `color(xyz ${X} ${Y} ${Z} / ${A})`;
        },
    };
    static #EXTRACT = {
        HEX: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_HEX);
            if (!match) return null;
            return {
                R: parseInt(match[1], 16),
                G: parseInt(match[2], 16),
                B: parseInt(match[3], 16),
                A: match[4] ? parseFloat((parseInt(match[4], 16) / 255).toFixed(2)) : 1
            };
        },
        RGB: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_RGB);
            if (!match) return null;
            return {
                R: parseInt(match[1], 10),
                G: parseInt(match[2], 10),
                B: parseInt(match[3], 10),
                A: parseFloat(match[4])
            };
        },
        HSL: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_HSL);
            if (!match) return null;
            return {
                H: parseInt(match[1], 10),
                S: parseInt(match[2], 10),
                L: parseInt(match[3], 10),
                A: parseFloat(match[4]),
            };
        },
        HSV: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_HSV);
            if (!match) return null;
            return {
                H: parseInt(match[1], 10),
                S: parseInt(match[2], 10),
                V: parseInt(match[3], 10),
                A: parseFloat(match[4]),
            };
        },
        CMYK: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_CMYK);
            if (!match) return null;
            return {
                C: parseFloat(match[1]),
                M: parseFloat(match[2]),
                Y: parseFloat(match[3]),
                K: parseFloat(match[4]),
                A: parseFloat(match[5]),
            };
        },
        LAB: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_LAB);
            if (!match) return null;
            return {
                L: parseFloat(match[1]),
                a: parseFloat(match[2]),
                b: parseFloat(match[3]),
                A: parseFloat(match[4]),
            };
        },
        LCH: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_LCH);
            if (!match) return null;
            return {
                L: parseFloat(match[1]),
                C: parseFloat(match[2]),
                H: parseFloat(match[3]),
                A: parseFloat(match[4]),
            };
        },
        OKLAB: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_OKLAB);
            if (!match) return null;
            return {
                L: parseFloat(match[1]),
                a: parseFloat(match[2]),
                b: parseFloat(match[3]),
                A: parseFloat(match[4]),
            };
        },
        OKLCH: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_OKLCH);
            if (!match) return null;
            return {
                L: parseFloat(match[1]),
                C: parseFloat(match[2]),
                H: parseFloat(match[3]),
                A: parseFloat(match[4]),
            };
        },
        OKHSL: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_OKHSL);
            if (!match) return null;
            return {
                H: parseInt(match[1], 10),
                S: parseInt(match[2], 10),
                L: parseInt(match[3], 10),
                A: parseFloat(match[4]),
            };
        },
        OKHSV: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_OKHSV);
            if (!match) return null;
            return {
                H: parseInt(match[1], 10),
                S: parseInt(match[2], 10),
                V: parseInt(match[3], 10),
                A: parseFloat(match[4]),
            };
        },
        XYZ: (input) => {
            const match = input.match(ColorLab.#REGEXP.EX_XYZ);
            if (!match) return null;
            return {
                X: parseFloat(match[1]),
                Y: parseFloat(match[2]),
                Z: parseFloat(match[3]),
                A: parseFloat(match[4]),
            };
        },
    };
    
    /* --------------------------------------------
        Private Helper Constants
    -------------------------------------------- */
    static #D65 = [
        0.9504559270516716, 
        1, 
        1.0890577507598784,
    ];
    static #SRGB_CONSTANTS = {
        threshold:    0.04045,
        thresholdInv: 0.0031308,
        slope:        12.92,
        offset:       0.055,
        scale:        1.055,
        gamma:        2.4,
        invGamma:     1 / 2.4,
    };
    static #LAB_CONSTANTS = {
        epsilon:  216 / 24389,
        epsilon3: 24 / 116,
        kappa:    24389 / 27,
        offset:   16,
        scale:    116,
    };
    static #OK_CONSTANTS = (() => {
        const K1 = 0.206;
        const K2 = 0.03;
        const K3 = (1 + K1) / (1 + K2);
        
        return {
            K1,
            K2,
            K3,
            tau: 2 * Math.PI,
            floatMax: Number.MAX_VALUE,
            stMidS: {
                base: 0.11516993,
                denom: [7.44778970, 4.15901240],
                poly:  [-2.19557347, 1.75198401, -2.13704948, -10.02301043, -4.24894561, 5.38770819, 4.69891013],
            },
            stMidT: {
                base: 0.11239642,
                denom: [1.61320320, -0.68124379],
                poly:  [0.40370612, 0.90148123, -0.27087943, 0.61223990, 0.00299215, -0.45399568, -0.14661872],
            },
        };
    })();
    static #WCAG_CONSTANTS = {
        rWeight: 0.2126,
        gWeight: 0.7152,
        bWeight: 0.0722,
        offset: 0.05,
        levels: {
            AAA: 7,
            AA: 4.5,
            A: 3,
        },
    };
    static #RGB_TO_XYZ_MATRIX = [
        [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
        [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
        [0.01933081871559182, 0.11919477979462598, 0.9505321522496607],
    ];
    static #XYZ_TO_RGB_MATRIX = [
        [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
        [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
        [0.05563007969699366, -0.20397695888897652, 1.0569715142428786],
    ];
    static #XYZ_TO_LMS_MATRIX = [
        [0.8190224379967030, 0.3619062600528904, -0.1288737815209879],
        [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
        [0.0481771893596242, 0.2642395317527308, 0.6335478284694309],
    ];
    static #LMS_TO_XYZ_MATRIX = [
        [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
        [-0.0405757452148008, 1.1122868032803170, -0.0717110580655164],
        [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816],
    ];
    static #LMS_TO_OKLAB_MATRIX = [
        [0.2104542683093140, 0.7936177747023054, -0.0040720430116193],
        [1.9779985324311684, -2.4285922420485799, 0.4505937096174110],
        [0.0259040424655478, 0.7827717124575296, -0.8086757549230774],
    ];
    static #OKLAB_TO_LMS_MATRIX = [
        [1.0000000000000000, 0.3963377773761749, 0.2158037573099136],
        [1.0000000000000000, -0.1055613458156586, -0.0638541728258133],
        [1.0000000000000000, -0.0894841775298119, -1.2914855480194092],
    ];
    static #RGB_TO_LMS_MATRIX = [
        [0.4122214694707629, 0.5363325372617349, 0.0514459932675022],
        [0.2119034958178251, 0.6806995506452344, 0.1073969535369405],
        [0.0883024591900564, 0.2817188391361215, 0.6299787016738222],
    ];
    static #LMS_TO_RGB_MATRIX = [
        [4.0767416360759583, -3.3077115392580629, 0.2309699031821043],
        [-1.2684379732850315, 2.6097573492876882, -0.3413193760026570],
        [-0.0041960761386756, -0.7034186179359362, 1.7076146940746117],
    ];
    static #OK_COEFFICIENTS = [
        [
            [-1.8817031, -0.80936501],
            [1.19086277, 1.76576728, 0.59662641, 0.75515197, 0.56771245],
        ], [
            [1.8144408, -1.19445267],
            [0.73956515, -0.45954404, 0.08285427, 0.12541073, -0.14503204],
        ], [
            [0.13110758, 1.81333971],
            [1.35733652, -0.00915799, -1.1513021, -0.50559606, 0.00692167],
        ],
    ];

    /* --------------------------------------------
        Private Methods
    -------------------------------------------- */
    static #isInRange(values, min, max) {
        return values.every(v => v >= min && v <= max);
    };
    static #normalizeHue(hue) {
        return Math.round(((parseFloat(hue) % 360) + 360) % 360);
    };
    static #clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
    static #trimCase(input) {
        return String(input).replace(/\s+/g, '').toLowerCase();
    }
    static #toHex2(num) {
        const hex = Math.round(num).toString(16).toUpperCase();
        return hex.length === 1 ? '0' + hex : hex;
    }
    static #srgbToLinear(c) {
        const { threshold, slope, offset, scale, gamma } = ColorLab.#SRGB_CONSTANTS;
        const n = c / 255;
        return n <= threshold
            ? n / slope
            : Math.pow((n + offset) / scale, gamma);
    }
    static #linearToSrgb(c) {
        const { thresholdInv, slope, scale, invGamma, offset } = ColorLab.#SRGB_CONSTANTS;
        const n = c <= thresholdInv
            ? slope * c
            : scale * Math.pow(c, invGamma) - offset;
        return Math.round(ColorLab.#clamp(n, 0, 1) * 255);
    }
    static #multiplyMatrix(matrix, vector) {
        return matrix.map(row =>
            row.reduce((sum, val, i) => sum + val * vector[i], 0)
        );
    }
    static #xyzToLabF(t) {
        const { epsilon, kappa, offset, scale } = ColorLab.#LAB_CONSTANTS;
        return t > epsilon
            ? Math.cbrt(t)
            : (kappa * t + offset) / scale;
    }
    static #labToXyzF(t) {
        const { epsilon3, kappa, offset, scale } = ColorLab.#LAB_CONSTANTS;
        return t > epsilon3
            ? Math.pow(t, 3)
            : (scale * t - offset) / kappa;
    }
    static #copySign(to, from) {
        return Math.sign(to) === Math.sign(from) ? to : -to;
    }
    static #spow(base, exp) {
        return ColorLab.#copySign(Math.abs(base) ** exp, base);
    }
    static #vdot(a, b) {
        let sum = 0;
        for (let i = 0; i < a.length; i++) sum += a[i] * b[i];
        return sum;
    }
    static #multiplyV3M3x3(input, matrix) {
        return [
            ColorLab.#vdot(input, matrix[0]),
            ColorLab.#vdot(input, matrix[1]),
            ColorLab.#vdot(input, matrix[2]),
        ];
    }
    static #constrain(angle) {
        return typeof angle !== 'number' ? angle : ((angle % 360) + 360) % 360;
    }
    static #toe(x) {
        const { K1, K2, K3 } = ColorLab.#OK_CONSTANTS;
        return 0.5 * (K3 * x - K1 + Math.sqrt((K3 * x - K1) ** 2 + 4 * K2 * K3 * x));
    }
    static #toeInv(x) {
        const { K1, K2, K3 } = ColorLab.#OK_CONSTANTS;
        return (x ** 2 + K1 * x) / (K3 * (x + K2));
    }
    static #toSt(cusp) {
        const [L, C] = cusp;
        return [C / L, C / (1 - L)];
    }
    static #getStMid(a, b) {
        const { stMidS, stMidT } = ColorLab.#OK_CONSTANTS;
    
        const s = stMidS.base + 1 / (
            stMidS.denom[0] + stMidS.denom[1] * b +
            a * (
                stMidS.poly[0] + stMidS.poly[1] * b +
                a * (
                    stMidS.poly[2] + stMidS.poly[3] * b +
                    a * (
                        stMidS.poly[4] + stMidS.poly[5] * b + stMidS.poly[6] * a
                    )
                )
            )
        );
    
        const t = stMidT.base + 1 / (
            stMidT.denom[0] + stMidT.denom[1] * b +
            a * (
                stMidT.poly[0] + stMidT.poly[1] * b +
                a * (
                    stMidT.poly[2] + stMidT.poly[3] * b +
                    a * (
                        stMidT.poly[4] + stMidT.poly[5] * b + stMidT.poly[6] * a
                    )
                )
            )
        );
    
        return [s, t];
    }
    static #computeMaxSaturation(a, b) {
        const lmsToRgb = ColorLab.#LMS_TO_RGB_MATRIX;
        const okCoeff = ColorLab.#OK_COEFFICIENTS;
    
        let k0, k1, k2, k3, k4, wl, wm, ws;
    
        if (ColorLab.#vdot(okCoeff[0][0], [a, b]) > 1) {
            // Red
            [k0, k1, k2, k3, k4] = okCoeff[0][1];
            [wl, wm, ws] = lmsToRgb[0];
        } else if (ColorLab.#vdot(okCoeff[1][0], [a, b]) > 1) {
            // Green
            [k0, k1, k2, k3, k4] = okCoeff[1][1];
            [wl, wm, ws] = lmsToRgb[1];
        } else {
            // Blue
            [k0, k1, k2, k3, k4] = okCoeff[2][1];
            [wl, wm, ws] = lmsToRgb[2];
        }
    
        let sat = k0 + k1 * a + k2 * b + k3 * a ** 2 + k4 * a * b;
    
        // Halley's method
        const kl = ColorLab.#vdot(ColorLab.#OKLAB_TO_LMS_MATRIX[0].slice(1), [a, b]);
        const km = ColorLab.#vdot(ColorLab.#OKLAB_TO_LMS_MATRIX[1].slice(1), [a, b]);
        const ks = ColorLab.#vdot(ColorLab.#OKLAB_TO_LMS_MATRIX[2].slice(1), [a, b]);
    
        const l_ = 1.0 + sat * kl;
        const m_ = 1.0 + sat * km;
        const s_ = 1.0 + sat * ks;
    
        const l = l_ ** 3;
        const m = m_ ** 3;
        const s = s_ ** 3;
    
        const lds = 3.0 * kl * l_ ** 2;
        const mds = 3.0 * km * m_ ** 2;
        const sds = 3.0 * ks * s_ ** 2;
    
        const lds2 = 6.0 * kl ** 2 * l_;
        const mds2 = 6.0 * km ** 2 * m_;
        const sds2 = 6.0 * ks ** 2 * s_;
    
        const f = wl * l + wm * m + ws * s;
        const f1 = wl * lds + wm * mds + ws * sds;
        const f2 = wl * lds2 + wm * mds2 + ws * sds2;
    
        sat = sat - (f * f1) / (f1 ** 2 - 0.5 * f * f2);
    
        return sat;
    }
    static #oklabToLinearRGB(lab) {
        const lmsToRgb = ColorLab.#LMS_TO_RGB_MATRIX;
    
        let lms = ColorLab.#multiplyV3M3x3(lab, ColorLab.#OKLAB_TO_LMS_MATRIX);
    
        lms[0] = lms[0] ** 3;
        lms[1] = lms[1] ** 3;
        lms[2] = lms[2] ** 3;
    
        return ColorLab.#multiplyV3M3x3(lms, lmsToRgb);
    }
    static #findCusp(a, b) {
        const lmsToRgb = ColorLab.#LMS_TO_RGB_MATRIX;
        const okCoeff = ColorLab.#OK_COEFFICIENTS;
        const sCusp = ColorLab.#computeMaxSaturation(a, b);
        const rgb = ColorLab.#oklabToLinearRGB([1, sCusp * a, sCusp * b]);
        const lCusp = ColorLab.#spow(1.0 / Math.max(...rgb), 1 / 3);
        const cCusp = lCusp * sCusp;
    
        return [lCusp, cCusp];
    }
    static #findGamutIntersection(a, b, l1, c1, l0, cusp) {
        const lmsToRgb = ColorLab.#LMS_TO_RGB_MATRIX;
        const { floatMax } = ColorLab.#OK_CONSTANTS;
    
        let t;
    
        if (cusp === undefined) {
            cusp = ColorLab.#findCusp(a, b);
        }
    
        if ((l1 - l0) * cusp[1] - (cusp[0] - l0) * c1 <= 0) {
            t = (cusp[1] * l0) / (c1 * cusp[0] + cusp[1] * (l0 - l1));
        } else {
            t = (cusp[1] * (l0 - 1)) / (c1 * (cusp[0] - 1) + cusp[1] * (l0 - l1));
    
            const dl = l1 - l0;
            const dc = c1;
            const kl = ColorLab.#vdot(ColorLab.#OKLAB_TO_LMS_MATRIX[0].slice(1), [a, b]);
            const km = ColorLab.#vdot(ColorLab.#OKLAB_TO_LMS_MATRIX[1].slice(1), [a, b]);
            const ks = ColorLab.#vdot(ColorLab.#OKLAB_TO_LMS_MATRIX[2].slice(1), [a, b]);
            const ldt_ = dl + dc * kl;
            const mdt_ = dl + dc * km;
            const sdt_ = dl + dc * ks;
            const L = l0 * (1 - t) + t * l1;
            const C = t * c1;
            const l_ = L + C * kl;
            const m_ = L + C * km;
            const s_ = L + C * ks;
            const l = l_ ** 3;
            const m = m_ ** 3;
            const s = s_ ** 3;
            const ldt = 3 * ldt_ * l_ ** 2;
            const mdt = 3 * mdt_ * m_ ** 2;
            const sdt = 3 * sdt_ * s_ ** 2;
            const ldt2 = 6 * ldt_ ** 2 * l_;
            const mdt2 = 6 * mdt_ ** 2 * m_;
            const sdt2 = 6 * sdt_ ** 2 * s_;
            const r_ = ColorLab.#vdot(lmsToRgb[0], [l, m, s]) - 1;
            const r1 = ColorLab.#vdot(lmsToRgb[0], [ldt, mdt, sdt]);
            const r2 = ColorLab.#vdot(lmsToRgb[0], [ldt2, mdt2, sdt2]);
            const ur = r1 / (r1 * r1 - 0.5 * r_ * r2);
            let tr = -r_ * ur;
            const g_ = ColorLab.#vdot(lmsToRgb[1], [l, m, s]) - 1;
            const g1 = ColorLab.#vdot(lmsToRgb[1], [ldt, mdt, sdt]);
            const g2 = ColorLab.#vdot(lmsToRgb[1], [ldt2, mdt2, sdt2]);
            const ug = g1 / (g1 * g1 - 0.5 * g_ * g2);
            let tg = -g_ * ug;
            const b_ = ColorLab.#vdot(lmsToRgb[2], [l, m, s]) - 1;
            const b1 = ColorLab.#vdot(lmsToRgb[2], [ldt, mdt, sdt]);
            const b2 = ColorLab.#vdot(lmsToRgb[2], [ldt2, mdt2, sdt2]);
            const ub = b1 / (b1 * b1 - 0.5 * b_ * b2);
            let tb = -b_ * ub;
    
            tr = ur >= 0 ? tr : floatMax;
            tg = ug >= 0 ? tg : floatMax;
            tb = ub >= 0 ? tb : floatMax;
    
            t += Math.min(tr, Math.min(tg, tb));
        }
    
        return t;
    }
    static #getCs(lab) {
        const lmsToRgb = ColorLab.#LMS_TO_RGB_MATRIX;
        const [l, a, b] = lab;
        const cusp = ColorLab.#findCusp(a, b);
        const cMax = ColorLab.#findGamutIntersection(a, b, l, 1, l, cusp);
        const stMax = ColorLab.#toSt(cusp);
        const k = cMax / Math.min(l * stMax[0], (1 - l) * stMax[1]);
        const stMid = ColorLab.#getStMid(a, b);
        let ca = l * stMid[0];
        let cb = (1 - l) * stMid[1];
        const cMid = 0.9 * k * Math.sqrt(Math.sqrt(1 / (1 / ca ** 4 + 1 / cb ** 4)));
    
        ca = l * 0.4;
        cb = (1 - l) * 0.8;
    
        const c0 = Math.sqrt(1 / (1 / ca ** 2 + 1 / cb ** 2));
    
        return [c0, cMid, cMax];
    }
    static #okhslToOklab(hsl) {
        const { tau } = ColorLab.#OK_CONSTANTS;
        const [h, s, l] = hsl;
        let L = ColorLab.#toeInv(l);
        let a = 0;
        let b = 0;
        const hNorm = ColorLab.#constrain(h) / 360;
    
        if (L !== 0 && L !== 1 && s !== 0) {
            const a_ = Math.cos(tau * hNorm);
            const b_ = Math.sin(tau * hNorm);
            const [c0, cMid, cMax] = ColorLab.#getCs([L, a_, b_]);
            const mid = 0.8;
            const midInv = 1.25;
            let t, k0, k1, k2;
    
            if (s < mid) {
                t = midInv * s;
                k0 = 0;
                k1 = mid * c0;
                k2 = 1 - k1 / cMid;
            } else {
                t = 5 * (s - 0.8);
                k0 = cMid;
                k1 = (0.2 * cMid ** 2 * 1.25 ** 2) / c0;
                k2 = 1 - k1 / (cMax - cMid);
            }
    
            const c = k0 + (t * k1) / (1 - k2 * t);
    
            a = c * a_;
            b = c * b_;
        }
    
        return [L, a, b];
    }
    static #oklabToOkhsl(lab) {
        const { tau } = ColorLab.#OK_CONSTANTS;
        const [L, a, b] = lab;
        const εL = 1e-7;
        const εS = 1e-4;
        let s = 0;
        let h = 0;
        const l = ColorLab.#toe(L);
        const c = Math.sqrt(a ** 2 + b ** 2);
        const hRad = 0.5 + Math.atan2(-b, -a) / tau;
    
        if (l !== 0 && l !== 1 && c !== 0) {
            const a_ = a / c;
            const b_ = b / c;
            const [c0, cMid, cMax] = ColorLab.#getCs([L, a_, b_]);
            const mid = 0.8;
            const midInv = 1.25;
            let k0, k1, k2, t;
    
            if (c < cMid) {
                k1 = mid * c0;
                k2 = 1 - k1 / cMid;
                t = c / (k1 + k2 * c);
                s = t * mid;
            } else {
                k0 = cMid;
                k1 = (0.2 * cMid ** 2 * midInv ** 2) / c0;
                k2 = 1 - k1 / (cMax - cMid);
                t = (c - k0) / (k1 + k2 * (c - k0));
                s = mid + 0.2 * t;
            }
        }
    
        const achromatic = Math.abs(s) < εS;
        if (achromatic || l === 0 || Math.abs(1 - l) < εL) {
            h = null;
            if (!achromatic) {
                s = 0;
            }
        } else {
            h = ColorLab.#constrain(hRad * 360);
        }
    
        return [h, s, l];
    }
    static #okhsvToOklab(hsv) {
        const { tau } = ColorLab.#OK_CONSTANTS;
        const [h, s, v] = hsv;
    
        const hNorm = ColorLab.#constrain(h) / 360;
    
        let l = ColorLab.#toeInv(v);
        let a = 0;
        let b = 0;
    
        if (l !== 0 && s !== 0) {
            const a_ = Math.cos(tau * hNorm);
            const b_ = Math.sin(tau * hNorm);
            const cusp = ColorLab.#findCusp(a_, b_);
            const [sMax, tMax] = ColorLab.#toSt(cusp);
            const s0 = 0.5;
            const k = 1 - s0 / sMax;
            const lv = 1 - (s * s0) / (s0 + tMax - tMax * k * s);
            const cv = (s * tMax * s0) / (s0 + tMax - tMax * k * s);
    
            l = v * lv;
            let c = v * cv;
    
            const lvt = ColorLab.#toeInv(lv);
            const cvt = (cv * lvt) / lv;
            const lNew = ColorLab.#toeInv(l);
            
            c = (c * lNew) / l;
            l = lNew;
            
            const [rs, gs, bs] = ColorLab.#oklabToLinearRGB([lvt, a_ * cvt, b_ * cvt]);
            const scaleL = ColorLab.#spow(1 / Math.max(Math.max(rs, gs), Math.max(bs, 0)), 1 / 3);
    
            l = l * scaleL;
            c = c * scaleL;
    
            a = c * a_;
            b = c * b_;
        }
    
        return [l, a, b];
    }
    static #oklabToOkhsv(lab) {
        const { tau } = ColorLab.#OK_CONSTANTS;
        const [L, a, b] = lab;
        const ε = 1e-4;
        let s = 0;
        let h = 0;
        let v = ColorLab.#toe(L);
        const c = Math.sqrt(a ** 2 + b ** 2);
        const hRad = 0.5 + Math.atan2(-b, -a) / tau;
    
        if (L !== 0 && L !== 1 && c !== 0) {
            const a_ = a / c;
            const b_ = b / c;
            const cusp = ColorLab.#findCusp(a_, b_);
            const [sMax, tMax] = ColorLab.#toSt(cusp);
            const s0 = 0.5;
            const k = 1 - s0 / sMax;
            const t = tMax / (c + L * tMax);
            const lv = t * L;
            const cv = t * c;
            const lvt = ColorLab.#toeInv(lv);
            const cvt = (cv * lvt) / lv;
            const [rs, gs, bs] = ColorLab.#oklabToLinearRGB([lvt, a_ * cvt, b_ * cvt]);
            const scaleL = ColorLab.#spow(1 / Math.max(Math.max(rs, gs), Math.max(bs, 0)), 1 / 3);
    
            let l = L / scaleL;
            let c2 = c / scaleL;
    
            c2 = (c2 * ColorLab.#toe(l)) / l;
            l = ColorLab.#toe(l);
    
            v = l / lv;
            s = ((s0 + tMax) * cv) / (tMax * s0 + tMax * k * cv);
        }
    
        if (Math.abs(s) < ε || v === 0) {
            h = null;
        } else {
            h = ColorLab.#constrain(hRad * 360);
        }
    
        return [h, s, v];
    }

    /* --------------------------------------------
        Private Convert Engine
    -------------------------------------------- */
    static #ENGINE = {
        // sRGB Family
        RGB_HSL: ({ R, G, B, A = 1 }) => {
            const r = R / 255;
            const g = G / 255;
            const b = B / 255;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            const delta = max - min;
            
            let H = 0;
            let S = 0;
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
        HSL_RGB: ({ H, S, L, A = 1 }) => {
            const h = H / 360;
            const s = S / 100;
            const l = L / 100;
            const c = (1 - Math.abs(2 * l - 1)) * s;
            const x = c * (1 - Math.abs((h * 6) % 2 - 1));
            const m = l - c / 2;
            
            let r = 0;
            let g = 0;
            let b = 0;
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
                R: Math.round(ColorLab.#clamp((r + m) * 255, 0, 255)),
                G: Math.round(ColorLab.#clamp((g + m) * 255, 0, 255)),
                B: Math.round(ColorLab.#clamp((b + m) * 255, 0, 255)),
                A: parseFloat(A.toFixed(2))
            };
        },
        RGB_HSV: ({ R, G, B, A = 1 }) => {
            const r = R / 255;
            const g = G / 255;
            const b = B / 255;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            const delta = max - min;
            
            let H = 0;
            let S = 0;
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
        HSV_RGB: ({ H, S, V, A = 1 }) => {
            const h = H / 60;
            const s = S / 100;
            const v = V / 100;
            const c = v * s;
            const x = c * (1 - Math.abs(h % 2 - 1));
            const m = v - c;
            
            let r = 0;
            let g = 0;
            let b = 0;
            
            switch (Math.floor(h) % 6) {
                case 0: r = c; g = x; b = 0; break;
                case 1: r = x; g = c; b = 0; break;
                case 2: r = 0; g = c; b = x; break;
                case 3: r = 0; g = x; b = c; break;
                case 4: r = x; g = 0; b = c; break;
                case 5: r = c; g = 0; b = x; break;
            }
            
            return {
                R: Math.round(ColorLab.#clamp((r + m) * 255, 0, 255)),
                G: Math.round(ColorLab.#clamp((g + m) * 255, 0, 255)),
                B: Math.round(ColorLab.#clamp((b + m) * 255, 0, 255)),
                A: parseFloat(A.toFixed(2))
            };
        },
        RGB_CMYK: ({ R, G, B, A = 1 }) => {
            const r = R / 255;
            const g = G / 255;
            const b = B / 255;
            const K = 1 - Math.max(r, g, b);
            
            if (K === 1) {
                return { C: 0, M: 0, Y: 0, K: 100, A: parseFloat(A.toFixed(2)) };
            }
            
            const C = (1 - r - K) / (1 - K);
            const M = (1 - g - K) / (1 - K);
            const Y = (1 - b - K) / (1 - K);
            
            return {
                C: Math.round(ColorLab.#clamp(C * 100, 0, 100)),
                M: Math.round(ColorLab.#clamp(M * 100, 0, 100)),
                Y: Math.round(ColorLab.#clamp(Y * 100, 0, 100)),
                K: Math.round(ColorLab.#clamp(K * 100, 0, 100)),
                A: parseFloat(A.toFixed(2))
            };
        },
        CMYK_RGB: ({ C, M, Y, K, A = 1 }) => {
            const c = C / 100;
            const m = M / 100;
            const y = Y / 100;
            const k = K / 100;
            
            return {
                R: Math.round(ColorLab.#clamp(255 * (1 - c) * (1 - k), 0, 255)),
                G: Math.round(ColorLab.#clamp(255 * (1 - m) * (1 - k), 0, 255)),
                B: Math.round(ColorLab.#clamp(255 * (1 - y) * (1 - k), 0, 255)),
                A: parseFloat(A.toFixed(2))
            };
        },
        
        // CIE Family
        RGB_XYZ: ({ R, G, B, A = 1 }) => {
            const rLin = ColorLab.#srgbToLinear(R);
            const gLin = ColorLab.#srgbToLinear(G);
            const bLin = ColorLab.#srgbToLinear(B);

            const [X, Y, Z] = ColorLab.#multiplyMatrix(
                ColorLab.#RGB_TO_XYZ_MATRIX,
                [rLin, gLin, bLin]
            );

            return { X, Y, Z, A: parseFloat(A.toFixed(2)) };
        },
        XYZ_RGB: ({ X, Y, Z, A = 1 }) => {
            const [rLin, gLin, bLin] = ColorLab.#multiplyMatrix(
                ColorLab.#XYZ_TO_RGB_MATRIX,
                [X, Y, Z]
            );

            return {
                R: ColorLab.#linearToSrgb(rLin),
                G: ColorLab.#linearToSrgb(gLin),
                B: ColorLab.#linearToSrgb(bLin),
                A: parseFloat(A.toFixed(2))
            };
        },
        XYZ_LAB: ({ X, Y, Z, A = 1 }) => {
            const D65 = ColorLab.#D65;

            const fx = ColorLab.#xyzToLabF(X / D65[0]);
            const fy = ColorLab.#xyzToLabF(Y / D65[1]);
            const fz = ColorLab.#xyzToLabF(Z / D65[2]);

            return {
                L: 116 * fy - 16,
                a: 500 * (fx - fy),
                b: 200 * (fy - fz),
                A: parseFloat(A.toFixed(2))
            };
        },
        LAB_XYZ: ({ L, a, b, A = 1 }) => {
            const D65 = ColorLab.#D65;

            const fy = (L + 16) / 116;
            const fx = a / 500 + fy;
            const fz = fy - b / 200;

            return {
                X: ColorLab.#labToXyzF(fx) * D65[0],
                Y: ColorLab.#labToXyzF(fy) * D65[1],
                Z: ColorLab.#labToXyzF(fz) * D65[2],
                A: parseFloat(A.toFixed(2))
            };
        },
        LAB_LCH: ({ L, a, b, A = 1 }) => {
            const C = Math.sqrt(a * a + b * b);
            let H = Math.atan2(b, a) * (180 / Math.PI);
            if (H < 0) H += 360;

            return {
                L,
                C,
                H: Math.round(H),
                A: parseFloat(A.toFixed(2))
            };
        },
        LCH_LAB: ({ L, C, H, A = 1 }) => {
            const hRad = H * (Math.PI / 180);

            return {
                L,
                a: C * Math.cos(hRad),
                b: C * Math.sin(hRad),
                A: parseFloat(A.toFixed(2))
            };
        },
        RGB_LAB: (rgb) => {
            return ColorLab.#ENGINE.XYZ_LAB(ColorLab.#ENGINE.RGB_XYZ(rgb));
        },
        LAB_RGB: (lab) => {
            return ColorLab.#ENGINE.XYZ_RGB(ColorLab.#ENGINE.LAB_XYZ(lab));
        },
        RGB_LCH: (rgb) => {
            return ColorLab.#ENGINE.LAB_LCH(ColorLab.#ENGINE.RGB_LAB(rgb));
        },
        LCH_RGB: (lch) => {
            return ColorLab.#ENGINE.LAB_RGB(ColorLab.#ENGINE.LCH_LAB(lch));
        },
        
        // OK Family
        RGB_OKLAB: ({ R, G, B, A = 1 }) => {
            const rgb = [R, G, B];
            const xyz = ColorLab.#ENGINE.RGB_XYZ({ R, G, B, A: 1 });
            const xyzArr = [xyz.X, xyz.Y, xyz.Z];
        
            let lms = ColorLab.#multiplyV3M3x3(xyzArr, ColorLab.#XYZ_TO_LMS_MATRIX);
        
            lms[0] = Math.cbrt(lms[0]);
            lms[1] = Math.cbrt(lms[1]);
            lms[2] = Math.cbrt(lms[2]);
        
            const [L, a, b] = ColorLab.#multiplyV3M3x3(lms, ColorLab.#LMS_TO_OKLAB_MATRIX);
        
            return { L, a, b, A: parseFloat(A.toFixed(2)) };
        },
        OKLAB_RGB: ({ L, a, b, A = 1 }) => {
            let lms = ColorLab.#multiplyV3M3x3([L, a, b], ColorLab.#OKLAB_TO_LMS_MATRIX);
        
            lms[0] = lms[0] ** 3;
            lms[1] = lms[1] ** 3;
            lms[2] = lms[2] ** 3;
        
            const [X, Y, Z] = ColorLab.#multiplyV3M3x3(lms, ColorLab.#LMS_TO_XYZ_MATRIX);
        
            return ColorLab.#ENGINE.XYZ_RGB({ X, Y, Z, A });
        },
        OKLAB_OKLCH: ({ L, a, b, A = 1 }) => {
            const C = Math.sqrt(a * a + b * b);
            let H = Math.atan2(b, a) * (180 / Math.PI);
            if (H < 0) H += 360;
        
            return { L, C, H: Math.round(H), A: parseFloat(A.toFixed(2)) };
        },
        OKLCH_OKLAB: ({ L, C, H, A = 1 }) => {
            const hRad = H * (Math.PI / 180);
        
            return {
                L,
                a: C * Math.cos(hRad),
                b: C * Math.sin(hRad),
                A: parseFloat(A.toFixed(2))
            };
        },
        OKLCH_OKHSL: ({ L, C, H, A = 1 }) => {
            const [h, s, l] = ColorLab.#oklabToOkhsl([L, C * Math.cos(H * Math.PI / 180), C * Math.sin(H * Math.PI / 180)]);
            return {
                H: Math.round(h ?? 0),
                S: Math.round(s * 100),
                L: Math.round(l * 100),
                A: parseFloat(A.toFixed(2))
            };
        },
        OKHSL_OKLCH: ({ H, S, L, A = 1 }) => {
            const [L_, a, b] = ColorLab.#okhslToOklab([H, S / 100, L / 100]);
            const C = Math.sqrt(a * a + b * b);
            let h = Math.atan2(b, a) * (180 / Math.PI);
            if (h < 0) h += 360;
        
            return {
                L: L_,
                C,
                H: Math.round(h),
                A: parseFloat(A.toFixed(2))
            };
        },
        OKLCH_OKHSV: ({ L, C, H, A = 1 }) => {
            const [h, s, v] = ColorLab.#oklabToOkhsv([L, C * Math.cos(H * Math.PI / 180), C * Math.sin(H * Math.PI / 180)]);
            return {
                H: Math.round(h ?? 0),
                S: Math.round(s * 100),
                V: Math.round(v * 100),
                A: parseFloat(A.toFixed(2))
            };
        },
        OKHSV_OKLCH: ({ H, S, V, A = 1 }) => {
            const [L, a, b] = ColorLab.#okhsvToOklab([H, S / 100, V / 100]);
            const C = Math.sqrt(a * a + b * b);
            let h = Math.atan2(b, a) * (180 / Math.PI);
            if (h < 0) h += 360;
        
            return {
                L,
                C,
                H: Math.round(h),
                A: parseFloat(A.toFixed(2))
            };
        },
        RGB_OKLCH: (rgb) => {
            return ColorLab.#ENGINE.OKLAB_OKLCH(ColorLab.#ENGINE.RGB_OKLAB(rgb));
        },
        OKLCH_RGB: (oklch) => {
            return ColorLab.#ENGINE.OKLAB_RGB(ColorLab.#ENGINE.OKLCH_OKLAB(oklch));
        },
        RGB_OKHSL: (rgb) => {
            return ColorLab.#ENGINE.OKLCH_OKHSL(ColorLab.#ENGINE.RGB_OKLCH(rgb));
        },
        OKHSL_RGB: (okhsl) => {
            return ColorLab.#ENGINE.OKLCH_RGB(ColorLab.#ENGINE.OKHSL_OKLCH(okhsl));
        },
        RGB_OKHSV: (rgb) => {
            return ColorLab.#ENGINE.OKLCH_OKHSV(ColorLab.#ENGINE.RGB_OKLCH(rgb));
        },
        OKHSV_RGB: (okhsv) => {
            return ColorLab.#ENGINE.OKLCH_RGB(ColorLab.#ENGINE.OKHSV_OKLCH(okhsv));
        },
        
        // Keyword Family
        RGB_KEYWORD: ({ R, G, B }) => {
            let closest = null;
            let min = Infinity;
        
            for (const [name, hex] of Object.entries(ColorLab.#COLORS)) {
                const { R: r, G: g, B: b } = ColorLab.#EXTRACT.HEX(hex);
                const dist = (R - r) ** 2 + (G - g) ** 2 + (B - b) ** 2;
        
                if (dist < min) {
                    min = dist;
                    closest = name;
                }
            }
        
            return closest;
        },
        KEYWORD_RGB: (keyword) => {
            const hex = ColorLab.#COLORS_MAP.get(ColorLab.#trimCase(keyword));
            if (!hex) return null;
            return ColorLab.#EXTRACT.HEX(hex);
        },
    };
    
    /* --------------------------------------------
        Private Helper Methods
    -------------------------------------------- */
    static #detectSmart(input) {
        // Object Input Detection
        if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
            if ('R' in input && 'G' in input && 'B' in input) return 'RGB';
            if ('H' in input && 'S' in input && 'L' in input) return (input.space === 'okhsl' || input.mode === 'okhsl') ? 'OKHSL' : 'HSL';
            if ('H' in input && 'S' in input && 'V' in input) return (input.space === 'okhsv' || input.mode === 'okhsv') ? 'OKHSV' : 'HSV';
            if ('C' in input && 'M' in input && 'Y' in input && 'K' in input) return 'CMYK';
            if ('X' in input && 'Y' in input && 'Z' in input) return 'XYZ';
            if ('L' in input && 'C' in input && 'H' in input) return input.L > 1 ? 'LCH' : 'OKLCH';
            if ('L' in input && 'a' in input && 'b' in input) return input.L > 1 ? 'LAB' : 'OKLAB';
            
            if (typeof input.toHexString === 'function') input = input.toHexString();
            else if (typeof input.toRgbString === 'function') input = input.toRgbString();
            else if (typeof input.toString === 'function' && input.toString() !== '[object Object]') input = String(input);
            else return null;
        }
        
        if (typeof input !== 'string') return null;
        
        const keyword = ColorLab.#trimCase(input);
        if (ColorLab.#COLORS_MAP.has(keyword)) return 'KEYWORD';
        
        const css = input.trim();
        
        if (ColorLab.#REGEXP.HEX.test(css)) return 'HEX';
        if (ColorLab.#REGEXP.RGB.test(css)) return 'RGB';
        if (ColorLab.#REGEXP.HSL.test(css)) return 'HSL';
        if (ColorLab.#REGEXP.HSV.test(css)) return 'HSV';
        if (ColorLab.#REGEXP.CMYK.test(css)) return 'CMYK';
        if (ColorLab.#REGEXP.OKHSL.test(css)) return 'OKHSL';
        if (ColorLab.#REGEXP.OKHSV.test(css)) return 'OKHSV';
        if (ColorLab.#REGEXP.OKLCH.test(css)) return 'OKLCH';
        if (ColorLab.#REGEXP.OKLAB.test(css)) return 'OKLAB';
        if (ColorLab.#REGEXP.LCH.test(css)) return 'LCH';
        if (ColorLab.#REGEXP.LAB.test(css)) return 'LAB';
        if (ColorLab.#REGEXP.XYZ.test(css)) return 'XYZ';
        
        return null;
    }
    static #normalizeSmart(input) {
        const type = ColorLab.#detectSmart(input);
        if (!type) return null;
    
        // Object Input
        if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
            if (type === 'RGB')   return `rgb(${input.R} ${input.G} ${input.B} / ${input.A ?? 1})`;
            if (type === 'HSL')   return `hsl(${input.H}deg ${input.S}% ${input.L}% / ${input.A ?? 1})`;
            if (type === 'HSV')   return `hsv(${input.H}deg ${input.S}% ${input.V}% / ${input.A ?? 1})`;
            if (type === 'CMYK')  return `cmyk(${input.C}% ${input.M}% ${input.Y}% ${input.K}% / ${input.A ?? 1})`;
            if (type === 'XYZ')   return `color(xyz ${input.X} ${input.Y} ${input.Z} / ${input.A ?? 1})`;
            if (type === 'LAB')   return `lab(${input.L}% ${input.a} ${input.b} / ${input.A ?? 1})`;
            if (type === 'LCH')   return `lch(${input.L}% ${input.C} ${input.H}deg / ${input.A ?? 1})`;
            if (type === 'OKLAB') return `oklab(${input.L} ${input.a} ${input.b} / ${input.A ?? 1})`;
            if (type === 'OKLCH') return `oklch(${input.L} ${input.C} ${input.H}deg / ${input.A ?? 1})`;
            if (type === 'OKHSL') return `okhsl(${input.H}deg ${input.S}% ${input.L}% / ${input.A ?? 1})`;
            if (type === 'OKHSV') return `okhsv(${input.H}deg ${input.S}% ${input.V}% / ${input.A ?? 1})`;
    
            return null;
        }
    
        // String Input
        if (type === 'KEYWORD') return ColorLab.#COLORS_MAP.get(ColorLab.#trimCase(input));
        return ColorLab.#NORMALIZE[type](input);
    }
    static #getChannels(input) {
        const type = ColorLab.#detectSmart(input);
        if (!type) return null;
    
        if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
            let channels = null;
            if (type === 'RGB')   channels = { R: Number(input.R), G: Number(input.G), B: Number(input.B), A: Number(input.A ?? 1) };
            if (type === 'HSL')   channels = { H: Number(input.H), S: Number(input.S), L: Number(input.L), A: Number(input.A ?? 1) };
            if (type === 'HSV')   channels = { H: Number(input.H), S: Number(input.S), V: Number(input.V), A: Number(input.A ?? 1) };
            if (type === 'CMYK')  channels = { C: Number(input.C), M: Number(input.M), Y: Number(input.Y), K: Number(input.K), A: Number(input.A ?? 1) };
            if (type === 'XYZ')   channels = { X: Number(input.X), Y: Number(input.Y), Z: Number(input.Z), A: Number(input.A ?? 1) };
            if (type === 'LAB')   channels = { L: Number(input.L), a: Number(input.a), b: Number(input.b), A: Number(input.A ?? 1) };
            if (type === 'LCH')   channels = { L: Number(input.L), C: Number(input.C), H: Number(input.H), A: Number(input.A ?? 1) };
            if (type === 'OKLAB') channels = { L: Number(input.L), a: Number(input.a), b: Number(input.b), A: Number(input.A ?? 1) };
            if (type === 'OKLCH') channels = { L: Number(input.L), C: Number(input.C), H: Number(input.H), A: Number(input.A ?? 1) };
            if (type === 'OKHSL') channels = { H: Number(input.H), S: Number(input.S), L: Number(input.L), A: Number(input.A ?? 1) };
            if (type === 'OKHSV') channels = { H: Number(input.H), S: Number(input.S), V: Number(input.V), A: Number(input.A ?? 1) };
            return channels;
        }
    
        if (type === 'KEYWORD') {
            const hex = ColorLab.#COLORS_MAP.get(ColorLab.#trimCase(input));
            return ColorLab.#EXTRACT.HEX(hex);
        }
    
        const normalized = ColorLab.#NORMALIZE[type](input);
        if (!normalized) return null;
    
        return ColorLab.#EXTRACT[type](normalized);
    }
    static #rgbToHex(rgb) {
        if (!rgb) return null;
        const r = ColorLab.#toHex2(rgb.R);
        const g = ColorLab.#toHex2(rgb.G);
        const b = ColorLab.#toHex2(rgb.B);
        const a = rgb.A ?? 1;
        return a === 1
            ? `#${r}${g}${b}`
            : `#${r}${g}${b}${ColorLab.#toHex2(a * 255)}`;
    }
    static #toRgbChannels(input) {
        const type = ColorLab.#detectSmart(input);
        if (!type) return null;
    
        if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
            const extracted = ColorLab.#getChannels(input);
            if (!extracted) return null;
            if (type === 'RGB') return extracted;
            return ColorLab.#ENGINE[`${type}_RGB`](extracted);
        }
    
        if (type === 'KEYWORD') {
            const hex = ColorLab.#COLORS_MAP.get(ColorLab.#trimCase(input));
            return ColorLab.#EXTRACT.HEX(hex);
        }
    
        if (type === 'HEX') {
            const normalized = ColorLab.#NORMALIZE.HEX(input);
            return normalized ? ColorLab.#EXTRACT.HEX(normalized) : null;
        }
    
        const normalized = ColorLab.#NORMALIZE[type](input);
        if (!normalized) return null;
    
        const extracted = ColorLab.#EXTRACT[type](normalized);
        if (!extracted) return null;
    
        return ColorLab.#ENGINE[`${type}_RGB`](extracted);
    }
    
    /* --------------------------------------------
        Public Methods
    -------------------------------------------- */
    // Tools
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
        if (!ColorLab.isValid(input)) return null;
        
        return {
            // Base
            keyword: ColorLab.toKeyword(input),
            hex: ColorLab.toHex(input),
            
            // Formats
            rgb: ColorLab.toRgb(input),
            hsl: ColorLab.toHsl(input),
            hsv: ColorLab.toHsv(input),
            cmyk: ColorLab.toCmyk(input),
            xyz: ColorLab.toXyz(input),
            lab: ColorLab.toLab(input),
            lch: ColorLab.toLch(input),
            okLab: ColorLab.toOkLab(input),
            okLch: ColorLab.toOkLch(input),
            okHsl: ColorLab.toOkHsl(input),
            okHsv: ColorLab.toOkHsv(input),
            
            // Detail
            red: ColorLab.getRed(input),
            green: ColorLab.getGreen(input),
            blue: ColorLab.getBlue(input),
            alpha: ColorLab.getAlpha(input),
            hue: ColorLab.getHue(input),
            saturation: ColorLab.getSaturation(input),
            lightness: ColorLab.getLightness(input),
            cyan: ColorLab.getCyan(input),
            magenta: ColorLab.getMagenta(input),
            yellow: ColorLab.getYellow(input),
            key: ColorLab.getKey(input),
            value: ColorLab.getValue(input),
            ray: ColorLab.getRay(input),
            okHue: ColorLab.getOkHue(input),
        };
    }
    static channels(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.#getChannels(item));
        return ColorLab.#getChannels(input);
    }
    static random() {
        return ColorLab.#rgbToHex({
            R: Math.floor(Math.random() * 256),
            G: Math.floor(Math.random() * 256),
            B: Math.floor(Math.random() * 256),
            A: 1,
        });
    }
    
    // Color Conversions
    static toKeyword(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.toKeyword(item));
        const rgb = ColorLab.#toRgbChannels(input);
        if (!rgb) return null;
        return ColorLab.#ENGINE.RGB_KEYWORD(rgb);
    }
    static toRgb(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.toRgb(item));
        const ch = ColorLab.#toRgbChannels(input);
        if (!ch) return null;
        return ch.A === 1 ?
            `rgb(${ch.R} ${ch.G} ${ch.B})` :
            `rgb(${ch.R} ${ch.G} ${ch.B} / ${ch.A})`;
    }
    static toHex(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.toHex(item));
        const rgb = ColorLab.#toRgbChannels(input);
        if (!rgb) return null;
        return ColorLab.#rgbToHex(rgb);
    }
    static toHsl(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.toHsl(item));
        const rgb = ColorLab.#toRgbChannels(input);
        if (!rgb) return null;
        const ch = ColorLab.#ENGINE.RGB_HSL(rgb);
        return ch.A === 1 ?
            `hsl(${ch.H}deg ${ch.S}% ${ch.L}%)` :
            `hsl(${ch.H}deg ${ch.S}% ${ch.L}% / ${ch.A})`;
    }
    static toHsv(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.toHsv(item));
        const rgb = ColorLab.#toRgbChannels(input);
        if (!rgb) return null;
        const ch = ColorLab.#ENGINE.RGB_HSV(rgb);
        return ch.A === 1 ?
            `hsv(${ch.H}deg ${ch.S}% ${ch.V}%)` :
            `hsv(${ch.H}deg ${ch.S}% ${ch.V}% / ${ch.A})`;
    }
    static toCmyk(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.toCmyk(item));
        const rgb = ColorLab.#toRgbChannels(input);
        if (!rgb) return null;
        const ch = ColorLab.#ENGINE.RGB_CMYK(rgb);
        return ch.A === 1 ?
            `cmyk(${ch.C}% ${ch.M}% ${ch.Y}% ${ch.K}%)` :
            `cmyk(${ch.C}% ${ch.M}% ${ch.Y}% ${ch.K}% / ${ch.A})`;
    }
static toXyz(input) {
    if (Array.isArray(input)) return input.map(item => ColorLab.toXyz(item));
    const rgb = ColorLab.#toRgbChannels(input);
    if (!rgb) return null;
    const ch = ColorLab.#ENGINE.RGB_XYZ(rgb);
    return ch.A === 1 ?
        `color(xyz ${ch.X.toFixed(3)} ${ch.Y.toFixed(3)} ${ch.Z.toFixed(3)})` :
        `color(xyz ${ch.X.toFixed(3)} ${ch.Y.toFixed(3)} ${ch.Z.toFixed(3)} / ${ch.A})`;
}
static toLab(input) {
    if (Array.isArray(input)) return input.map(item => ColorLab.toLab(item));
    const rgb = ColorLab.#toRgbChannels(input);
    if (!rgb) return null;
    const ch = ColorLab.#ENGINE.RGB_LAB(rgb);
    return ch.A === 1 ?
        `lab(${ch.L.toFixed(2)}% ${ch.a.toFixed(2)} ${ch.b.toFixed(2)})` :
        `lab(${ch.L.toFixed(2)}% ${ch.a.toFixed(2)} ${ch.b.toFixed(2)} / ${ch.A})`;
}
static toLch(input) {
    if (Array.isArray(input)) return input.map(item => ColorLab.toLch(item));
    const rgb = ColorLab.#toRgbChannels(input);
    if (!rgb) return null;
    const ch = ColorLab.#ENGINE.RGB_LCH(rgb);
    return ch.A === 1 ?
        `lch(${ch.L.toFixed(2)}% ${ch.C.toFixed(2)} ${ch.H}deg)` :
        `lch(${ch.L.toFixed(2)}% ${ch.C.toFixed(2)} ${ch.H}deg / ${ch.A})`;
}
static toOkLab(input) {
    if (Array.isArray(input)) return input.map(item => ColorLab.toOkLab(item));
    const rgb = ColorLab.#toRgbChannels(input);
    if (!rgb) return null;
    const ch = ColorLab.#ENGINE.RGB_OKLAB(rgb);
    return ch.A === 1 ?
        `oklab(${ch.L.toFixed(3)} ${ch.a.toFixed(3)} ${ch.b.toFixed(3)})` :
        `oklab(${ch.L.toFixed(3)} ${ch.a.toFixed(3)} ${ch.b.toFixed(3)} / ${ch.A})`;
}
static toOkLch(input) {
    if (Array.isArray(input)) return input.map(item => ColorLab.toOkLch(item));
    const rgb = ColorLab.#toRgbChannels(input);
    if (!rgb) return null;
    const ch = ColorLab.#ENGINE.RGB_OKLCH(rgb);
    return ch.A === 1 ?
        `oklch(${ch.L.toFixed(3)} ${ch.C.toFixed(3)} ${ch.H}deg)` :
        `oklch(${ch.L.toFixed(3)} ${ch.C.toFixed(3)} ${ch.H}deg / ${ch.A})`;
}
    static toOkHsl(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.toOkHsl(item));
        const rgb = ColorLab.#toRgbChannels(input);
        if (!rgb) return null;
        const ch = ColorLab.#ENGINE.RGB_OKHSL(rgb);
        return ch.A === 1 ?
            `okhsl(${ch.H}deg ${ch.S}% ${ch.L}%)` :
            `okhsl(${ch.H}deg ${ch.S}% ${ch.L}% / ${ch.A})`;
    }
    static toOkHsv(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.toOkHsv(item));
        const rgb = ColorLab.#toRgbChannels(input);
        if (!rgb) return null;
        const ch = ColorLab.#ENGINE.RGB_OKHSV(rgb);
        return ch.A === 1 ?
            `okhsv(${ch.H}deg ${ch.S}% ${ch.V}%)` :
            `okhsv(${ch.H}deg ${ch.S}% ${ch.V}% / ${ch.A})`;
    }

    // Shading
    static hue(input, degrees = 180) {
        if (Array.isArray(input)) return input.map(item => ColorLab.hue(item, degrees));
        const hsl = ColorLab.channels(ColorLab.toHsl(input));
        if (!hsl) return null;
        hsl.H = ColorLab.#normalizeHue(hsl.H + degrees);
        return ColorLab.toHex(hsl);
    }
    static okhue(input, degrees = 180) {
        if (Array.isArray(input)) return input.map(item => ColorLab.okhue(item, degrees));
        const okhsl = ColorLab.channels(ColorLab.toOkHsl(input));
        if (!okhsl) return null;
        okhsl.H = ColorLab.#normalizeHue(okhsl.H + degrees);
        return ColorLab.toHex(okhsl);
    }
    static tint(input, ratio = 0.5) {
        if (Array.isArray(input)) return input.map(item => ColorLab.tint(item, ratio));
        const hsl = ColorLab.channels(ColorLab.toHsl(input));
        if (!hsl) return null;
        hsl.L = Math.round(ColorLab.#clamp(hsl.L + (100 - hsl.L) * ratio, 0, 100));
        return ColorLab.toHex(hsl);
    }
    static tone(input, ratio = 0.5) {
        if (Array.isArray(input)) return input.map(item => ColorLab.tone(item, ratio));
        const hsl = ColorLab.channels(ColorLab.toHsl(input));
        if (!hsl) return null;
        hsl.S = Math.round(ColorLab.#clamp(hsl.S * (1 - ratio), 0, 100));
        return ColorLab.toHex(hsl);
    }
    static shade(input, ratio = 0.5) {
        if (Array.isArray(input)) return input.map(item => ColorLab.shade(item, ratio));
        const hsl = ColorLab.channels(ColorLab.toHsl(input));
        if (!hsl) return null;
        hsl.L = Math.round(ColorLab.#clamp(hsl.L * (1 - ratio), 0, 100));
        return ColorLab.toHex(hsl);
    }
    static ray(input, ratio = 0.5) {
        if (Array.isArray(input)) return input.map(item => ColorLab.ray(item, ratio));
        const okhsl = ColorLab.channels(ColorLab.toOkHsl(input));
        if (!okhsl) return null;
        okhsl.L = Math.round(ColorLab.#clamp(okhsl.L * (1 - ratio), 0, 100));
        return ColorLab.toHex(okhsl);
    }
        
    // Get Detail
    static getRed(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getRed(item));
        const rgb = ColorLab.channels(ColorLab.toRgb(input));
        return rgb ? rgb.R : null;
    }
    static getGreen(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getGreen(item));
        const rgb = ColorLab.channels(ColorLab.toRgb(input));
        return rgb ? rgb.G : null;
    }
    static getBlue(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getBlue(item));
        const rgb = ColorLab.channels(ColorLab.toRgb(input));
        return rgb ? rgb.B : null;
    }
    static getAlpha(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getAlpha(item));
        const rgb = ColorLab.channels(ColorLab.toRgb(input));
        return rgb ? rgb.A : null;
    }
    static getHue(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getHue(item));
        const hsl = ColorLab.channels(ColorLab.toHsl(input));
        return hsl ? hsl.H : null;
    }
    static getSaturation(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getSaturation(item));
        const hsl = ColorLab.channels(ColorLab.toHsl(input));
        return hsl ? hsl.S : null;
    }
    static getLightness(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getLightness(item));
        const hsl = ColorLab.channels(ColorLab.toHsl(input));
        return hsl ? hsl.L : null;
    }
    static getCyan(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getCyan(item));
        const cmyk = ColorLab.channels(ColorLab.toCmyk(input));
        return cmyk ? cmyk.C : null;
    }
    static getMagenta(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getMagenta(item));
        const cmyk = ColorLab.channels(ColorLab.toCmyk(input));
        return cmyk ? cmyk.M : null;
    }
    static getYellow(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getYellow(item));
        const cmyk = ColorLab.channels(ColorLab.toCmyk(input));
        return cmyk ? cmyk.Y : null;
    }
    static getKey(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getKey(item));
        const cmyk = ColorLab.channels(ColorLab.toCmyk(input));
        return cmyk ? cmyk.K : null;
    }
    static getValue(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getValue(item));
        const hsv = ColorLab.channels(ColorLab.toHsv(input));
        return hsv ? hsv.V : null;
    }
    static getRay(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getRay(item));
        const okhsl = ColorLab.channels(ColorLab.toOkHsl(input));
        return okhsl ? okhsl.L : null;
    }
    static getOkHue(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getOkHue(item));
        const okhsl = ColorLab.channels(ColorLab.toOkHsl(input));
        return okhsl ? okhsl.H : null;
    }
    
    // Change Detail
    static changeRed(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeRed(item, value));
        const rgb = ColorLab.channels(ColorLab.toRgb(input));
        if (!rgb) return null;
        rgb.R = Math.round(ColorLab.#clamp(value, 0, 255));
        return ColorLab.toHex(rgb);
    }
    static changeGreen(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeGreen(item, value));
        const rgb = ColorLab.channels(ColorLab.toRgb(input));
        if (!rgb) return null;
        rgb.G = Math.round(ColorLab.#clamp(value, 0, 255));
        return ColorLab.toHex(rgb);
    }
    static changeBlue(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeBlue(item, value));
        const rgb = ColorLab.channels(ColorLab.toRgb(input));
        if (!rgb) return null;
        rgb.B = Math.round(ColorLab.#clamp(value, 0, 255));
        return ColorLab.toHex(rgb);
    }
    static changeAlpha(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeAlpha(item, value));
        const rgb = ColorLab.channels(ColorLab.toRgb(input));
        if (!rgb) return null;
        rgb.A = parseFloat(ColorLab.#clamp(value, 0, 1).toFixed(2));
        return ColorLab.toHex(rgb);
    }
    static changeHue(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeHue(item, value));
        const hsl = ColorLab.channels(ColorLab.toHsl(input));
        if (!hsl) return null;
        hsl.H = ColorLab.#normalizeHue(value);
        return ColorLab.toHex(hsl);
    }
    static changeSaturation(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeSaturation(item, value));
        const hsl = ColorLab.channels(ColorLab.toHsl(input));
        if (!hsl) return null;
        hsl.S = Math.round(ColorLab.#clamp(value, 0, 100));
        return ColorLab.toHex(hsl);
    }
    static changeLightness(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeLightness(item, value));
        const hsl = ColorLab.channels(ColorLab.toHsl(input));
        if (!hsl) return null;
        hsl.L = Math.round(ColorLab.#clamp(value, 0, 100));
        return ColorLab.toHex(hsl);
    }
    static changeCyan(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeCyan(item, value));
        const cmyk = ColorLab.channels(ColorLab.toCmyk(input));
        if (!cmyk) return null;
        cmyk.C = Math.round(ColorLab.#clamp(value, 0, 100));
        return ColorLab.toHex(cmyk);
    }
    static changeMagenta(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeMagenta(item, value));
        const cmyk = ColorLab.channels(ColorLab.toCmyk(input));
        if (!cmyk) return null;
        cmyk.M = Math.round(ColorLab.#clamp(value, 0, 100));
        return ColorLab.toHex(cmyk);
    }
    static changeYellow(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeYellow(item, value));
        const cmyk = ColorLab.channels(ColorLab.toCmyk(input));
        if (!cmyk) return null;
        cmyk.Y = Math.round(ColorLab.#clamp(value, 0, 100));
        return ColorLab.toHex(cmyk);
    }
    static changeKey(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeKey(item, value));
        const cmyk = ColorLab.channels(ColorLab.toCmyk(input));
        if (!cmyk) return null;
        cmyk.K = Math.round(ColorLab.#clamp(value, 0, 100));
        return ColorLab.toHex(cmyk);
    }
    static changeValue(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeValue(item, value));
        const hsv = ColorLab.channels(ColorLab.toHsv(input));
        if (!hsv) return null;
        hsv.V = Math.round(ColorLab.#clamp(value, 0, 100));
        return ColorLab.toHex(hsv);
    }
    static changeRay(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeRay(item, value));
        const okhsl = ColorLab.channels(ColorLab.toOkHsl(input));
        if (!okhsl) return null;
        okhsl.L = Math.round(ColorLab.#clamp(value, 0, 100));
        return ColorLab.toHex(okhsl);
    }
    static changeOkHue(input, value) {
        if (Array.isArray(input)) return input.map(item => ColorLab.changeOkHue(item, value));
        const okhsl = ColorLab.channels(ColorLab.toOkHsl(input));
        if (!okhsl) return null;
        okhsl.H = ColorLab.#normalizeHue(value);
        return ColorLab.toHex(okhsl);
    }
    
    // Contrast
    static getContrast(color1, color2) {
        if (Array.isArray(color1)) return color1.map(c => ColorLab.getContrast(c, color2));
        if (Array.isArray(color2)) return color2.map(c => ColorLab.getContrast(color1, c));
        
        const { rWeight, gWeight, bWeight, offset } = ColorLab.#WCAG_CONSTANTS;
        
        const luminance = (color) => {
            const rgb = ColorLab.channels(ColorLab.toRgb(color));
            if (!rgb) return 0;
            const R = ColorLab.#srgbToLinear(rgb.R);
            const G = ColorLab.#srgbToLinear(rgb.G);
            const B = ColorLab.#srgbToLinear(rgb.B);
            return rWeight * R + gWeight * G + bWeight * B;
        };
        
        const L1 = luminance(color1);
        const L2 = luminance(color2);
        const ratio = (Math.max(L1, L2) + offset) / (Math.min(L1, L2) + offset);
        return Number(ratio.toFixed(2));
    }
    static getContrastLevel(ratio) {
        if (Array.isArray(ratio)) return ratio.map(r => ColorLab.getContrastLevel(r));
        const { levels } = ColorLab.#WCAG_CONSTANTS;
        ratio = parseFloat(ratio);
        if (ratio >= levels.AAA) return 'AAA';
        if (ratio >= levels.AA) return 'AA';
        if (ratio >= levels.A) return 'A';
        return 'Fail';
    }
    static getBestContrastColor(bgColor) {
        if (Array.isArray(bgColor)) return bgColor.map(c => ColorLab.getBestContrastColor(c));
        
        const white = '#FFFFFF';
        const black = '#000000';
        
        const contrastWithWhite = ColorLab.getContrast(bgColor, white);
        const contrastWithBlack = ColorLab.getContrast(bgColor, black);
        
        return contrastWithWhite >= contrastWithBlack ? white : black;
    }
    
    // Harmonies
    static getHarmonies(input) {
        if (Array.isArray(input)) return input.map(item => ColorLab.getHarmonies(item));
    
        const hsl = ColorLab.channels(ColorLab.toHsl(input));
        if (!hsl) return null;
    
        const { H, S, L, A } = hsl;
        const result = {};
    
        for (const [name, deltas] of Object.entries(ColorLab.#HARMONIES)) {
            result[name] = deltas.map(d => {
                const newH = ColorLab.#normalizeHue(H + d);
                return ColorLab.toHex({ H: newH, S, L, A });
            });
        }
    
        return result;
    }
        
    // Mix
    static mix(color1, color2, ratio = 0.5) {
        if (Array.isArray(color1)) return color1.map(c => ColorLab.mix(c, color2, ratio));
        if (Array.isArray(color2)) return color2.map(c => ColorLab.mix(color1, c, ratio));
    
        const a = ColorLab.channels(ColorLab.toRgb(color1));
        const b = ColorLab.channels(ColorLab.toRgb(color2));
        if (!a || !b) return null;
    
        const r = ColorLab.#clamp(ratio, 0, 1);
        const R = Math.round(a.R + (b.R - a.R) * r);
        const G = Math.round(a.G + (b.G - a.G) * r);
        const B = Math.round(a.B + (b.B - a.B) * r);
        const A = parseFloat((a.A + (b.A - a.A) * r).toFixed(2));
    
        return ColorLab.toHex({ R, G, B, A });
    }
    static okmix(color1, color2, ratio = 0.5) {
        if (Array.isArray(color1)) return color1.map(c => ColorLab.okmix(c, color2, ratio));
        if (Array.isArray(color2)) return color2.map(c => ColorLab.okmix(color1, c, ratio));
    
        const lab1 = ColorLab.channels(ColorLab.toOkLab(color1));
        const lab2 = ColorLab.channels(ColorLab.toOkLab(color2));
        if (!lab1 || !lab2) return null;
    
        const r = ColorLab.#clamp(ratio, 0, 1);
        const L = lab1.L + (lab2.L - lab1.L) * r;
        const a = lab1.a + (lab2.a - lab1.a) * r;
        const b = lab1.b + (lab2.b - lab1.b) * r;
        const A = parseFloat((lab1.A + (lab2.A - lab1.A) * r).toFixed(2));
    
        return ColorLab.toHex({ L, a, b, A });
    }
    static hueMix(color1, color2, ratio = 0.5) {
        if (Array.isArray(color1)) return color1.map(c => ColorLab.hueMix(c, color2, ratio));
        if (Array.isArray(color2)) return color2.map(c => ColorLab.hueMix(color1, c, ratio));
    
        const lch1 = ColorLab.channels(ColorLab.toOkLch(color1));
        const lch2 = ColorLab.channels(ColorLab.toOkLch(color2));
        if (!lch1 || !lch2) return null;
    
        const r = ColorLab.#clamp(ratio, 0, 1);
    
        const L = lch1.L + (lch2.L - lch1.L) * r;
        const C = lch1.C + (lch2.C - lch1.C) * r;
    
        let dH = lch2.H - lch1.H;
        if (dH > 180) dH -= 360;
        if (dH < -180) dH += 360;
        const H = ColorLab.#normalizeHue(lch1.H + dH * r);
    
        const A = parseFloat((lch1.A + (lch2.A - lch1.A) * r).toFixed(2));
    
        return ColorLab.toHex({ L, C, H, A });
    }
}
