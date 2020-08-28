set -e

green="\e[32m"
reset="\033[m"

printf "$green"
echo "******** Running StyleLint ********"
printf "$reset"

npm run lintStyles;

printf "$green"
echo "******** Running ES Lint ********"
printf "$reset"

npm run lint;

printf "$green"
echo "******** Running Unit Tests ********"
printf "$reset"

npm run test;
