const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  
  function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
    } else {
      reject('That item is sold out.');
    }
  }
  
  function orderSunglasses() {
    return new Promise(myExecutor);
  }
  
  const orderPromise = orderSunglasses()
  
  console.log(orderPromise);

  // Type node app.js in the terminal and hit enter (or return). 
  // You’ll be able to see the output of the program in the terminal.