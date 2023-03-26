// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages

const input = require('sync-input')
const espresso={
      milk:0,
      watter:250,
      coffee:16,
      cost:4
}
const latte={
    milk:75,
    watter:350,
    coffee:20,
    cost:7
}
const cappuccino={
    milk:100,
    watter:200,
    coffee:12,
    cost:6
}
const machin={
    milk:540,
    watter:400,
    coffee:120 ,
    cups:9,
    money:550,
    saleStatic:[0,0,0],
    notEnoughmessage:0,
    PrintStatus(){
      console.log(`The coffee machine has:`);
      console.log(`${this.watter} ml of water`);
      console.log(`${this.milk} ml of milk`);
      console.log(`${this.coffee} g of coffee beans`);
      console.log(`${this.cups} disposable cups`);
      console.log(`$${this.money} of money`);
      console.log(`${this.saleStatic[0]} espresso sold,${this.saleStatic[1]} latte sold and ${this.saleStatic[2]} cappuccino sold.`);
      console.log(`${this.notEnoughmessage} number machine said not enough material.`);
    }
}

let mainMenu=true;
while(mainMenu){
  //machin.PrintStatus();
  let menuChoos=input("Write action (buy, fill, take, remaining, exit):");
  if(menuChoos=="buy"){
      let buyChoos=input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
      let message="I have enough resources, making you a coffee!";
      switch (buyChoos) {
          case "1":
              if (machin.watter < espresso.watter) {machin.notEnoughmessage++;message = "Sorry, not enough water!";}
              else if (machin.milk < espresso.milk) {machin.notEnoughmessage++;message = "Sorry, not enough milk!";}
              else if (machin.coffee < espresso.coffee) {machin.notEnoughmessage++;message = "Sorry, not enough coffee!";}
              else {
                      machin.watter -= espresso.watter;
                      machin.milk -= espresso.milk;
                      machin.coffee -= espresso.coffee;
                      machin.money += espresso.cost;
                      machin.cups--;
                      machin.saleStatic[0]++;

                }
              break;
          case "2":
              if (machin.watter < latte.watter) {machin.notEnoughmessage++;message = "Sorry, not enough water!";}
              else if (machin.milk < latte.milk) {machin.notEnoughmessage++;message = "Sorry, not enough milk!";}
              else if (machin.coffee < latte.coffee) {machin.notEnoughmessage++;message = "Sorry, not enough coffee!";}
              else {
                  machin.watter -= latte.watter;
                  machin.milk -= latte.milk;
                  machin.coffee -= latte.coffee;
                  machin.money += latte.cost;
                  machin.cups--;
                  machin.saleStatic[1]++;

              }
              break;
          case "3":
              if (machin.watter < cappuccino.watter) {machin.notEnoughmessage++;message = "Sorry, not enough water!";}
              else if (machin.milk < cappuccino.milk) {machin.notEnoughmessage++;message = "Sorry, not enough milk!";}
              else if (machin.coffee < cappuccino.coffee) {machin.notEnoughmessage++;message = "Sorry, not enough coffee!";}
              else {
                  machin.watter -= cappuccino.watter;
                  machin.milk -= cappuccino.milk;
                  machin.coffee -= cappuccino.coffee;
                  machin.money += cappuccino.cost;
                  machin.cups--;
                  machin.saleStatic[2]++;

              }
              break;
      }
      console.log(message);

   }
    if(menuChoos=="remaining") {
        machin.PrintStatus();
    }
    if(menuChoos=="exit") {
        mainMenu=false;
    }
  if(menuChoos=="fill"){
      machin.watter+=Number(input("Write how many ml of water you want to add:"));
      machin.milk+=Number(input("Write how many ml of milk you want to add:"));
      machin.coffee+=Number(input("Write how many grams of coffee beans you want to add:"));
      machin.cups+=Number(input("Write how many disposable cups you want to add:"));
  }
  if(menuChoos=="take"){
     console.log(`I gave you ${machin.money}`);
     machin.money=0;
  }


}


/*
const water=input("Write how many ml of water the coffee machine has:");
const milk=input("Write how many ml of milk the coffee machine has:");
const coffee=input("Write how many grams of coffee beans the coffee machine has:");
let cup=input("Write how many cups of coffee you will need:");

let Awater=(water  - water % 200)/ 200;
let Amilk=(milk  - milk % 50)/ 50;
let Acoffee=(coffee - coffee % 15)/15;
let MaxCoffee=Math.min(Awater,Amilk,Acoffee);
cup=cup * 1;
//console.log (`Minimum coffee is : ${MaxCoffee - cup}`);

if (MaxCoffee == cup ){
    console.log(`Yes, I can make that amount of coffee`);
}
if (MaxCoffee - cup > 0){
    console.log(`Yes, I can make that amount of coffee (and even ${MaxCoffee-cup} more than that)`);
}
if (MaxCoffee < cup ){
    console.log(`No, I can make only ${MaxCoffee} cups of coffee`);
}
*/


