import axios from "axios";
import { supabase } from "@/supabase";
import { IItems } from "@/shared/types/items";

const getStock = async function () {
  const { data, error } = await supabase.from("stock").select();
  if (!data) {
    throw new Error("Erreur de la récupération des données.");
  }
  return data as IItems[];
};

const updateProduct = async function (item: IItems) {
  const response = await axios.put(
    `http://localhost:3000/products/${item.id}`,
    item
  );
  const updatedHero = response.data;
  return updatedHero;
};

const deleteProduct = async function (item: IItems) {
  const response = await axios.delete(
    `http://localhost:3000/products/${item.id}`
  );
  getStock();
  return response;
};

export const dataService = {
  getStock,
  updateProduct,
  deleteProduct,
};
