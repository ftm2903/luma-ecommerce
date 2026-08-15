function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Beauty",
    "Home",
    "Groceries",
  ];

  return (
    <section id="categories" className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d97757]">
          Browse
        </p>

        <h2 className="mt-2 text-3xl font-black tracking-tight">
          Explore Categories
        </h2>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
              category === selectedCategory
                ? "bg-[#171717] text-white shadow-lg"
                : "border border-black/10 bg-white text-black/60 hover:border-black/30 hover:text-black"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryFilter;
