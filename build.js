/* ------------------------------------------------
    build.js
------------------------------------------------ */

console.log("Start ColorLab...\n");


console.log("📦 Development...");
const devResult = await Bun.build({
    entrypoints: ["./src/colorlab.js"],
    outdir: "./dist",
    format: "esm",
    minify: false,
    naming: "colorlab.js",
});

if (!devResult.success) {
    console.error("❌ Development:", devResult.logs);
    process.exit(1);
}
console.log("✅ Development: dist/colorlab.js\n");


console.log("📦 Production (Minified)...");
const prodResult = await Bun.build({
    entrypoints: ["./src/colorlab.js"],
    outdir: "./dist",
    format: "esm",
    minify: true,
    naming: "colorlab.min.js",
});

if (!prodResult.success) {
    console.error("❌ Production:", prodResult.logs);
    process.exit(1);
}
console.log("✅ Production: dist/colorlab.min.js\n");

console.log("The End");