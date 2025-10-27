let inventory = [
  /*{
    name : "silver",
    quantity: 50
  },
  {

  },
  {
    name: "gold",
    quantity: 70
  }*/
  /*
  {name: "flour", quantity: 8},
  {},
  {name: "lour", quantity: 2}*/
];

//console.log(inventory[1].hasOwnProperty("name"))

function findProductIndex(productName){
  const item = inventory.find(user =>  
  user && user.hasOwnProperty("name") && user.name.toLowerCase() === productName.toLowerCase()); //this looks for the productName in the inventory array by using a find method and using a mini function "user"(bad variable name I know lol) to check for it
  return inventory.indexOf(item);
  /*for(const object of inventory){
    console.log(object)
    if(object.name == productName){
      return inventory.indexOf(object);
    }
    else{
      return -1;
    }
  }
  return inventory.indexOf(productName);*/
}

function addProduct(productObject){
  const theName = productObject.name
  const theProductIndex = findProductIndex(theName);
  if(theProductIndex != -1){
    const productName = inventory[theProductIndex].name;
    console.log(productName.toLowerCase() + " quantity updated");
    inventory[theProductIndex].quantity += productObject.quantity;
    console.log(inventory);
  }
  else{
    productObject.name = productObject.name.toLowerCase();
    inventory.push(productObject);
    let productName = productObject.name
    console.log(`${productName} added to inventory`)
    //console.log(inventory)
  }
};

function removeProduct(productName,productQuantity){
  const productIndex = findProductIndex(productName);
  if(productIndex !== -1){
    if(inventory[productIndex].quantity >= productQuantity){
      inventory[productIndex].quantity -= productQuantity;
      let remainingPieces = inventory[productIndex].quantity;
      console.log(`Remaining ${inventory[productIndex].name} pieces: ${remainingPieces}`); 
      if(remainingPieces == 0){
        inventory.splice(productIndex,1);
        console.log(`There are no more ${productName.toLowerCase()} available, therefore it has been removed from the inventory`);
        console.log(inventory);
      }
    }
    else{
      let remainingPieces = inventory[productIndex].quantity;
      console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${remainingPieces}`);
    }
  }
  else{
    console.log(`${productName.toLowerCase()} not found`);
  }
}
inventory = [{name: "flour", quantity: 5}, {name: "rice", quantity: 5}]
//let indexValue = findProductIndex("silver");
//console.log(indexValue);
addProduct({name: "FLOUR", quantity: 5});
//removeProduct("FLOUR", 5)
//removeProduct("lour", 13)