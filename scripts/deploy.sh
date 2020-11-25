#!/bin/sh
set -ex

rsync -aP --exclude-from=exclude --delete-during ./ ./docusaurus/Wiki
rsync -aP --delete-during ./Assets/ ./docusaurus/static/Assets
rsync -aP --delete-during ./raw-attachment ./docusaurus/static/

pushd docusaurus
yarn install
yarn deploy
popd
