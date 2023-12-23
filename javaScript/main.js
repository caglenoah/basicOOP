const fs = require("fs");

class Item {
  static pay_rate = 0.8; // The pay rate after a 20% discount
  static all = [];

  constructor(name, price, quantity = 0) {
    // Run validations on the received arguments
    if (price < 0) {
      throw new Error(`Price ${price} is not greater than or equal to zero!`);
    }
    if (quantity < 0) {
      throw new Error(`Quantity ${quantity} is not greater or equal to zero!`);
    }

    // Assign to this object
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    // Actions to execute
    Item.all.push(this);
  }

  calculate_total_price() {
    return this.price * this.quantity;
  }

  apply_discount() {
    this.price = this.price * Item.pay_rate;
  }

  static instantiateFromCSV() {
    const fileContent = fs.readFileSync("items.csv", "utf-8");
    const items = fileContent
      .trim()
      .split("\n")
      .map((line) => {
        const [name, price, quantity] = line.split(",");
        return { name, price: parseFloat(price), quantity: parseInt(quantity) };
      });

    for (const item of items) {
      new Item(item.name, item.price, item.quantity);
    }
  }

  toString() {
    return `Item('${this.name}', ${this.price}, ${this.quantity})`;
  }
}

Item.instantiateFromCSV();
console.log(Item.all.map((item) => item.toString()));
