const brainstormDinner = require('./library.js');


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}


// async/await version:
async function announceDinner() {
  // Write your code below:
 let meal = await brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}

announceDinner()


// another example

const shopForBeans = require('./library.js');

async function getBeans() {
  let value = await shopForBeans();
  console.log(`1. Heading to the store to buy beans...`);
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();