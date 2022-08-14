const os = require('os');
// info about current user
const user=os.userInfo();
console.log(user);
// methods return the uptime in seconds
console.log(`this is uptime in my computer is ${os.uptime()}`);
const computer={
    name:os.type(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
    realese:os.release(),
}
console.log(computer);
