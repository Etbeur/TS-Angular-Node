const config = {
    entry: {
        index:"./script/index.ts",
        deuxieme: "./script/second-module.ts",
        dom: "./script/dom.ts",
        ajax:'./script/ajax.ts'
    },
    output: {
        filename: "dist/[name].bundle.js",
        library: "main"
    },
    module: {
        rules: [
            {
                test: /.ts/,
                loader: "ts-loader",
                exclude: "/node-modules/"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}

module.exports = config;