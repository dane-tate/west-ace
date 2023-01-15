import { ImageSourcePropType } from "react-native";
import Colors from "../constants/Colors";

interface User {
  id: number;
  name: string;
  image: ImageSourcePropType;
}

export const user: User = {
  id: 1,
  name: "Daniel",
  image: require("../assets/images/user/avatar.png"),
};

export interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Eles",
  },
  {
    id: 2,
    name: "Elas",
  },
  {
    id: 3,
    name: "Conjuntos",
  },
];

interface Color {
  id: number;
  code: string;
}

const colors: Color[] = [
  {
    id: 1,
    code: Colors.primary,
  },
  {
    id: 2,
    code: Colors.secondary,
  },
  {
    id: 3,
    code: Colors.text,
  },
];

interface Size {
  id: number;
  name: string;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  description: string;
  image: ImageSourcePropType;
  reviews: number;
  rating: number;
  brand: string;
  colors: Color[];
  sizes: Size[];
}

const sizes: Size[] = [
  { id: 1, name: "S" },
  { id: 2, name: "M" },
  { id: 3, name: "L" },
  { id: 4, name: "XL" },
  { id: 5, name: "XXL" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Em breve...",
    price: 18.0,
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/topsecret.jpeg"),
    reviews: 80,
    rating: 2.5,
    colors: colors,
    brand: "West Ace",
    sizes,
  },
  {
    id: 2,
    name: "Em breve...",
    price: 76.0,
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/topsecret.jpeg"),
    reviews: 28,
    rating: 3.7,
    colors: colors,
    brand: "West Ace",
    sizes,
  },
  {
    id: 3,
    name: "Em breve...",
    price: 29.99,
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/topsecret.jpeg"),
    reviews: 70,
    rating: 5,
    colors: colors,
    brand: "West Ace",
    sizes,
  },
  {
    id: 4,
    name: "Em breve...",
    price: 49.0,
    category: categories[1],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/topsecret.jpeg"),
    reviews: 65,
    rating: 4.2,
    colors: colors,
    brand: "West Ace",
    sizes,
  },
];