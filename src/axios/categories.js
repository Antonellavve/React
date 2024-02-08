// import axios from "axios";
// import {
//     fetchingCategories,
//     successFetchingCategories,
//     errorFetchingCategories,
//     } from "../Redux/Categories/categoriesSlice";
// import { BASE_URL } from "../utils/limitProducts";

// export const getAllCategories = async (dispatch) => {
//     dispatch(fetchingCategories());

//     try {
//         const response = await axios.get(`${BASE_URL}/category`); 
//         const categories = response?.data.categories;

//         // Mapear las categorías a un nuevo formato (opcional)
//         const formattedCategories = categories?.map((category) => ({
//         id: category._id,
//         title: category.title,
//         code: category.code,
//         }));

//         if (formattedCategories) {
//         dispatch(successFetchingCategories(formattedCategories));
//         } else {
//         dispatch(errorFetchingCategories(response.data.msg));
//         }
//     } catch (error) {
//         dispatch(
//         errorFetchingCategories("Error al obtener categorías de la base de datos")
//         );
//     }
// };
