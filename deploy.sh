#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'chore: deploy to github pages'

git push -f https://github.com/vahidfa/siniorsho-vue.git master:gh-pages

cd -