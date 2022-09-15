const orders = [
  {
    order: "Nachos with Cheese",
    name: "Sandy",
    price: "$13.99",
  },
  {
    order: "Chile Relleno, Burrito, & Rice",
    name: "John",
    price: "$13.99",
  },
  {
    order: "Flauta, Chicken Quesadilla, & Taco",
    name: "Amy",
    price: "$13.99",
  },
];

function reciteMyOrders(customerOrders) {
  for(i = 0; i <= orders.length; i++;) {
    console.log(orders[i].order);
    console.log(orders[i].name);
    console.log(orders[i].price);
  }
  
}

reciteMyOrders(orders);

// Nachos with Cheese
// Chile Relleno, Burrito, & Rice
// Flauta, Chicken Quesadilla, & Taco