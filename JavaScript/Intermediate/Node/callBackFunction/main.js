const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
function handleSuccess(resolved) {
  console.log(resolved);
}

function handleFailure(failed) {
  console.log(failed);
}

checkInventory(order).then(handleSuccess, handleFailure);


