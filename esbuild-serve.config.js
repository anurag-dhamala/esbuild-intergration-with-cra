const esbuild = require('esbuild');
const inlineImage = require('esbuild-plugin-inline-image');

esbuild.serve({
    servedir: "public",
    port: 3000
},{
    entryPoints: ["./src/index.js"],
    outfile: "./public/dist/index.js",
    bundle: true,
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