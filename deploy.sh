# environment variables cannot be passed to a npm script, so use this shell script
node_modules/.bin/gh-pages --repo https://$GH_TOKEN@github.com/a2-team/musik-kunstschule -d build
