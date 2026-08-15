import { Link, useParams } from "react-router-dom";

function ProductDetails({ products, handleAddToShoppingCart }) {
  const { productId } = useParams();

  const product = products.find(
    (productItem) => productItem.id === Number(productId),
  );

  if (!product) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-5 py-12 text-center sm:px-8">
        <span className="text-5xl">🔎</span>

        <h1 className="mt-5 text-3xl font-black">Product not found</h1>

        <p className="mt-3 text-sm text-black/50">
          This product does not exist or may have been removed.
        </p>

        <Link
          to="/"
          className="mt-7 rounded-full bg-[#171717] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#333]"
        >
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-2 py-4 sm:px-4 sm:py-5">
      <Link
        to="/"
        className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-bold text-black/70 transition hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
      >
        ← Back to Home
      </Link>

      <section className="grid overflow-hidden rounded-4xl border border-black/5 bg-white shadow-xl shadow-black/5 lg:grid-cols-2">
        {/* Product image */}
        <div className="relative h-72 bg-[#efeee9] sm:h-96 lg:h-135">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />

          {product.badge && (
            <span className="absolute left-5 top-5 rounded-full bg-[#171717] px-4 py-2 text-xs font-bold tracking-wider text-white">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product information */}
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d97757]">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-lg tracking-wide text-[#d97757]">★★★★★</span>

            <span className="text-sm font-bold text-black/50">
              {product.rating} rating
            </span>
          </div>

          <p className="mt-6 text-base leading-7 text-black/60">
            A thoughtfully selected everyday essential, designed to bring
            comfort, function, and simple style to your daily routine.
          </p>

          <div className="mt-7 border-y border-black/10 py-5">
            <p className="text-sm font-medium text-black/45">Price</p>

            <p className="mt-1 text-3xl font-black">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleAddToShoppingCart(product)}
            className="mt-7 w-full rounded-full bg-[#171717] py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#333]"
          >
            Add to cart +
          </button>

          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs font-medium text-black/50">
            <div className="rounded-xl bg-[#f7f7f5] px-2 py-3">
              Free shipping
            </div>

            <div className="rounded-xl bg-[#f7f7f5] px-2 py-3">
              Easy returns
            </div>

            <div className="rounded-xl bg-[#f7f7f5] px-2 py-3">
              Secure payment
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
