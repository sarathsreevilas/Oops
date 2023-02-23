class Bike {
  //Constructor Method
  constructor(model_name, colour, price) {
    this.model_name = model_name;
    this.colour = colour;
    this.price = price;
  }

  //Prototype Method

  bikeDetails() {
    console.log("Bike: " + " is " + this.model_name);
    console.log("coloue: " + " is " + this.colour);
    console.log("price: " + " is " + this.price);
  }

  showPrice() {
    console.log("Price of " + this.model_name + " is " + this.price);
  }

  //Static Method
  static message() {
    console.log("It is a static method");
  }
}

//inheritance Method
//Base Class(paranet) - Bike
//Derived Class(Child) - SportsBike


class SportsBike extends Bike{

}

let b1 = new Bike("Hero150", "Red", 50000);
let b2 = new Bike("Honda 150", "Yellow", 25000);
let b3 = new Bike("Bajaj 150", "Blcak", 15000);


let s1 = new SportsBike("KTM Rc","black",20000)

s1.showPrice();