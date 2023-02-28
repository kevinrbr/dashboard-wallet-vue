import axios from "axios";

const getStock = async function () {
  const response = await axios.get("./../db.json");
  const data = response.data.products;
  return data;
};

export const dataService = {
  getStock,
};
