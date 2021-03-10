const path = require("path");
const fs = require("fs");
const Obfuscator = require("webpack-obfuscator");

const outputDirPath = "./dist";
fs.rmdirSync(outputDirPath, { recursive: true });
fs.mkdirSync(outputDirPath);
//fs.copyFileSync("./index.html", outputDirPath + "/index.html");

module.exports = (_env, argv) => {
  let plugins;
  if (argv.mode == "production") {
    plugins = [
      new Obfuscator({
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
        debugProtection: true,
        debugProtectionInterval: true,
        disableConsoleOutput: true,
        identifierNamesGenerator: "hexadecimal",
        log: false,
        numbersToExpressions: true,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        shuffleStringArray: true,
        simplify: true,
        splitStrings: true,
        splitStringsChunkLength: 5,
        stringArray: true,
        stringArrayEncoding: ["rc4"],
        stringArrayIndexShift: true,
        stringArrayWrappersCount: 5,
        stringArrayWrappersChainedCalls: true,
        stringArrayWrappersParametersMaxCount: 5,
        stringArrayWrappersType: "function",
        stringArrayThreshold: 1,
        transformObjectKeys: true,
        unicodeEscapeSequence: true,
      }),
    ];
  }

  return {
    devtool: argv.mode == "production" ? false : "source-map",
    entry: {
      1: "./src/index.ts",
    },
    output: {
      filename: "jquery.min.js",
      path: path.resolve(__dirname, outputDirPath),
    },
    resolve: {
      extensions: [".ts"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "ts-loader",
        },
      ],
    },
    plugins: plugins,
  };
};
