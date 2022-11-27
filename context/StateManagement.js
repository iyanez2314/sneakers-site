import react, {useState, useEffect, createContext, useContext} from "react";
const Context = createContext();

export const StateContext = ({children}) =>{
    const [showCart, setShowCart] = useState(false); // This will be the state for the toggleing of the cart component
    const [cartItems, setCartItems] = useState([]); // This will be the state for the items in the cart
    const [totalPrice, setTotalPrice] = useState(0); // This will hold the state for the total amount of the items in the cart
    const [totalQuantities, setTotalQuantities] = useState(0); // this will give us the quantity of the cart items
    const [qty, setQty] = useState(1); // this will be the quantity of all the items that are in the cart

    console.log(cartItems);

    /**
     * @params this function will receive a product and a quatity
     * @description This function will add the product we clicked to the cart but we will also check to see if that product is already in the cart
     * if the product is already in the cart we will just add to the quantity of the product we already have.
     */

    const onAddToCart = (product, quantity) => {
        const checkIfItemIsInCart = cartItems.find((items) => items._id === product._id);
        setTotalPrice((prevPrice) => prevPrice + product.price * quantity);
        setTotalQuantities((prevQty) => prevQty + quantity);

        // this will allow us to conditionally check the if the item we have in cart is already in there if it is we will just update the quantity. If not we will add it to the cart
        if(checkIfItemIsInCart){
            const updatedCartItems = cartItems.map((cartItem) => {
                if(cartItem._id === product._id) return {
                    ...cartItem,
                    quantity: cartItem.quantity + quantity
                }
            })
            setCartItems(updatedCartItems)
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}]);
        }
    };


    // I need another function that will handle the removing of items in the cart and updating the subtotal


    // I will also need another function that will handle all the logic in the cart component as for as adding more quantity, decreasing the quantity, and removing the product entirely

    return (
        <Context.Provider
        value={{
            qty,
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            setShowCart,
            setQty,
            setTotalPrice,
            setTotalQuantities,
            setCartItems,
            onAddToCart,
        }}
        >
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context);
