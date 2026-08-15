import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import { CartContext } from "./context/CartContext";

function App() {
  const {
    shoppingCart,
    handleAddToShoppingCart,
    handleDecreaseQuantity,
    handleRemoveFromCart,
    handleClearCart,
    totalCartItems,
    subtotal,
  } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Minimal Watch",
      category: "Accessories",
      price: 129.99,
      rating: "4.8",
      badge: "NEW",
      image: "/images/minimalWatch.avif",
      description:
        "A clean, minimal watch designed for everyday use. Comfortable, timeless, and easy to style.",
    },
    {
      id: 2,
      name: "Urban Headphones",
      category: "Electronics",
      price: 89.99,
      rating: "4.7",
      badge: "SALE",
      image: "/images/urbanHeadphones.avif",
      description:
        "Modern wireless headphones with a comfortable fit and clear sound for your everyday listening.",
    },
    {
      id: 3,
      name: "Leather Backpack",
      category: "Fashion",
      price: 159.99,
      rating: "4.9",
      badge: "BEST SELLER",
      image: "/images/leatherBackpack.avif",
      description:
        "A practical leather backpack with a classic look, spacious interior, and durable materials.",
    },
    {
      id: 4,
      name: "Ceramic Essentials",
      category: "Home",
      price: 54.99,
      rating: "4.6",
      badge: null,
      image: "/images/ceramicEssentials.avif",
      description:
        "A thoughtfully selected ceramic set that brings warmth and simplicity to your home.",
    },
    {
      id: 5,
      name: "Classic Sneakers",
      category: "Fashion",
      price: 119.99,
      rating: "4.8",
      badge: "NEW",
      image: "/images/classicSneakers.avif",
      description:
        "Classic everyday sneakers made for comfort, movement, and effortless modern style.",
    },
    {
      id: 6,
      name: "Daily Skincare Set",
      category: "Beauty",
      price: 64.99,
      rating: "4.7",
      badge: null,
      image: "/images/dailySkincareSet.avif",
      description:
        "A simple daily skincare routine with essential products for fresh and healthy-looking skin.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#171717]">
      <Navbar
        totalCartItems={totalCartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchTerm={searchTerm}
              handleAddToShoppingCart={handleAddToShoppingCart}
            />
          }
        />

        <Route
          path="/products/:productId"
          element={
            <ProductDetails
              products={products}
              handleAddToShoppingCart={handleAddToShoppingCart}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isCartOpen && (
        <Cart
          shoppingCart={shoppingCart}
          totalCartItems={totalCartItems}
          subtotal={subtotal}
          setIsCartOpen={setIsCartOpen}
          handleAddToShoppingCart={handleAddToShoppingCart}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
          handleClearCart={handleClearCart}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
