// src/core/constants.js
var COLORS = {
  AliceBlue: "#F0F8FF",
  AntiqueWhite: "#FAEBD7",
  Aqua: "#00FFFF",
  Aquamarine: "#7FFFD4",
  Azure: "#F0FFFF",
  Beige: "#F5F5DC",
  Bisque: "#FFE4C4",
  Black: "#000000",
  BlanchedAlmond: "#FFEBCD",
  Blue: "#0000FF",
  BlueViolet: "#8A2BE2",
  Brown: "#A52A2A",
  BurlyWood: "#DEB887",
  CadetBlue: "#5F9EA0",
  Chartreuse: "#7FFF00",
  Chocolate: "#D2691E",
  Coral: "#FF7F50",
  CornflowerBlue: "#6495ED",
  Cornsilk: "#FFF8DC",
  Crimson: "#DC143C",
  Cyan: "#00FFFF",
  DarkBlue: "#00008B",
  DarkCyan: "#008B8B",
  DarkGoldenRod: "#B8860B",
  DarkGray: "#A9A9A9",
  DarkGreen: "#006400",
  DarkGrey: "#A9A9A9",
  DarkKhaki: "#BDB76B",
  DarkMagenta: "#8B008B",
  DarkOliveGreen: "#556B2F",
  DarkOrange: "#FF8C00",
  DarkOrchid: "#9932CC",
  DarkRed: "#8B0000",
  DarkSalmon: "#E9967A",
  DarkSeaGreen: "#8FBC8F",
  DarkSlateBlue: "#483D8B",
  DarkSlateGray: "#2F4F4F",
  DarkSlateGrey: "#2F4F4F",
  DarkTurquoise: "#00CED1",
  DarkViolet: "#9400D3",
  DeepPink: "#FF1493",
  DeepSkyBlue: "#00BFFF",
  DimGray: "#696969",
  DimGrey: "#696969",
  DodgerBlue: "#1E90FF",
  FireBrick: "#B22222",
  FloralWhite: "#FFFAF0",
  ForestGreen: "#228B22",
  Fuchsia: "#FF00FF",
  Gainsboro: "#DCDCDC",
  GhostWhite: "#F8F8FF",
  Gold: "#FFD700",
  GoldenRod: "#DAA520",
  Gray: "#808080",
  Green: "#008000",
  GreenYellow: "#ADFF2F",
  Grey: "#808080",
  HoneyDew: "#F0FFF0",
  HotPink: "#FF69B4",
  IndianRed: "#CD5C5C",
  Indigo: "#4B0082",
  Ivory: "#FFFFF0",
  Khaki: "#F0E68C",
  Lavender: "#E6E6FA",
  LavenderBlush: "#FFF0F5",
  LawnGreen: "#7CFC00",
  LemonChiffon: "#FFFACD",
  LightBlue: "#ADD8E6",
  LightCoral: "#F08080",
  LightCyan: "#E0FFFF",
  LightGoldenRodYellow: "#FAFAD2",
  LightGray: "#D3D3D3",
  LightGreen: "#90EE90",
  LightGrey: "#D3D3D3",
  LightPink: "#FFB6C1",
  LightSalmon: "#FFA07A",
  LightSeaGreen: "#20B2AA",
  LightSkyBlue: "#87CEFA",
  LightSlateGray: "#778899",
  LightSlateGrey: "#778899",
  LightSteelBlue: "#B0C4DE",
  LightYellow: "#FFFFE0",
  Lime: "#00FF00",
  LimeGreen: "#32CD32",
  Linen: "#FAF0E6",
  Magenta: "#FF00FF",
  Maroon: "#800000",
  MediumAquaMarine: "#66CDAA",
  MediumBlue: "#0000CD",
  MediumOrchid: "#BA55D3",
  MediumPurple: "#9370DB",
  MediumSeaGreen: "#3CB371",
  MediumSlateBlue: "#7B68EE",
  MediumSpringGreen: "#00FA9A",
  MediumTurquoise: "#48D1CC",
  MediumVioletRed: "#C71585",
  MidnightBlue: "#191970",
  MintCream: "#F5FFFA",
  MistyRose: "#FFE4E1",
  Moccasin: "#FFE4B5",
  NavajoWhite: "#FFDEAD",
  Navy: "#000080",
  OldLace: "#FDF5E6",
  Olive: "#808000",
  OliveDrab: "#6B8E23",
  Orange: "#FFA500",
  OrangeRed: "#FF4500",
  Orchid: "#DA70D6",
  PaleGoldenRod: "#EEE8AA",
  PaleGreen: "#98FB98",
  PaleTurquoise: "#AFEEEE",
  PaleVioletRed: "#DB7093",
  PapayaWhip: "#FFEFD5",
  PeachPuff: "#FFDAB9",
  Peru: "#CD853F",
  Pink: "#FFC0CB",
  Plum: "#DDA0DD",
  PowderBlue: "#B0E0E6",
  Purple: "#800080",
  RebeccaPurple: "#663399",
  Red: "#FF0000",
  RosyBrown: "#BC8F8F",
  RoyalBlue: "#4169E1",
  SaddleBrown: "#8B4513",
  Salmon: "#FA8072",
  SandyBrown: "#F4A460",
  SeaGreen: "#2E8B57",
  SeaShell: "#FFF5EE",
  Sienna: "#A0522D",
  Silver: "#C0C0C0",
  SkyBlue: "#87CEEB",
  SlateBlue: "#6A5ACD",
  SlateGray: "#708090",
  SlateGrey: "#708090",
  Snow: "#FFFAFA",
  SpringGreen: "#00FF7F",
  SteelBlue: "#4682B4",
  Tan: "#D2B48C",
  Teal: "#008080",
  Thistle: "#D8BFD8",
  Tomato: "#FF6347",
  Turquoise: "#40E0D0",
  Violet: "#EE82EE",
  Wheat: "#F5DEB3",
  White: "#FFFFFF",
  WhiteSmoke: "#F5F5F5",
  Yellow: "#FFFF00",
  YellowGreen: "#9ACD32"
};
var HARMONIES = {
  analogous: [0, 30, -30],
  complementary: [0, 180],
  tetradic: [0, 60, 180, 240],
  compound: [0, 150, -150],
  "split-complementary": [0, 30, 180, 210],
  triadic: [0, 120, -120],
  square: [0, 90, -90, 180]
};
var COLORS_MAP = ((colors) => {
  const map = new Map;
  for (const [name, hex] of Object.entries(colors)) {
    const key = name.replace(/\s+/g, "").toLowerCase();
    map.set(key, hex);
  }
  return map;
})(COLORS);
var D65 = { X: 0.95047, Y: 1, Z: 1.08883 };
var RGB_TO_XYZ_MATRIX = [
  [0.4124564, 0.3575761, 0.1804375],
  [0.2126729, 0.7151522, 0.072175],
  [0.0193339, 0.119192, 0.9503041]
];
var XYZ_TO_RGB_MATRIX = [
  [3.2404542, -1.5371385, -0.4985314],
  [-0.969266, 1.8760108, 0.041556],
  [0.0556434, -0.2040259, 1.0572252]
];
var OKLAB_M1 = [
  [0.4122214708, 0.5363325363, 0.0514459929],
  [0.2119034982, 0.6806995451, 0.1073969566],
  [0.0883024619, 0.2817188376, 0.6299787005]
];
var OKLAB_M2 = [
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766]
];
var OKLAB_M1_INV2 = [
  [4.0767416361, -3.3077115391, 0.230969903],
  [-1.2684379732, 2.6097573013, -0.3413193281],
  [-0.0041960763, -0.7034186179, 1.7076146942]
];
var OKLAB_M2_INV2 = [
  [1, 0.3963377774, 0.2158037573],
  [1, -0.1055613458, -0.0638541728],
  [1, -0.0894841775, -1.291485548]
];

