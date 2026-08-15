function Navbar({
  totalCartItems,
  isCartOpen,
  setIsCartOpen,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f7f5]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        {/* Logo */}
        <a href="#" className="group flex shrink-0 items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-sm font-bold text-white transition-transform duration-300 group-hover:rotate-12">
            L
          </div>

          <span className="text-xl font-black tracking-[0.18em]">LUMA</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          <a
            href="#shop"
            className="text-sm font-medium text-black/60 transition hover:text-black"
          >
            Shop
          </a>

          <a
            href="#new"
            className="text-sm font-medium text-black/60 transition hover:text-black"
          >
            New Arrivals
          </a>

          <a
            href="#categories"
            className="text-sm font-medium text-black/60 transition hover:text-black"
          >
            Categories
          </a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Search input: visible from small screens and above */}
          <div className="hidden items-center rounded-full border border-black/10 bg-white px-4 transition focus-within:border-black/30 focus-within:shadow-md sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-4 w-4 shrink-0 text-black/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
              />
            </svg>

            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products..."
              className="w-28 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-black/35 md:w-36 xl:w-48"
            />

            {searchTerm && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchTerm("")}
                className="flex h-6 w-6 items-center justify-center rounded-full text-lg leading-none text-black/40 transition hover:bg-black hover:text-white"
              >
                ×
              </button>
            )}
          </div>

          {/* Cart */}
          <button
            type="button"
            aria-label="Open shopping cart"
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-white transition hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2 2.5A1 1 0 0 0 6 17h11m-7 4a1 1 0 1 1-2 0m8 0a1 1 0 1 1-2 0"
              />
            </svg>

            {totalCartItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d97757] px-1 text-[10px] font-bold text-white">
                {totalCartItems}
              </span>
            )}
          </button>

          {/* Mobile menu button - only visual for now */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
