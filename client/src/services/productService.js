import apiInstance from "./api.js";

// all products fetching
export const getProducts = async () => {
  try {
    const response = await apiInstance.get("/get-all-products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
