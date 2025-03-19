# Sovendus Tag Dev Instructions

## Development / Release Flow

## Working on the src/scripts

Best is to just keep using the standard implementation of the sovendus-integration-scripts and apply your change to sovendus-integration-scripts

The deploy flow of the src/scripts directory is as follows:

1. update the code in src/scripts or bump the sovendus-integration-scripts version in package.json with:

    ```bash
    yarn add pub
    ```

2. Release a new version with:

    ```bash
    yarn pub
    ```

3. Bump the version in the version in the sovendus-plugins-core-hosting repo and deploy a new version as documented in the repo

## Working on the src/tag

1. Upload the template.tpl in any GTM account in the tag editor
2. Edit the plugin in the GTM editor
3. Make code changes only in src/tag, before you start execute:

    ```bash
    yarn install
    ```

4. Build the code with:

    ```bash
    yarn build
    ```

5. Copy the content of dist_tag/tag.js and paste it into the script section in the GTM tag editor.
6. Export the template from GTM and replace the template.tpl with the just downloaded one
7. Commit your changes
8. Copy the hash of the commit you want to publish and add a new release in the metadata.yaml
9. Commit your changes, after up to a day (or longer) the new version will be accessible in the GTM gallery
