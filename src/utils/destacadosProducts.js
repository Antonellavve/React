// import axios from "axios";
// import { BASE_URL } from "./limitProducts";

// export const getProducts = async (cantidad) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/products`);
//         const productsFromAPI = response.data.products;

//         const newArray = [];
//         while (newArray.length < cantidad) {
//             const indexAleatorio = Math.floor(Math.random() * productsFromAPI.length);

//             if (!newArray.length) {
//                 newArray.push(productsFromAPI[indexAleatorio]);
//             }

//             const productosEnLista = newArray.find((nuevoDestacado) => {
//                 return nuevoDestacado.id === productsFromAPI[indexAleatorio].id;
//             });

//             if (!productosEnLista) {
//                 newArray.push(productsFromAPI[indexAleatorio]);
//             }
//         }

//         return newArray;
//     } catch (error) {
//         console.error("Error al obtener productos desde la base de datos:", error);
//         return []; // o maneja el error de alguna manera adecuada para tu aplicación
//     }
// };

import {productsList} from "../data/products"

export const getProducts =(cantidad) =>{
    const newArray =[];
    while (newArray.length < cantidad){
        const indexAleatorio = Math.floor(Math.random()* productsList.length);

        if (!newArray.length){
            newArray.push(productsList[indexAleatorio]);
        }
        const productosEnLista = newArray.find ((nuevoDestacado)=>{
            return nuevoDestacado.id === productsList[indexAleatorio].id;
        });

        if (!productosEnLista){
            newArray.push (productsList[indexAleatorio]);
        }
    }

    return newArray;
}
