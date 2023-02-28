import axios from "axios";
import { IItems } from "@/shared/types/items";

const getStock = async function () {
  const response = await axios.get("http://localhost:3000/products/");
  const data = response.data;
  return data;
};

const updateStock = async function (item: IItems) {
  const response = await axios.put(
    `http://localhost:3000/products/${item.id}`,
    item
  );
  const updatedHero = response.data;
  return updatedHero;
};

export const dataService = {
  getStock,
  updateStock,
};
