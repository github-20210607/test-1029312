const path = require("path");
const fs = require("fs-extra");
const Obfuscator = require("webpack-obfuscator");

const outputDirPath = "./dist";

fs.removeSync(outputDirPath);
fs.ensureDirSync(outputDirPath + "/resources/images/icons");

fs.copyFileSync("./src/manifest.json", outputDirPath + "/manifest.json");
fs.copyFileSync(
  "./src/resources/images/icons/16x16.png",
  outputDirPath + "/resources/images/icons/16x16.png"
);
fs.copyFileSync(
  "./src/resources/images/icons/48x48.png",
  outputDirPath + "/resources/images/icons/48x48.png"
);
fs.copyFileSync(
  "./src/resources/images/icons/128x128.png",
  outputDirPath + "/resources/images/icons/128x128.png"
);

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
      "backgrounds/background": "./src/backgrounds/background.ts",
      "content-scripts/1": "./src/content-scripts/1.ts",
      "inject-scripts/1": "./src/inject-scripts/1.ts",
    },
    output: {
      filename: "[name].js",
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
