import { Drink, DrinkBase, DrinkTopping, Order } from "boba-common";
import { v4} from "uuid";

export async function getMenu():Promise<{bases:DrinkBase[], toppings:DrinkTopping[]}>{
  return {
    bases: [
      {name: "Green Tea", category: "GREEN_TEA"},
      {name: "Milk Tea", category: "MILK_TEA"},
      {name: "Coffee", category: "COFFEE"},
      {name: "Smoothie", category: "SMOOTHIE"},
      {name: "Yogurt", category: "YOGURT"},
      {name: "Other", category: "OTHER"}
    ],
    toppings: [
      {name: "Boba"},
      {name: "Pudding"},
      {name: "Grass Jelly"},
      {name: "Red Bean"},
      {name: "Aloe Vera"},
      {name: "Coconut Jelly"},
      {name: "Lychee Jelly"},
      {name: "Rainbow Jelly"}
    ]
  }
}

export async function createOrder():Promise<Order>{
  return {
    id: v4(),
    createdAt: new Date(),
    status: "ORDERING",
    totalPrice: 0,
    items: []
  };
}