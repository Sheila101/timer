const args = process.argv.slice(2);

//Make sure the values are numbers
const valuesInSecs = args.map((str) => {
  return Number(str) * 100;
});

const beep = function (secondsInputed) {
  for (const second of secondsInputed) {
    if(second > 0){
        setTimeout(() => {
          process.stdout.write('\x07');
          //console.log('\x07');
        }, second);
    }
  }
};

//console.log(valuesInSecs);
beep(valuesInSecs); 

