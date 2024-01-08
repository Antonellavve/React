// axios/products.js
import axios from "axios";
//import { errorFetchingProducts, fetchingProducts, successFetchingProducts } from "../Redux/Products/productsSlice";
import { BASE_URL } from "../utils/limitProducts";

// export const fetchAllProducts = () => {
//   return async (dispatch) => {
//     dispatch(fetchingProducts());
//     try {
//       const response = await axios.get(`${BASE_URL}/products`); // Corregido el endpoint
//       const products = response?.data.products
//         .map((product) => {
//           const { _id, title, desc, category, price, starred, url } = product;
//           return {
//             id: _id,
//             title,
//             desc,
//             category: category.code,
//             price,
//             starred,
//             url,
//             quantity: 0,
//           };
//         });
//       if (products) dispatch(successFetchingProducts(products));
//       else dispatch(errorFetchingProducts(response.data.msg));
//     } catch (error) {
//       dispatch(errorFetchingProducts("Error al obtener productos de la base de datos"));
//     }
//   };
// };

export const createProduct = async (id, title, category, price, stock) => {
  console.log("entre a crear");
  try {
    const response = await axios.post(
      `${BASE_URL}/productsAdd`,
      {
        id,
        title,
        category,
        price,
        stock,
      },
      {
        headers: {
           'x-token': currentUser.token
        },
      }
    );
    alert("Producto creado correctamente");
    return response.data;
  } catch (err) {
    console.error(err);
    return alert(err.response.data.msg);
  }
};

