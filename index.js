import greet from './greet.js'
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';
// console.log(greet('Ntombi'));
// const styledMessage = chalk.bgCyanBright.redBright(greet('Ntombi'));
// console.log(styledMessage)

console.log(chalk.bgCyanBright.redBright(cowsay.say ({
    text: "hello, world!"
})));


figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });