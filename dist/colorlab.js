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
        Constants
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
    static #OK_CONSTANTS = {
        K1: 0.206,
        K2: 0.03,
        K3: (1 + 0.206) / (1 + 0.03),
        tau: 2 * Math.PI,
        floatMax: Number.MAX_VALUE,
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
    
    /* --------------------------------------------
        Convert Engine
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
        RGB_OKLAB: () => {},
        OKLAB_RGB: () => {},
        OKLAB_OKLCH: () => {},
        OKLCH_OKLAB: () => {},
        OKLCH_OKHSL: () => {},
        OKHSL_OKLCH: () => {},
        OKLCH_OKHSV: () => {},
        OKHSV_OKLCH: () => {},
        RGB_OKLCH: () => {},
        OKLCH_RGB: () => {},
        RGB_OKHSL: () => {},
        OKHSL_RGB: () => {},
        RGB_OKHSV: () => {},
        OKHSV_RGB: () => {},
        
        // Keyword Family
        RGB_KEYWORD: () => {},
        KEYWORD_RGB: () => {},
    };
    
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