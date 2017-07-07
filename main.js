// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it

// 1: Show me how to calculate the average price of all items.
question1 = () => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].price;
  }
  console.log("The average price is " + (sum/data.length).toFixed(2));
};

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
question2 = () => {
  let newArr = [];
  for (let i = 0; i < data.length; i++) {
    const { price, title } = data[i];
    if (price >= 14 && price <= 18) {
      newArr.push(title);
    }
  }
  console.log(newArr);
}

// 3: Which item has a "GBP" currency code? Display its name and price.
question3 = () => {
  for (let i = 0; i < data.length; i++) {
    const { currency_code, title, price} = data[i];
    if (currency_code === "GBP") {
      console.log(`${title} costs ${price} pounds.`);
    }
  }
}

// 4: Display a list of all items who are made of wood.
// function question4 () {
question4 = () => {
  for (let i = 0; i < data.length; i++) {
    const { materials, title } = data[i];
    if (materials.indexOf('wood') > -1) {
      console.log(`${title} is made of wood.`);
    }
  }
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
question5 = () => {
  for (let i = 0; i < data.length; i++) {
    const materials = data[i].materials;
    const title = data[i].title;

    let formattedMaterials = [];
    if (materials.length >= 8) {
      const formattedTitle = `${title} has ${materials.length} materials:`;
      formattedMaterials.push(formattedTitle);
      for (let v = 0; v < materials.length; v++) {
        const material = materials[v];
        formattedMaterials.push(material);
      }
    }
    if (formattedMaterials.length > 0) {
      for (let x = 0; x < formattedMaterials.length; x++) {
        console.log(`-${formattedMaterials[x]}`);
      }
    }
  }
}

// 6: How many items were made by their sellers?
// Answer:
question6 = () => {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      count += 1
    }
  }
  console.log(`${count} items were made by their sellers.`)
}
