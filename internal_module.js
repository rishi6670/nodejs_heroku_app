const os=require('os')

//var user=os.userInfo();
//var user=os.platform();
var user=os.networkInterfaces();

console.log(user);
