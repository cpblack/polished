// Assignment Found at /grocery-store-js/
function Shopper(name, age, member) {
    this.name = name;
    this.age = age;
    this.member = member;
    this.cart = [];
    this.fight = function(otherShopper){
      if (this.age < otherShopper.age) {
        console.log(this.name+" beat up "+otherShopper.name);
        this.cart = this.cart.concat(otherShopper.cart);
        otherShopper.cart = [];
        return this;
      } else if (this.age > otherShopper.age){
        console.log(this.name+" lost to "+otherShopper.name);
        otherShopper.cart = otherShopper.cart.concat(this.cart);
        this.cart = [];
        return otherShopper;
      } else if (this.age === otherShopper.age){
        console.log(this.name+" tied with "+otherShopper.name);
        return undefined;
      } else {
        return null;
        console.log("Fight Error: "+this.name+", "+otherShopper.name);
      }
    }
    this.addItem = function(name){
        this.cart.push(name);
    }
    this.cartString = function(){
        var output = "";
        for (var i = 0; i < this.cart.length; i++){
            if (output != "") {
                output += ", ";
            }
            output += this.cart[i];
        }
        return output;
    }
}
var patricia = new Shopper("Patricia",45,true);
var thomas = new Shopper("Thomas",24,false);
patricia.addItem("apple");
patricia.addItem("ketchup");
thomas.addItem("chips");
thomas.addItem("tomato");
patricia.fight(thomas);
console.log("Patricia's Cart: "+patricia.cartString());
console.log("Thomas's Cart: "+thomas.cartString());
