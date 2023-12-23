class Item {
  static pay_rate = 0.8; // The pay rate after 0% discount
  static all = [];

  constructor(name, price, quantity = 0) {
    // Run validations to the recieved arguments
    if (price < 0) {
      throw new Error("Price ${price} is not greater than or equal to zero!");
    }
    if (quantity < 0) {
      throw new Error(
        "Quantity ${quantity} is not greater than or equal to zero!"
      );
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

  toString() {
    return `Item('${this.name}', ${this.price}, ${this.quantity})`;
  }
}

const item1 = new Item("Phone", 100, 1);
const item2 = new Item("Laptop", 1000, 3);
const item3 = new Item("Cable", 10, 5);
const item4 = new Item("Mouse", 50, 5);
const item5 = new Item("Keyboard", 75, 5);

console.log(Item.all.map((item) => item.toString()));
