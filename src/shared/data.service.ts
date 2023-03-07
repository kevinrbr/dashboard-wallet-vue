import axios from "axios";
import { format } from "date-fns";
import { supabase } from "@/supabase";
import { IItems } from "@/types/items";
import { dateFormat } from "@/shared/constants";

const getStock = async function () {
  const { data, error } = await supabase.from("stock").select();

  if (!data) {
    throw new Error(`db error ${error}`);
  }

  const stockList = data.map((i) => {
    i.buying_date = format(new Date(i.buying_date), dateFormat);
    return i;
  });

  return stockList as IItems[];
};

const updateProduct = async function (item: IItems) {
  const { data, error } = await supabase.from("stock").upsert(item).select();

  if (!item) {
    throw new Error(`db error ${error}`);
  }

  return data;
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
