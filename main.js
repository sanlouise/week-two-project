fetch(`https://openapi.etsy.com/v2/listings/active?api_key=${API_KEY}`)
  .then((res) => res.json())
  .then((res) => {
    const { results } = res;

    // question 1
    const question1 = () => {
      const totalPrice = results.reduce((prices, item) => {
        prices += +(item.price, 10);
        return prices;
      }, 0);
      const avgPrice = (totalPrice/results.length).toFixed(2);
      console.log(`The average price is ${avgPrice}`);
    };
    // question 2
    const question2 = () => {
      return results.forEach((element) => {
        if (element.price >= 14 && element.price <= 18) {
          console.log(element.title)
        }
      });
    }
    // question 3
    const question3 = () => {
      return results.forEach((item) => {
        if (item.currency_code === "GBP") {
          console.log(`${item.title} costs ${item.price} pounds.`)
        }
      })
    }

    // question 4
    const question4 = () => {
      return results.forEach((item) => {
        if (item.materials.indexOf('wood') > -1) {
          console.log(`${item.title} is made of wood.`);
        }
      })
    }

    // question 5
    const question5 = () => {
      return results.forEach((item) => {
        const { materials, title } = item;
        if (materials.length >= 8) {
          console.log(`${title} has ${materials.length} materials:`);
          materials.forEach((material) => {
            console.log(`-${material}`);
          })
        }
      })
    }

    // question 6
    const question6 = () => {
      let result = 0;
      results.forEach((item) => {
        if (item.who_made === "i_did") {
          result++;
        }
      })
      console.log(`${result} items were made by their sellers.`)
    }

    runAnswer(1, question1);
    runAnswer(2, question2);
    runAnswer(3, question3);
    runAnswer(4, question4);
    runAnswer(5, question5);
    runAnswer(6, question6);
  });
