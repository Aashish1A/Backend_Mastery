const os = require('os'); // Import the built-in 'os' module to interact with the operating system

// Display the architecture of the CPU (e.g., 'x64', 'arm')
console.log('OS Architecture:', os.arch());

// Display the platform of the operating system (e.g., 'win32', 'linux', 'darwin')
console.log('Platform:', os.platform());

// Display the operating system type (e.g., 'Windows_NT', 'Linux')
console.log('OS Type:', os.type());

// Display the version of the operating system
console.log('OS Version:', os.version());

// Display the hostname of the system
console.log('Hostname:', os.hostname());

// Display the total memory of the system in GB (converted from bytes)
console.log('Total Memory:', os.totalmem() / (1024 * 1024 * 1024), 'GB');

// Display the free memory of the system in GB (converted from bytes)
console.log('Free Memory:', os.freemem() / (1024 * 1024 * 1024), 'GB');

// Display the system uptime in seconds (time since last restart)
console.log('Uptime:', os.uptime(), 'seconds');

// Display the home directory of the current user
console.log('Home Directory:', os.homedir());

// Display detailed information about each logical CPU core
console.log('CPU Info:', os.cpus());

// Display details of all network interfaces (e.g., IP addresses and MAC addresses)
console.log('Network Interfaces:', os.networkInterfaces());

