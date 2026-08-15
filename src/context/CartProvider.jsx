import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState(() => {
    const savedData = localStorage.getItem("luma-shopping-cart");

    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("luma-shopping-cart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  function handleAddToShoppingCart(product) {
    setShoppingCart((previousCart) => {
      const existingProduct = previousCart.find(
        (cartItem) => cartItem.id === product.id,
      );

      if (existingProduct) {
        return previousCart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  }

  function handleDecreaseQuantity(productId) {
    setShoppingCart((previousCart) => {
      const foundProduct = previousCart.find(
        (cartItem) => cartItem.id === productId,
      );

      if (foundProduct.quantity === 1) {
        return previousCart.filter((cartItem) => cartItem.id !== productId);
      }

      return previousCart.map((cartItem) =>
        cartItem.id === productId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem,
      );
    });
  }

  function handleRemoveFromCart(productId) {
    setShoppingCart((previousCart) =>
      previousCart.filter((cartItem) => cartItem.id !== productId),
    );
  }

  function handleClearCart() {
    setShoppingCart([]);
  }

  const totalCartItems = shoppingCart.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);

  const subtotal = shoppingCart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  const cartValue = {
    shoppingCart,
    totalCartItems,
    subtotal,
    handleAddToShoppingCart,
    handleDecreaseQuantity,
    handleRemoveFromCart,
    handleClearCart,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
