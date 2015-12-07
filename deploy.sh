# environment variables cannot be passed to a npm script, so use this shell script
git config --global user.email "Travis"
git config --global user.name "noreply@travis-ci.org"
node_modules/.bin/gh-pages --repo https://x-oauth-basic:$GH_TOKEN@github.com/a2-team/musik-kunstschule -d build
