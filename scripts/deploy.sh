#!/bin/sh
set -x
rsync -a --exclude-from=exclude --delete-during ./ ./docusaurus/Wiki
rsync -a --delete-during ./Assets/ ./docusaurus/static/Assets
cd docusaurus
yarn install
yarn deploy
cd ..
