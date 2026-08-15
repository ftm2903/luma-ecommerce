import { Link } from "react-router-dom";

function ProductCard({ product, handleAddToShoppingCart }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-black/5 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#efeee9]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/5" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[#171717] px-3 py-1.5 text-[10px] font-bold tracking-wider text-white">
            {product.badge}
          </span>
        )}

        {/* Favorite */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur-sm transition hover:scale-110 hover:bg-white">
          ♡
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40">
          {product.category}
        </p>

        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight">{product.name}</h3>

          <p className="shrink-0 text-lg font-black">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm tracking-wide text-[#d97757]">★★★★★</span>

          <span className="text-xs font-medium text-black/40">
            {product.rating}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-5 flex gap-2">
          <Link
            to={`/products/${product.id}`}
            className="flex flex-1 items-center justify-center rounded-full bg-[#171717] py-3 text-sm font-bold text-white transition hover:bg-[#333]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            View Details
          </Link>

          <button
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-xl font-light transition hover:border-black hover:bg-black hover:text-white"
            onClick={() => handleAddToShoppingCart(product)}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
