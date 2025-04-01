import type { ReleaseConfig } from "sovendus-release-tool";

const releaseConfig: ReleaseConfig = {
  packages: [
    {
      directory: "./src/script",
      updateDeps: true,
      lint: true,
      build: true,
      test: false,
      release: {
        version: "2.0.0",
        tagPrefix: "script_",
      },
    },
    {
      directory: "./",
      updateDeps: true,
      lint: true,
      build: true,
      test: false,
      release: {
        version: "2.0.0",
        tagPrefix: "tag_",
        versionBumper: [
          {
            filePath: "src/tag/constants.ts",
            varName: "version",
          },
        ],
      },
    },
  ],
};
export default releaseConfig;
