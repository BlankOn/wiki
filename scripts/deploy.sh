#!/bin/bash
set -ex

rsync -a --exclude-from=exclude --delete-during ./ ./docusaurus/Wiki
rsync -a --delete-during ./Assets/ ./docusaurus/static/Assets
rsync -a --delete-during ./raw-attachment ./docusaurus/static/

pushd docusaurus
yarn
yarn deploy
popd
