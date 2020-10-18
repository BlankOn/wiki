#!/bin/sh
set -x
rsync -aP --exclude-from=exclude --delete-during ./ ./docusaurus/Wiki
rsync -aP --delete-during ./Assets/ ./docusaurus/static/Assets
cd docusaurus
yarn install
yarn deploy
cd ..
