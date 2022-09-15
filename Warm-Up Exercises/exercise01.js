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
  let i = 0; i <= customerOrders.length; ++i;
  console.log(customerOrders[i])
}

reciteMyOrders(orders);

// Nachos with Cheese
// Chile Relleno, Burrito, & Rice
// Flauta, Chicken Quesadilla, & Taco