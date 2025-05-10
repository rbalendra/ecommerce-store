import { createContext, useState, useContext } from 'react';

const CartContext = createContext(); //creating a new context object

/* -------------------------------------------------------------------------- */
export const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]); //state to hold cart items
	// console.log('Current cart items:', cartItems);

	// get the total quantity of items in the cart
	let cartQuantity = 0;
	cartItems.forEach((item) => {
		cartQuantity += item.quantity;
	});

	const addToCart = (product, quantity = 1) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === product.id); //comparing id to see if the poduct is already in the cart
			// console.log('Item already exists in cart?', existingItem ? 'Yes' : 'No');

			//NOTE - we map through prevItems and if the item is found then increase the quantity to 1 and return other items unchanged
			if (existingItem) {
				return prevItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + quantity }
						: item
				);
			} else {
				return [...prevItems, { ...product, quantity }]; //adding new product qty as 1
			}
		});
	};

	/* -------------------------- remove cart function -------------------------- */
	const removeFromCart = (productId) => {
		setCartItems((prevItems) =>
			prevItems.filter((item) => item.id !== productId)
		);
	};

	/* ----------------------------- update quantity ---------------------------- */
	const updateQuantity = (productId, quantity) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === productId ? { ...item, quantity } : item
			)
		);
	};

	/* ------------------------------- clear cart ------------------------------- */
	const clearCart = () => {
		setCartItems([]);
	};

	/* -------------------------------------------------------------------------- */

	const contextValue = {
		cartItems,
		cartQuantity,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
	};
	// console.log('Providing context with value:', contextValue);

	return (
		<CartContext.Provider value={contextValue}>
			{/* //value is passed to the provider so that it can be accessed in other
			components */}
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext); //custom hook to use the context in other components. simply it is a just a shortcut to access the cartItems and AddtoCart. The function returns whatever value was provided in the CartContext.Provider

export default CartContextProvider;
