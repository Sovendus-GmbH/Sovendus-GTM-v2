import type { ReleaseConfig } from "sovendus-release-tool";

const releaseConfig: ReleaseConfig = {
  packages: [
    {
      directory: "./",
      updateDeps: true,
      lint: true,
      build: true,
      test: true,
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
    {
      directory: "./src/script",
      updateDeps: true,
      lint: true,
      build: true,
      test: true,
      release: {
        version: "2.0.0",
        tagPrefix: "script_",
      },
    },
  ],
};
export default releaseConfig;
