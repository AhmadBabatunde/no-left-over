export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Signatures" | "Starters" | "Mains" | "Sides" | "Desserts" | "Drinks";
  image?: string;
  tags?: string[];
};

import real1 from "@/assets/real1.jpg";
import real2 from "@/assets/real2.jpg";
import real3 from "@/assets/real3.jpg";

export const menuItems: MenuItem[] = [
  { id: "1", name: "Signature Moin-Moin", description: "Our original recipe — the bean cake that started it all. Rich, silky, packed with flavour. Available in classic, fish, and prawn varieties.", price: 3500, category: "Signatures", image: real1, tags: ["Signature", "Vegetarian"] },
  { id: "2", name: "Nigerian Party Jollof Rice", description: "Smoky, flavourful party-style jollof rice cooked the traditional way over firewood. Served with choice of protein.", price: 5500, category: "Mains", image: real2, tags: ["Popular"] },
  { id: "3", name: "Assorted Nigerian Buffet", description: "A hearty spread of authentic Nigerian dishes — rice, stew, spaghetti, and more. Perfect for events and large gatherings.", price: 15000, category: "Mains", image: real2, tags: ["Catering", "Events"] },
  { id: "4", name: "Moin-Moin Special Pack", description: "A generous serving of our signature Moin-Moin with stew and your choice of sides. Comes in our iconic packaging.", price: 4500, category: "Signatures", image: real1, tags: ["Bestseller"] },
  { id: "5", name: "Egusi Soup", description: "Slow-cooked melon seed soup with assorted meat, dried fish, and stockfish. Served with pounded yam or eba.", price: 6500, category: "Mains" },
  { id: "6", name: "Nigerian Stew with Rice", description: "Classic tomato-based Nigerian stew with choice of beef, chicken, or fish. Served with white or jollof rice.", price: 4500, category: "Mains", tags: ["Classic"] },
  { id: "7", name: "Party Spaghetti", description: "Fried Nigerian-style spaghetti with vegetables, sausage, and eggs. A crowd favourite at every event.", price: 4000, category: "Sides", tags: ["Popular"] },
  { id: "8", name: "Plantain (Dodo)", description: "Golden fried sweet plantain slices — the perfect Nigerian side dish.", price: 1500, category: "Sides", tags: ["Vegetarian"] },
  { id: "9", name: "Zobo Drink", description: "Chilled hibiscus flower drink with ginger and pineapple flavour.", price: 1000, category: "Drinks" },
  { id: "10", name: "Kunu", description: "Traditional Nigerian millet drink, naturally sweetened.", price: 1000, category: "Drinks", tags: ["Vegan"] },
  { id: "11", name: "Catering Package (Small)", description: "Full catering service for up to 50 guests. Includes 3 mains, 2 sides, drinks. Contact us for customisation.", price: 150000, category: "Mains", image: real3, tags: ["Catering"] },
  { id: "12", name: "Catering Package (Large)", description: "Full catering service for 100+ guests. Includes 5 mains, 3 sides, drinks, serving staff. Contact us for pricing.", price: 350000, category: "Mains", image: real3, tags: ["Catering", "Events"] },
];

export const formatNaira = (n: number) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(n);
