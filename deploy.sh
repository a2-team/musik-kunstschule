# environment variables cannot be passed to a npm script, so use this shell script
gh-pages --repo https://$GH_TOKEN@github.com/a2-team/musik-kunstschule.git -d build
