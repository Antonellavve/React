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