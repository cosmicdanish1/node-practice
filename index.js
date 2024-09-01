const os  = require('os')

const User = os.userInfo();
console.log(User);



console.log(`the System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name : os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);
