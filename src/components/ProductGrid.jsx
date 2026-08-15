import ProductCard from "./ProductCard";

function ProductGrid({
  products,
  selectedCategory,
  handleAddToShoppingCart,
  searchTerm,
}) {
  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "All" || product.category === selectedCategory,
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8 ">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d97757]">
            Curated for you
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Featured Products
          </h2>
        </div>

        <button className="hidden rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white sm:block">
          View all →
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToShoppingCart={handleAddToShoppingCart}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center rounded-3xl border border-dashed border-black/15 bg-white px-6 py-16 text-center">
            <span className="text-5xl">🔎</span>

            <h3 className="mt-5 text-xl font-black">No products found</h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-black/50">
              Try another search term or choose a different category.
            </p>
          </div>
        )}
      </div>

      <button className="mt-8 w-full rounded-full border border-black/10 bg-white py-4 text-sm font-bold transition hover:bg-[#171717] hover:text-white sm:hidden">
        View all products →
      </button>
    </section>
  );
}

export default ProductGrid;
