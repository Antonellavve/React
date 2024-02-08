// import axios from "axios";
// // import { errorFetchingProducts, successFetchingProducts } from "../Redux/Products/productsSlice";
// import { BASE_URL } from "../utils/limitProducts";

// export const fetchAllProducts = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${BASE_URL}/products`); // Corregido el endpoint
//       const products = response?.data.products
//         .map((product) => {
//           const { id, title, category, price, img } = product;
//           return {
//             id: id,
//             title,
//             category: category.code,
//             price,
//             img
//           };
//         });
//       if (products) dispatch(successFetchingProducts(products));
//       else dispatch(errorFetchingProducts(response.data.msg));
//     } catch (error) {
//       dispatch(errorFetchingProducts("Error al obtener productos de la base de datos"));
//     }
//   };
// };


// export const createProduct = async (id, title, img, price, category, stock) => {
//   try {
//     const productData = {
//       id,       // Tomando el ID del argumento
//       title,    // Tomando el título del argumento
//       img,      // Tomando la URL de la imagen del argumento
//       price,    // Tomando el precio del argumento
//       category: category.toUpperCase(), // Convierte la categoría a mayúsculas
//       stock     // Tomando el stock del argumento
//     };

//     const response = await axios.post(`${BASE_URL}/products`, productData);

//     console.log("Respuesta del servidor:", response.data); // Imprimir la respuesta del servidor
//     return response.data;
//   } catch (err) {
//     console.error("Error al crear el producto:", err.response?.data);
//     alert(err.response?.data.msg);
//   }
// };

// // export const getProducts = async () => {
// //   try{
// //     const response = await axios.get(`${BASE_URL}/products/getProducts`);
// //     console.log("respuesta del servidor". response.data);
// //     return response.data;
// //     }catch (err){
// //       console.log("error al crear el prod". err.response?.data);
// //       alert(err.response?. data.msg)
// //     }
// // }

