#!/bin/bash
set -x
cd /app
/usr/local/bin/yarn --frozen-lock
/usr/local/bin/yarn start
