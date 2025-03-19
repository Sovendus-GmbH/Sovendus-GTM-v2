import type { BuildConfig } from "sovendus-builder";

const buildConfig: BuildConfig = {
  foldersToClean: ["./dist"],
  filesToCompile: [
    {
      input: "src/scripts/index.ts",
      output: "dist_scripts/index",
      options: {
        type: "vanilla",
        buildOptions: {
          minify: true,
        },
        packageConfig: {
          isPackage: true,
          dtsEntryRoot: "src/scripts",
          dtsInclude: ["src/scripts/**/*"],
        },
      },
    },
    {
      input: "src/tag/script.ts",
      output: "./dist_tag/tag.js",
      options: {
        buildOptions: {
          target: "esnext",
          sourcemap: false,
        },
        otherOptions: {
          esbuild: {
            loader: "ts",
            target: "esnext",
          },
        },
        outputOptions: {
          exports: "none",
          format: "esm",
        },
        type: "vanilla",
      },
    },
  ],
};

export default buildConfig;
