import react, {useState, useEffect, createContext, useContext} from "react";
const Context = createContext();

export const stateContext = ({children}) =>{
    const [showCart, setShowCart] = useState(false); // This will be the state for the toggleing of the cart component
    const [cartItems, setCartItems] = useState([]); // This will be the state for the items in the cart
    const [totalPrice, setTotalPrice] = useState(0); // This will hold the state for the total amount of the items in the cart
    const [totalQuantities, setTotalQuantities] = useState(0); // this will give us the quantity of the cart items
    const [qty, setQty] = useState(1); // this will be the quantity of all the items that are in the cart


    // I need to make a function that will handle the adding to the cart and updating the quantity number on the bag



    // I need another function that will handle the removing of items in the cart and updating the subtotal


    // I will also need another function that will handle all the logic in the cart component as for as adding more quantity, decreasing the quantity, and removing the product entirely

    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context);
