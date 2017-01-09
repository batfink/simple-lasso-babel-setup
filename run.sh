#!/bin/bash

mkdir -p build

cp src/index.html build/index.html

npm run build && npm run serve