// src/core/regexp.js
var regexp_default = {
  HEX: /^#([a-f\d]{3}|[a-f\d]{4}|[a-f\d]{6}|[a-f\d]{8})$/i,
  RGB: /^rgba?\(\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  HSL: /^hsla?\(\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*,?\s*(\d+(?:\.\d+)?)%?\s*,?\s*(\d+(?:\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  HSV: /^hsva?\(\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*,?\s*(\d+(?:\.\d+)?)%?\s*,?\s*(\d+(?:\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  HWB: /^hwba?\(\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*,?\s*(\d+(?:\.\d+)?)%?\s*,?\s*(\d+(?:\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  CMYK: /^cmyk\(\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*\)$/i,
  LAB: /^lab\(\s*(-?\d+(?:\.\d+)?)%?\s*,?\s*(-?\d+(?:\.\d+)?)\s*,?\s*(-?\d+(?:\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  LCH: /^lch\(\s*(\d+(?:\.\d+)?)%?\s*,?\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  OKLAB: /^oklab\(\s*(-?\d+(?:\.\d+)?)\s*,?\s*(-?\d+(?:\.\d+)?)\s*,?\s*(-?\d+(?:\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  OKLCH: /^oklch\(\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  OKHSL: /^okhsla?\(\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*,?\s*(\d+(?:\.\d+)?)%?\s*,?\s*(\d+(?:\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  OKHSV: /^okhsva?\(\s*(\d+(?:\.\d+)?)\s*(?:deg)?\s*,?\s*(\d+(?:\.\d+)?)%?\s*,?\s*(\d+(?:\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  XYZ: /^color\(\s*xyz\s+(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  P3: /^color\(\s*display-p3\s+(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
  EX_HEX: /^#([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})?$/i,
  EX_RGB: /^rgb\(\s*(\d+)\s+(\d+)\s+(\d+)\s*\/\s*([\d.]+)\s*\)$/i,
  EX_HSL: /^hsl\(\s*(\d+)deg\s+(\d+)%\s+(\d+)%\s*\/\s*([\d.]+)\s*\)$/i,
  EX_HSV: /^hsv\(\s*(\d+)deg\s+(\d+)%\s+(\d+)%\s*\/\s*([\d.]+)\s*\)$/i,
  EX_HWB: /^hwb\(\s*(\d+)deg\s+(\d+)%\s+(\d+)%\s*\/\s*([\d.]+)\s*\)$/i,
  EX_CMYK: /^cmyk\(\s*(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%\s*\)$/i,
  EX_LAB: /^lab\(\s*(-?\d+(?:\.\d+)?)%\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*\/\s*([\d.]+)\s*\)$/i,
  EX_LCH: /^lch\(\s*(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)deg\s*\/\s*([\d.]+)\s*\)$/i,
  EX_OKLAB: /^oklab\(\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*\/\s*([\d.]+)\s*\)$/i,
  EX_OKLCH: /^oklch\(\s*(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)deg\s*\/\s*([\d.]+)\s*\)$/i,
  EX_OKHSL: /^okhsl\(\s*(\d+)deg\s+(\d+)%\s+(\d+)%\s*\/\s*([\d.]+)\s*\)$/i,
  EX_OKHSV: /^okhsv\(\s*(\d+)deg\s+(\d+)%\s+(\d+)%\s*\/\s*([\d.]+)\s*\)$/i,
  EX_XYZ: /^color\(xyz\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\/\s*([\d.]+)\s*\)$/i,
  EX_P3: /^color\(display-p3\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\/\s*([\d.]+)\s*\)$/i
};

// src/core/helpers.js
var normalizeHue = (hue) => {
  return Math.round((parseFloat(hue) % 360 + 360) % 360);
};
var isInRange = (values, min, max) => {
  return values.every((v) => v >= min && v <= max);
};
var trimCase = (input) => {
  return String(input).replace(/\s+/g, "").toLowerCase();
};
var clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};
var toHex2 = (num) => {
  const hex = Math.round(num).toString(16).toUpperCase();
  return hex.length === 1 ? "0" + hex : hex;
};
var srgbToLinear = (c) => {
  c = c / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};
var linearToSrgb = (c) => {
  c = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  return Math.round(clamp(c, 0, 1) * 255);
};
var multiplyMatrix = (matrix, vector) => {
  return matrix.map((row) => row.reduce((sum, val, i) => sum + val * vector[i], 0));
};
var xyzToLabF = (t) => {
  return t > 0.008856 ? Math.cbrt(t) : (903.3 * t + 16) / 116;
};
var labToXyzF = (t) => {
  const t3 = t * t * t;
  return t3 > 0.008856 ? t3 : (116 * t - 16) / 903.3;
};
var computeOkChannel = (rowIndex, L, a, b) => {
  const l_ = L + OKLAB_M2_INV2[0][1] * a + OKLAB_M2_INV2[0][2] * b;
  const m_ = L + OKLAB_M2_INV2[1][1] * a + OKLAB_M2_INV2[1][2] * b;
  const s_ = L + OKLAB_M2_INV2[2][1] * a + OKLAB_M2_INV2[2][2] * b;
  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;
  return OKLAB_M1_INV2[rowIndex][0] * l + OKLAB_M1_INV2[rowIndex][1] * m + OKLAB_M1_INV2[rowIndex][2] * s;
};
var findOkCusp = (a, b) => {
  let bestL = 0;
  let bestC = 0;
  const abLength = Math.sqrt(a * a + b * b);
  if (abLength === 0)
    return { L: 0, C: 0 };
  for (let i = 0;i < 3; i++) {
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
var getOkCuspFromHue = (h) => {
  const hRad = h * Math.PI / 180;
  const a = Math.cos(hRad);
  const b = Math.sin(hRad);
  return findOkCusp(a, b);
};
var okSaturationToChroma = (L, S, h) => {
  if (S === 0 || L === 0 || L >= 1)
    return 0;
  const cusp = getOkCuspFromHue(h);
  if (cusp.L === 0)
    return 0;
  const C_max = L <= cusp.L ? cusp.C * (L / cusp.L) : cusp.C * ((1 - L) / (1 - cusp.L));
  return S * C_max;
};
var okChromaToSaturation = (L, C, h) => {
  if (C === 0 || L === 0 || L >= 1)
    return 0;
  const cusp = getOkCuspFromHue(h);
  if (cusp.L === 0)
    return 0;
  const C_max = L <= cusp.L ? cusp.C * (L / cusp.L) : cusp.C * ((1 - L) / (1 - cusp.L));
  return C_max === 0 ? 0 : clamp(C / C_max, 0, 1);
};

// src/core/normalize.js
var normalize_default = {
  HEX: (input) => {
    if (!regexp_default.HEX.test(input))
      return null;
    let hex = input.slice(1).toUpperCase();
    if (hex.length === 3)
      hex = hex.split("").map((c) => c + c).join("") + "FF";
    else if (hex.length === 4)
      hex = hex.split("").map((c) => c + c).join("");
    else if (hex.length === 6)
      hex += "FF";
    return `#${hex}`;
  },
  RGB: (input) => {
    const match = input.match(regexp_default.RGB);
    if (!match)
      return null;
    let [, r, g, b, a] = match;
    r = parseInt(r, 10);
    g = parseInt(g, 10);
    b = parseInt(b, 10);
    a = a !== undefined ? parseFloat(a) : 1;
    if (!isInRange([r, g, b], 0, 255) || !isInRange([a], 0, 1))
      return null;
    return `rgb(${r} ${g} ${b} / ${a})`;
  },
  HSL: (input) => {
    const match = input.match(regexp_default.HSL);
    if (!match)
      return null;
    let [, h, s, l, a] = match;
    h = normalizeHue(h);
    s = Math.round(parseFloat(s));
    l = Math.round(parseFloat(l));
    a = a !== undefined ? parseFloat(a) : 1;
    if (!isInRange([s, l], 0, 100) || !isInRange([a], 0, 1))
      return null;
    return `hsl(${h}deg ${s}% ${l}% / ${a})`;
  },
  HSV: (input) => {
    const match = input.match(regexp_default.HSV);
    if (!match)
      return null;
    let [, h, s, v, a] = match;
    h = normalizeHue(h);
    s = Math.round(parseFloat(s));
    v = Math.round(parseFloat(v));
    a = a !== undefined ? parseFloat(a) : 1;
    if (!isInRange([s, v], 0, 100) || !isInRange([a], 0, 1))
      return null;
    return `hsv(${h}deg ${s}% ${v}% / ${a})`;
  },
  HWB: (input) => {
    const match = input.match(regexp_default.HWB);
    if (!match)
      return null;
    let [, h, w, b, a] = match;
    h = normalizeHue(h);
    w = Math.round(parseFloat(w));
    b = Math.round(parseFloat(b));
    a = a !== undefined ? parseFloat(a) : 1;
    if (!isInRange([w, b], 0, 100) || !isInRange([a], 0, 1))
      return null;
    if (w + b > 100)
      return null;
    return `hwb(${h}deg ${w}% ${b}% / ${a})`;
  },
  CMYK: (input) => {
    const match = input.match(regexp_default.CMYK);
    if (!match)
      return null;
    let [, c, m, y, k] = match;
    c = parseFloat(c);
    m = parseFloat(m);
    y = parseFloat(y);
    k = parseFloat(k);
    if (!isInRange([c, m, y, k], 0, 100))
      return null;
    return `cmyk(${c}% ${m}% ${y}% ${k}%)`;
  },
  LAB: (input) => {
    const match = input.match(REGEX.LAB);
    if (!match)
      return null;
    let [, L, a, b, alpha] = match;
    L = parseFloat(L);
    a = parseFloat(a);
    b = parseFloat(b);
    alpha = alpha !== undefined ? parseFloat(alpha) : 1;
    if (L < 0 || L > 100)
      return null;
    if (a < -128 || a > 128)
      return null;
    if (b < -128 || b > 128)
      return null;
    if (alpha < 0 || alpha > 1)
      return null;
    return `lab(${L}% ${a} ${b} / ${alpha})`;
  },
  LCH: (input) => {
    const match = input.match(REGEX.LCH);
    if (!match)
      return null;
    let [, L, C, h, alpha] = match;
    L = parseFloat(L);
    C = parseFloat(C);
    h = normalizeHue(h);
    alpha = alpha !== undefined ? parseFloat(alpha) : 1;
    if (L < 0 || L > 100)
      return null;
    if (C < 0 || C > 130)
      return null;
    if (alpha < 0 || alpha > 1)
      return null;
    return `lch(${L}% ${C} ${h}deg / ${alpha})`;
  },
  OKLAB: (input) => {
    const match = input.match(regexp_default.OKLAB);
    if (!match)
      return null;
    let [, L, a, b, alpha] = match;
    L = parseFloat(L);
    a = parseFloat(a);
    b = parseFloat(b);
    alpha = alpha !== undefined ? parseFloat(alpha) : 1;
    if (!isInRange([L], 0, 1) || !isInRange([a, b], -0.4, 0.4) || !isInRange([alpha], 0, 1))
      return null;
    return `oklab(${L} ${a} ${b} / ${alpha})`;
  },
  OKLCH: (input) => {
    const match = input.match(regexp_default.OKLCH);
    if (!match)
      return null;
    let [, L, C, h, alpha] = match;
    L = parseFloat(L);
    C = parseFloat(C);
    h = normalizeHue(h);
    alpha = alpha !== undefined ? parseFloat(alpha) : 1;
    if (!isInRange([L], 0, 1) || !isInRange([C], 0, 0.4) || !isInRange([alpha], 0, 1))
      return null;
    return `oklch(${L} ${C} ${h}deg / ${alpha})`;
  },
  OKHSL: (input) => {
    const match = input.match(regexp_default.OKHSL);
    if (!match)
      return null;
    let [, h, s, l, a] = match;
    h = normalizeHue(h);
    s = Math.round(parseFloat(s));
    l = Math.round(parseFloat(l));
    a = a !== undefined ? parseFloat(a) : 1;
    if (!isInRange([s, l], 0, 100) || !isInRange([a], 0, 1))
      return null;
    return `okhsl(${h}deg ${s}% ${l}% / ${a})`;
  },
  OKHSV: (input) => {
    const match = input.match(regexp_default.OKHSV);
    if (!match)
      return null;
    let [, h, s, v, a] = match;
    h = normalizeHue(h);
    s = Math.round(parseFloat(s));
    v = Math.round(parseFloat(v));
    a = a !== undefined ? parseFloat(a) : 1;
    if (!isInRange([s, v], 0, 100) || !isInRange([a], 0, 1))
      return null;
    return `okhsv(${h}deg ${s}% ${v}% / ${a})`;
  },
  XYZ: (input) => {
    const match = input.match(regexp_default.XYZ);
    if (!match)
      return null;
    let [, x, y, z, alpha] = match;
    x = parseFloat(x);
    y = parseFloat(y);
    z = parseFloat(z);
    alpha = alpha !== undefined ? parseFloat(alpha) : 1;
    if (!isInRange([alpha], 0, 1))
      return null;
    return `color(xyz ${x} ${y} ${z} / ${alpha})`;
  },
  P3: (input) => {
    const match = input.match(regexp_default.P3);
    if (!match)
      return null;
    let [, r, g, b, alpha] = match;
    r = parseFloat(r);
    g = parseFloat(g);
    b = parseFloat(b);
    alpha = alpha !== undefined ? parseFloat(alpha) : 1;
    if (!isInRange([alpha], 0, 1))
      return null;
    return `color(display-p3 ${r} ${g} ${b} / ${alpha})`;
  }
};

// src/core/extract.js
var extract_default = {
  HEX: (input) => {
    const match = input.match(regexp_default.EX_HEX);
    if (!match)
      return null;
    return {
      R: parseInt(match[1], 16),
      G: parseInt(match[2], 16),
      B: parseInt(match[3], 16),
      A: match[4] ? parseFloat((parseInt(match[4], 16) / 255).toFixed(2)) : 1
    };
  },
  RGB: (input) => {
    const match = input.match(regexp_default.EX_RGB);
    if (!match)
      return null;
    return {
      R: parseInt(match[1], 10),
      G: parseInt(match[2], 10),
      B: parseInt(match[3], 10),
      A: parseFloat(match[4])
    };
  },
  HSL: (input) => {
    const match = input.match(regexp_default.EX_HSL);
    if (!match)
      return null;
    return {
      H: parseInt(match[1], 10),
      S: parseInt(match[2], 10),
      L: parseInt(match[3], 10),
      A: parseFloat(match[4])
    };
  },
  HSV: (input) => {
    const match = input.match(regexp_default.EX_HSV);
    if (!match)
      return null;
    return {
      H: parseInt(match[1], 10),
      S: parseInt(match[2], 10),
      V: parseInt(match[3], 10),
      A: parseFloat(match[4])
    };
  },
  HWB: (input) => {
    const match = input.match(regexp_default.EX_HWB);
    if (!match)
      return null;
    return {
      H: parseInt(match[1], 10),
      W: parseInt(match[2], 10),
      B: parseInt(match[3], 10),
      A: parseFloat(match[4])
    };
  },
  CMYK: (input) => {
    const match = input.match(regexp_default.EX_CMYK);
    if (!match)
      return null;
    return {
      C: parseFloat(match[1]),
      M: parseFloat(match[2]),
      Y: parseFloat(match[3]),
      K: parseFloat(match[4]),
      A: 1
    };
  },
  LAB: (input) => {
    const match = input.match(regexp_default.EX_LAB);
    if (!match)
      return null;
    return {
      L: parseFloat(match[1]),
      a: parseFloat(match[2]),
      b: parseFloat(match[3]),
      A: parseFloat(match[4])
    };
  },
  LCH: (input) => {
    const match = input.match(regexp_default.EX_LCH);
    if (!match)
      return null;
    return {
      L: parseFloat(match[1]),
      C: parseFloat(match[2]),
      h: parseFloat(match[3]),
      A: parseFloat(match[4])
    };
  },
  OKLAB: (input) => {
    const match = input.match(regexp_default.EX_OKLAB);
    if (!match)
      return null;
    return {
      L: parseFloat(match[1]),
      a: parseFloat(match[2]),
      b: parseFloat(match[3]),
      A: parseFloat(match[4])
    };
  },
  OKLCH: (input) => {
    const match = input.match(regexp_default.EX_OKLCH);
    if (!match)
      return null;
    return {
      L: parseFloat(match[1]),
      C: parseFloat(match[2]),
      h: parseFloat(match[3]),
      A: parseFloat(match[4])
    };
  },
  OKHSL: (input) => {
    const match = input.match(regexp_default.EX_OKHSL);
    if (!match)
      return null;
    return {
      H: parseInt(match[1], 10),
      S: parseInt(match[2], 10),
      L: parseInt(match[3], 10),
      A: parseFloat(match[4])
    };
  },
  OKHSV: (input) => {
    const match = input.match(regexp_default.EX_OKHSV);
    if (!match)
      return null;
    return {
      H: parseInt(match[1], 10),
      S: parseInt(match[2], 10),
      V: parseInt(match[3], 10),
      A: parseFloat(match[4])
    };
  },
  XYZ: (input) => {
    const match = input.match(regexp_default.EX_XYZ);
    if (!match)
      return null;
    return {
      X: parseFloat(match[1]),
      Y: parseFloat(match[2]),
      Z: parseFloat(match[3]),
      A: parseFloat(match[4])
    };
  },
  P3: (input) => {
    const match = input.match(regexp_default.EX_P3);
    if (!match)
      return null;
    return {
      R: parseFloat(match[1]),
      G: parseFloat(match[2]),
      B: parseFloat(match[3]),
      A: parseFloat(match[4])
    };
  }
};

// src/spaces/srgb.js
var srgb_default = {
  RGB_TO_HSL: ({ R, G, B, A = 1 }) => {
    const r = R / 255, g = G / 255, b = B / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const delta = max - min;
    let H = 0, S = 0;
    const L = (max + min) / 2;
    if (delta !== 0) {
      S = L <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
      switch (max) {
        case r:
          H = (g - b) / delta % 6;
          break;
        case g:
          H = (b - r) / delta + 2;
          break;
        case b:
          H = (r - g) / delta + 4;
          break;
      }
      H = Math.round(H * 60);
      if (H < 0)
        H += 360;
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
    const x = c * (1 - Math.abs(h * 6 % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    const sector = Math.floor(h * 6);
    switch (sector % 6) {
      case 0:
        r = c;
        g = x;
        b = 0;
        break;
      case 1:
        r = x;
        g = c;
        b = 0;
        break;
      case 2:
        r = 0;
        g = c;
        b = x;
        break;
      case 3:
        r = 0;
        g = x;
        b = c;
        break;
      case 4:
        r = x;
        g = 0;
        b = c;
        break;
      case 5:
        r = c;
        g = 0;
        b = x;
        break;
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
        case r:
          H = (g - b) / delta % 6;
          break;
        case g:
          H = (b - r) / delta + 2;
          break;
        case b:
          H = (r - g) / delta + 4;
          break;
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
      case 0:
        r = c;
        g = x;
        b = 0;
        break;
      case 1:
        r = x;
        g = c;
        b = 0;
        break;
      case 2:
        r = 0;
        g = c;
        b = x;
        break;
      case 3:
        r = 0;
        g = x;
        b = c;
        break;
      case 4:
        r = x;
        g = 0;
        b = c;
        break;
      case 5:
        r = c;
        g = 0;
        b = x;
        break;
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
  HSL_TO_CMYK: (hsl) => SRGB.RGB_TO_CMYK(SRGB.HSL_TO_RGB(hsl))
};

// src/spaces/cie.js
var cie_default = {
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
    if (h < 0)
      h += 360;
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
  LCH_TO_RGB: (lch) => CIE.LAB_TO_RGB(CIE.LCH_TO_LAB(lch))
};

// src/spaces/ok.js
var ok_default = {
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
    if (h < 0)
      h += 360;
    return { L, C, h, A: parseFloat(A.toFixed(2)) };
  },
  OKLCH_TO_OKLAB: ({ L, C, h, A = 1 }) => {
    const hRad = h * Math.PI / 180;
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
  OKHSV_TO_RGB: (okhsv) => OK.OKLCH_TO_RGB(OK.OKHSV_TO_OKLCH(okhsv))
};

// src/colorlab.js
class ColorLab {
  static version = "2.0.0";
  static #COLORS = COLORS;
  static #COLORS_MAP = COLORS_MAP;
  static #HARMONIES = HARMONIES;
  static #REGEXP = regexp_default;
  static #NORMALIZE = normalize_default;
  static #EXTRACT = extract_default;
  static #detectSmart(input) {
    if (typeof input === "object" && input !== null && !Array.isArray(input)) {
      if ("R" in input && "G" in input && "B" in input)
        return "RGB";
      if ("H" in input && "S" in input && "L" in input)
        return "HSL";
      if ("H" in input && "S" in input && "V" in input)
        return "HSV";
      if ("C" in input && "M" in input && "Y" in input && "K" in input)
        return "CMYK";
      if ("L" in input && "a" in input && "b" in input)
        return "OKLAB";
      if ("L" in input && "C" in input && "h" in input)
        return "OKLCH";
      if (typeof input.toHexString === "function")
        input = input.toHexString();
      else if (typeof input.toRgbString === "function")
        input = input.toRgbString();
      else if (typeof input.toString === "function" && input.toString() !== "[object Object]")
        input = String(input);
      else
        return null;
    }
    if (typeof input !== "string")
      return null;
    const trimmed = trimCase(input);
    if (ColorLab.#COLORS_MAP.has(trimmed))
      return "KEYWORD";
    if (ColorLab.#REGEXP.HEX.test(trimmed))
      return "HEX";
    if (ColorLab.#REGEXP.RGB.test(trimmed))
      return "RGB";
    if (ColorLab.#REGEXP.HSL.test(trimmed))
      return "HSL";
    if (ColorLab.#REGEXP.HSV.test(trimmed))
      return "HSV";
    if (ColorLab.#REGEXP.CMYK.test(trimmed))
      return "CMYK";
    if (ColorLab.#REGEXP.OKLAB.test(trimmed))
      return "OKLAB";
    if (ColorLab.#REGEXP.OKLCH.test(trimmed))
      return "OKLCH";
    if (ColorLab.#REGEXP.OKHSL.test(trimmed))
      return "OKHSL";
    if (ColorLab.#REGEXP.OKHSV.test(trimmed))
      return "OKHSV";
    if (ColorLab.#REGEXP.LAB.test(trimmed))
      return "LAB";
    if (ColorLab.#REGEXP.LCH.test(trimmed))
      return "LCH";
    return null;
  }
  static #normalizeSmart(input) {
    const type = ColorLab.#detectSmart(input);
    if (!type)
      return null;
    if (typeof input === "object" && input !== null && !Array.isArray(input)) {
      if (type === "RGB")
        return `rgb(${input.R} ${input.G} ${input.B} / ${input.A ?? 1})`;
      if (type === "HSL")
        return `hsl(${input.H}deg ${input.S}% ${input.L}% / ${input.A ?? 1})`;
      if (type === "HSV")
        return `hsv(${input.H}deg ${input.S}% ${input.V}% / ${input.A ?? 1})`;
      if (type === "CMYK")
        return `cmyk(${input.C}% ${input.M}% ${input.Y}% ${input.K}%)`;
      if (type === "OKLAB")
        return `oklab(${input.L} ${input.a} ${input.b} / ${input.A ?? 1})`;
      if (type === "OKLCH")
        return `oklch(${input.L} ${input.C} ${input.h}deg / ${input.A ?? 1})`;
    }
    if (type === "KEYWORD")
      return ColorLab.#COLORS_MAP.get(trimCase(input));
    return ColorLab.#NORMALIZE[type](input);
  }
  static #getChannels(input) {
    const type = ColorLab.#detectSmart(input);
    if (!type)
      return null;
    if (typeof input === "object" && input !== null && !Array.isArray(input)) {
      let channels = null;
      if (type === "RGB")
        channels = { R: Number(input.R), G: Number(input.G), B: Number(input.B), A: Number(input.A ?? 1) };
      if (type === "HSL")
        channels = { H: Number(input.H), S: Number(input.S), L: Number(input.L), A: Number(input.A ?? 1) };
      if (type === "HSV")
        channels = { H: Number(input.H), S: Number(input.S), V: Number(input.V), A: Number(input.A ?? 1) };
      if (type === "CMYK")
        channels = { C: Number(input.C), M: Number(input.M), Y: Number(input.Y), K: Number(input.K), A: Number(input.A ?? 1) };
      if (type === "OKLAB")
        channels = { L: Number(input.L), a: Number(input.a), b: Number(input.b), A: Number(input.A ?? 1) };
      if (type === "OKLCH")
        channels = { L: Number(input.L), C: Number(input.C), h: Number(input.h), A: Number(input.A ?? 1) };
      return channels;
    }
    if (type === "KEYWORD") {
      const hex = ColorLab.#COLORS_MAP.get(trimCase(input));
      return ColorLab.#EXTRACT.HEX(hex);
    }
    const normalized = ColorLab.#NORMALIZE[type](input);
    if (!normalized)
      return null;
    return ColorLab.#EXTRACT[type](normalized);
  }
  static #getRgbChannels(input) {
    const channels = ColorLab.#getChannels(input);
    if (!channels)
      return null;
    if (channels.R !== undefined)
      return channels;
    if (channels.H !== undefined && channels.L !== undefined)
      return srgb_default.HSL_TO_RGB(channels);
    if (channels.H !== undefined && channels.V !== undefined)
      return srgb_default.HSV_TO_RGB(channels);
    if (channels.C !== undefined && channels.M !== undefined)
      return srgb_default.CMYK_TO_RGB(channels);
    if (channels.L !== undefined && channels.a !== undefined)
      return cie_default.LAB_TO_RGB(channels);
    if (channels.L !== undefined && channels.C !== undefined && channels.h !== undefined)
      return ok_default.OKLCH_TO_RGB(channels);
    return null;
  }
  static detect(input) {
    if (Array.isArray(input))
      return input.map((item) => ColorLab.#detectSmart(item));
    return ColorLab.#detectSmart(input);
  }
  static normalize(input) {
    if (Array.isArray(input))
      return input.map((item) => ColorLab.#normalizeSmart(item));
    return ColorLab.#normalizeSmart(input);
  }
  static isValid(input) {
    if (Array.isArray(input))
      return input.every((item) => ColorLab.#detectSmart(item) !== null);
    return ColorLab.#detectSmart(input) !== null;
  }
  static analyze(input) {
    if (Array.isArray(input))
      return input.map((item) => ColorLab.analyze(item));
    return {
      keyword: ColorLab.toKeyword(input),
      hex: ColorLab.toHex(input),
      rgb: ColorLab.toRgb(input),
      hsl: ColorLab.toHsl(input),
      hsv: ColorLab.toHsv(input),
      cmyk: ColorLab.toCmyk(input),
      oklab: ColorLab.toOklab(input),
      oklch: ColorLab.toOklch(input)
    };
  }
  static getChannels(input) {
    if (Array.isArray(input))
      return input.map((item) => ColorLab.getChannels(item));
    return ColorLab.#getChannels(input);
  }
  static getRgbChannels(input) {
    if (Array.isArray(input))
      return input.map((item) => ColorLab.getRgbChannels(item));
    return ColorLab.#getRgbChannels(input);
  }
  static getHslChannels(input) {
    if (Array.isArray(input))
      return input.map((item) => ColorLab.getHslChannels(item));
    const ch = ColorLab.#getChannels(input);
    if (!ch)
      return null;
    if (ch.H !== undefined && ch.L !== undefined)
      return ch;
    const rgb = ColorLab.#getRgbChannels(input);
    return rgb ? srgb_default.RGB_TO_HSL(rgb) : null;
  }
  static getHsvChannels(input) {
    if (Array.isArray(input))
      return input.map((item) => ColorLab.getHsvChannels(item));
    const ch = ColorLab.#getChannels(input);
    if (!ch)
      return null;
    if (ch.H !== undefined && ch.V !== undefined)
      return ch;
    const rgb = ColorLab.#getRgbChannels(input);
    return rgb ? srgb_default.RGB_TO_HSV(rgb) : null;
  }
  static getCmykChannels(input) {
    if (Array.isArray(input))
      return input.map((item) => ColorLab.getCmykChannels(item));
    const ch = ColorLab.#getChannels(input);
    if (!ch)
      return null;
    if (ch.C !== undefined && ch.M !== undefined)
      return ch;
    const rgb = ColorLab.#getRgbChannels(input);
    return rgb ? srgb_default.RGB_TO_CMYK(rgb) : null;
  }
  static getHexChannels(input) {
    if (Array.isArray(input))
      return input.map((item) => ColorLab.getHexChannels(item));
    const rgb = ColorLab.#getRgbChannels(input);
    if (!rgb)
      return null;
    return {
      R: toHex2(rgb.R),
      G: toHex2(rgb.G),
      B: toHex2(rgb.B),
      A: rgb.A === 1 ? "FF" : toHex2(rgb.A * 255)
    };
  }
  static getAllChannels(input) {
    if (Array.isArray(input))
      return input.map((item) => ColorLab.getAllChannels(item));
    const rgb = ColorLab.#getRgbChannels(input);
    if (!rgb)
      return null;
    const hsl = srgb_default.RGB_TO_HSL(rgb);
    const hsv = srgb_default.RGB_TO_HSV(rgb);
    const cmyk = srgb_default.RGB_TO_CMYK(rgb);
    const oklch = ok_default.RGB_TO_OKLCH(rgb);
    return {
      R: rgb.R,
      G: rgb.G,
      B: rgb.B,
      A: rgb.A,
      H: hsl.H,
      S: hsl.S,
      L: hsl.L,
      V: hsv.V,
      C: cmyk.C,
      M: cmyk.M,
      Y: cmyk.Y,
      K: cmyk.K,
      okL: oklch.L,
      okC: oklch.C,
      okH: oklch.h
    };
  }
  static getRed(input) {
    const ch = ColorLab.getRgbChannels(input);
    return ch ? ch.R : null;
  }
  static getGreen(input) {
    const ch = ColorLab.getRgbChannels(input);
    return ch ? ch.G : null;
  }
  static getBlue(input) {
    const ch = ColorLab.getRgbChannels(input);
    return ch ? ch.B : null;
  }
  static getAlpha(input) {
    const ch = ColorLab.getRgbChannels(input);
    return ch ? ch.A : null;
  }
  static getHue(input) {
    const ch = ColorLab.getHslChannels(input);
    return ch ? ch.H : null;
  }
  static getSaturation(input) {
    const ch = ColorLab.getHslChannels(input);
    return ch ? ch.S : null;
  }
  static getLightness(input) {
    const ch = ColorLab.getHslChannels(input);
    return ch ? ch.L : null;
  }
  static toHex(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toHex(i));
    const rgb = ColorLab.#getRgbChannels(input);
    if (!rgb)
      return null;
    const r = toHex2(rgb.R), g = toHex2(rgb.G), b = toHex2(rgb.B);
    return rgb.A === 1 ? `#${r}${g}${b}` : `#${r}${g}${b}${toHex2(rgb.A * 255)}`;
  }
  static toRgb(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toRgb(i));
    const rgb = ColorLab.#getRgbChannels(input);
    if (!rgb)
      return null;
    return rgb.A === 1 ? `rgb(${rgb.R} ${rgb.G} ${rgb.B})` : `rgb(${rgb.R} ${rgb.G} ${rgb.B} / ${rgb.A})`;
  }
  static toHsl(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toHsl(i));
    const hsl = ColorLab.getHslChannels(input);
    if (!hsl)
      return null;
    return hsl.A === 1 ? `hsl(${hsl.H}deg ${hsl.S}% ${hsl.L}%)` : `hsl(${hsl.H}deg ${hsl.S}% ${hsl.L}% / ${hsl.A})`;
  }
  static toHsv(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toHsv(i));
    const hsv = ColorLab.getHsvChannels(input);
    if (!hsv)
      return null;
    return hsv.A === 1 ? `hsv(${hsv.H}deg ${hsv.S}% ${hsv.V}%)` : `hsv(${hsv.H}deg ${hsv.S}% ${hsv.V}% / ${hsv.A})`;
  }
  static toCmyk(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toCmyk(i));
    const cmyk = ColorLab.getCmykChannels(input);
    if (!cmyk)
      return null;
    return `cmyk(${cmyk.C}% ${cmyk.M}% ${cmyk.Y}% ${cmyk.K}%)`;
  }
  static toKeyword(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toKeyword(i));
    const rgb = ColorLab.#getRgbChannels(input);
    if (!rgb)
      return null;
    let closest = null, minDist = Infinity;
    for (const [name, hex] of Object.entries(ColorLab.#COLORS)) {
      const target = ColorLab.#EXTRACT.HEX(hex);
      const dist = (rgb.R - target.R) ** 2 + (rgb.G - target.G) ** 2 + (rgb.B - target.B) ** 2;
      if (dist < minDist) {
        minDist = dist;
        closest = name;
      }
    }
    return closest.replace(/([A-Z])/g, " $1").trim();
  }
  static toOklab(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toOklab(i));
    const rgb = ColorLab.#getRgbChannels(input);
    if (!rgb)
      return null;
    const ok = ok_default.RGB_TO_OKLAB(rgb);
    return `oklab(${ok.L} ${ok.a} ${ok.b} / ${ok.A})`;
  }
  static toOklch(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toOklch(i));
    const rgb = ColorLab.#getRgbChannels(input);
    if (!rgb)
      return null;
    const ok = ok_default.RGB_TO_OKLCH(rgb);
    return `oklch(${ok.L} ${ok.C} ${ok.h}deg / ${ok.A})`;
  }
  static toOkhsl(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toOkhsl(i));
    const rgb = ColorLab.#getRgbChannels(input);
    if (!rgb)
      return null;
    const ok = ok_default.RGB_TO_OKHSL(rgb);
    return `okhsl(${ok.H}deg ${ok.S}% ${ok.L}% / ${ok.A})`;
  }
  static toOkhsv(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toOkhsv(i));
    const rgb = ColorLab.#getRgbChannels(input);
    if (!rgb)
      return null;
    const ok = ok_default.RGB_TO_OKHSV(rgb);
    return `okhsv(${ok.H}deg ${ok.S}% ${ok.V}% / ${ok.A})`;
  }
  static toLab(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toLab(i));
    const rgb = ColorLab.#getRgbChannels(input);
    if (!rgb)
      return null;
    const lab = cie_default.RGB_TO_LAB(rgb);
    return `lab(${lab.L}% ${lab.a} ${lab.b} / ${lab.A})`;
  }
  static toLch(input) {
    if (Array.isArray(input))
      return input.map((i) => ColorLab.toLch(i));
    const rgb = ColorLab.#getRgbChannels(input);
    if (!rgb)
      return null;
    const lch = cie_default.RGB_TO_LCH(rgb);
    return `lch(${lch.L}% ${lch.C} ${lch.h}deg / ${lch.A})`;
  }
}
export {
  ColorLab as default
};
