#!/bin/sh
set -x
rsync -avP --exclude-from=exclude --delete-after ./ ./docusaurus/Wiki
rsync -avP --delete-after ./Assets/ ./docusaurus/static/Assets
cd docusaurus
yarn install
yarn deploy
cd ..
