const stock = {
  macbook: 2,
  iphone: 4,
};

const processPayment = (itemName) => {
  console.log(`Payment is being processed for item ${itemName}`);
  stock[itemName.toLowerCase()] -= 1;
};

const processError = (itemName) => {
  console.log(`No more ${itemName} in stock`);
  console.log("Payment is not being processed");
};

const processOrder = (itemName, callbackPayment, callbackError) => {
  console.log(`Verifying the stock of ${itemName}`);
  const item = itemName.toLowerCase();
  if (stock[item] && stock[item] > 0) {
    callbackPayment(item);
  } else {
    callbackError(itemName);
  }
};

const userInput = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone)"
).toLowerCase();

processOrder(userInput, processPayment, processError);
