//module in node.js
function add(a, b){
    return a + b;
}
const subs = (a,b) => {
    return a - b;
}
const div = (a,b) => {
    return a / b;
}
module.exports = {add, subs, div};