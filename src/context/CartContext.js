import React,   {useState} from "react";

export const CartContext = React.createContext();
const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(0);

    const addToCart = (item, qty) => {  //implementa la funcionalidad para agregar un producto al carrito
        const addedItem = {
            img:    item.img,
            name:   item.name,
            price:  item.price,
            qty: qty
        };
        console.log(addedItem);
        setCartList(cartList => [addedItem,...cartList]);
        console.log(cartList);
        console.log('qty a agregar ' + addedItem.qty);
        setItemQuantity(itemQuantity + addedItem.qty);
        
        console.log('total del carro    ' + itemQuantity);
    }
    const removeList = () => {	//implementa la funcionalidad para dejar el carrito vacío
        setCartList([]);
    }
    const deleteItem = (id) => {	//implementa la funcionalidad para borrar un producto del carrito
        setCartList(cartList.filter(val => val[0].id !== id));
    }
    
    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, itemQuantity}}>
            { children }
        </CartContext.Provider>
    );

}

export default CartContextProvider;