#!/bin/bash
set -ex

rsync -a --exclude-from=exclude --delete ./ ./docusaurus/wiki
rsync -a --delete ./Assets/ ./docusaurus/static/Assets
rsync -a --delete ./raw-attachment ./docusaurus/static/

pushd docusaurus
yarn --frozen-lock
yarn build
popd
