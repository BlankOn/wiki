#!/bin/sh
set -x
rsync -avP --exclude-from=exclude ./ ./docusaurus/Wiki
rsync -avP ./Assets/ ./docusaurus/static/Assets
cd docusaurus
yarn install
yarn deploy
cd ..
