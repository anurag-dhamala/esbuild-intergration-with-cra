const esbuild = require('esbuild');
const inlineImage = require('esbuild-plugin-inline-image');

esbuild.build({
    entryPoints: ["./src/index.js"],
    outfile: "./public/dist/index.js",
    bundle: true,
    minify: true,
    sourcemap: true,
    loader: {
        ".js": "jsx",
    },
    plugins: [
        inlineImage()
    ]
}).catch((_)=>{
    process.exit(1)
});