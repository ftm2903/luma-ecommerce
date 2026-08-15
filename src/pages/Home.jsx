import Hero from "../components/Hero";
import CategoryFilter from "../components/CategoryFilter";
import ProductGrid from "../components/ProductGrid";

function Home({
  products,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  handleAddToShoppingCart,
}) {
  return (
    <main>
      <Hero />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductGrid
        products={products}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        handleAddToShoppingCart={handleAddToShoppingCart}
      />
    </main>
  );
}

export default Home;
