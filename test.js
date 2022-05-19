const {readFileSync, writeFileSync} = require ('fs')

const first = readFileSync('./content/first.txt', 'utf8')

writeFileSync('./content/real.txt',`new file: ${first}`, {flag:'a'}, 'utf8')