import react, {useState, useEffect, createContext, useContext} from "react";
const Context = createContext();

export const StateContext = ({children}) =>{
    const [showCart, setShowCart] = useState(false); // This will be the state for the toggleing of the cart component
    const [cartItems, setCartItems] = useState([]); // This will be the state for the items in the cart
    const [totalPrice, setTotalPrice] = useState(0); // This will hold the state for the total amount of the items in the cart
    const [totalQuantities, setTotalQuantities] = useState(0); // this will give us the quantity of the cart items
    const [qty, setQty] = useState(1); // this will be the quantity of all the items that are in the cart
    let foundProduct;
    let index;

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


    
    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        let updatedCartItems = cartItems.filter((item) => item._id !== product._id);

        setTotalPrice((prevPrice) => prevPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantities((prevQty) => prevQty - foundProduct.quantity);
        setCartItems(updatedCartItems);
    };

    const cartQuantity = (id, value) => {
        const newCartItems = cartItems.filter((item) => item._id !== id);
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);

        if(value === 'increment'){
            setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1}]);
            setTotalPrice((prevPrice) => prevPrice + foundProduct.price);
            setTotalQuantities((prevTotal) => prevTotal + 1)
        } else if (value === 'decrement'){
            if(foundProduct.quantity > 1){
                setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity - 1}]);
                setTotalPrice((prevPrice) => prevPrice - foundProduct.price);
                setTotalQuantities((prevTotal) => prevTotal - 1);
            }
        }
    }

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
            onRemove,
            cartQuantity
        }}
        >
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context);
