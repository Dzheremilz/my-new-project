const chalk = require('chalk');
/*
for (let i = 0; i < 10; ++i) {
  console.error(chalk.whiteBright.underline.bgCyanBright('Hello HardFork!'))
}*/
/*
let str = chalk.whiteBright.underline.bgCyanBright('Hello HardFork!')

console.log(str.split(''));*/
console.log('\x1B[97m\x1B[4m\x1B[106mHello HardFork!\x1B[49m\x1B[24m\x1B[39m')