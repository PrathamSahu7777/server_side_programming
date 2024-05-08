function updateClock() {
const now = new Date();
console.log(`${(now.getHours()).toFixed(0)}:${now.getMin
utes()}:${now.getSeconds()}`);
}
setInterval(updateClock, 1000);
//output:17:10:11
//17:10:12
//17:10:13
//17:10:14
//17:10:15
//17:10:17
