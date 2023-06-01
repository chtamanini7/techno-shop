import React,   {useState} from "react";

export const CartContext = React.createContext();
const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addToCart = (item, qty) => { 
        const addedItem = {
            id:     item.id,
            img:    item.data.img,
            name:   item.data.name,
            price:  item.data.price,
            qty: qty
        };
        
        setCartList(cartList => [...cartList,addedItem]);
        setItemQuantity(itemQuantity => itemQuantity + addedItem.qty);
        setTotal(total => total + addedItem.qty * addedItem.price);
    }
    const removeList = () => {
        setCartList([]);
        setTotal(0);
        setItemQuantity(0);
    }
    const deleteItem = (id) => {
        const aux = cartList.find(val => val.id === id);
        setCartList(cartList.filter(val => val.id !== id));
        setTotal(total => total - aux.qty * aux.price);
        setItemQuantity(itemQuantity => itemQuantity - aux.qty);
    }
    
    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, itemQuantity, total}}>
            { children }
        </CartContext.Provider>
    );

}

export default CartContextProvider;