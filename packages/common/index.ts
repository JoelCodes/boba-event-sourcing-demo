export type Context = {};

export type Drink = {
  base: DrinkBase;
  toppings: DrinkTopping[];
  sweetness: DrinkSweetness;
  ice: DrinkIce;
}

export type DrinkTopping = {
  name: string;
}

export type DrinkSweetness = "FULL" | "THREE_QUARTERS" | "HALF" | "QUARTER" | "NONE";

export type DrinkIce = "FULL" | "THREE_QUARTERS" | "HALF" | "QUARTER" | "NONE";

export type DrinkBase = {
  name: string;
  category: DrinkBaseCategory;
}

export type DrinkBaseCategory = "GREEN_TEA" | "MILK_TEA" | "COFFEE" | "SMOOTHIE" | "YOGURT" | "OTHER";

export type Order = {
  items: OrderItem[];
  status: OrderStatus;
  id: string;
  createdAt: Date;
  totalPrice: number;
};

export type OrderItem = {
  id: string;
  drink: Drink;
  quantity: number;
};

export type OrderStatus = 
  | "ORDERING" 
  | "PREPARING" 
  | "READY" 
  | "DELIVERED" 
  | "CANCELLED";
