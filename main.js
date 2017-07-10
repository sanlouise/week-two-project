// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it

// 1: Show me how to calculate the average price of all items.

question1 = () => {
  const ans = data.reduce(function(result, elem) {
    result += elem.price
    return result;
  }, 0)
  console.log("The average price is " + (ans/data.length).toFixed(2));
};

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
question2 = () => {
  return data.filter((item) => {
    if (item["price"] >= 14 && item["price"] <= 18) {
      console.log(item.title)
    }
  });
}

// 3: Which item has a "GBP" currency code? Display its name and price.
question3 = () => {
  return data.find((item) => {
    if (item.currency_code === "GBP") {
      console.log(`${item.title} costs ${item.price} pounds.`)
    }
  })
}

// 4: Display a list of all items who are made of wood.
question4 = () => {
  return data.filter((item) => {
    if (item.materials.indexOf('wood') > -1) {
      console.log(`${item.title} is made of wood.`);
    }
  })
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.

question5 = () => {
  return data.filter((item) => {
    const { materials, title } = item;
    if (materials.length >= 8) {
      console.log(`${title} has ${materials.length} materials:`);
      materials.map((material) => {
        console.log(`-${material}`);
      })
    }
  })
}

// 6: How many items were made by their sellers?
// Answer:
question6 = () => {
  const count = data.filter((item) => {
    if (item.who_made === "i_did") {
      return item;
    }
  })
  console.log(`${count.length} items were made by their sellers.`)
}
