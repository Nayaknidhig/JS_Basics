class Alien{
  constructor() {
    this.name="Nidhi";
  }
  
  printAlien(){
    console.log(this.name);
  }
}
class Name extends Alien{
  constructor() {
    super();
    this.name = "Munna";
    this.age = "Just born";
  }
  
  printMyName(){
    console.log(this.name);
  }
}


const myName = new Name();
console.log(myName);
myName.printMyName();
myName.printAlien();
