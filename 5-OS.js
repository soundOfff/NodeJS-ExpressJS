const os = require('os');

// info about current user

const userData = os.userInfo()

// method returns the system uptime in seconds

const time = os.uptime()


// current os

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}


//console.log(currentOs)