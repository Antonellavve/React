export const addItem = (cartItems, product) =>{
    const productInCart = cartItems.find ((item) =>{
        return item.id === product.id
    })

    if (productInCart) {
        return cartItems.map((item)=>{
            return item.id === productInCart.id
            ?   {
                ...item,
                quantity: item.quantity+1
                }
            :   item
        })
    } else {
        return [
            ...cartItems,
            {
                ...product,
                quantity: 1
            }
        ]
    }
}

export const deleteCartItem = (cartItems, id) =>{
    const productDelete = cartItems.find ((item) => item.id === id);

    if (productDelete.quantity > 1 ){
        return cartItems.map ((item)=> {
            return item.id === productDelete.id
            ? {
                ...item,
                quantity : item.quantity - 1
            }
            : item
        })
    } else{
        return cartItems.filter ((item) => item.id !== productDelete.id)
    }
}

export const resetTheShipping  = (cartItems, costShipping) =>{
    if (cartItems.length === 1 && cartItems [0]. quantity === 1){
        return 0
    }else{
        return costShipping
    }
}