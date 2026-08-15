function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-10 pt-6 sm:px-8 sm:pt-10">
      <div className="relative overflow-hidden rounded-4xl bg-[#dedbd2]">
        <div className="grid min-h-150 grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-16">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-[#d97757]" />
              New Season
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl">
              Simple things.
              <br />
              <span className="text-[#d97757]">Made better.</span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-7 text-black/60 sm:text-lg">
              Everyday essentials designed with intention. Discover pieces that
              make your daily life a little better.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#shop"
                className="rounded-full bg-[#171717] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#2d2d2d]"
              >
                Shop Collection
              </a>

              <a
                href="#categories"
                className="rounded-full border border-black/10 bg-white/70 px-7 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore Categories
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <div className="flex -space-x-3">
                <div className="h-9 w-9 rounded-full border-2 border-[#dedbd2] bg-[#b8a99a]" />
                <div className="h-9 w-9 rounded-full border-2 border-[#dedbd2] bg-[#8d9a8a]" />
                <div className="h-9 w-9 rounded-full border-2 border-[#dedbd2] bg-[#d7b9a6]" />
              </div>

              <div>
                <div className="flex text-[#d97757]">★★★★★</div>

                <p className="text-xs text-black/50">Loved by 10k+ customers</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative min-h-105 overflow-hidden lg:min-h-0">
            <img
              src="/images/watches.avif"
              alt="LUMA product"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-r from-[#dedbd2]/20 via-transparent to-black/10" />

            <div className="absolute bottom-7 right-7 rounded-2xl border border-white/30 bg-white/80 p-4 shadow-xl backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
                Featured
              </p>

              <p className="mt-1 font-bold">Everyday Collection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-3">
        <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1eee8]">
            ✓
          </span>

          <div>
            <p className="text-sm font-bold">Free Shipping</p>
            <p className="text-xs text-black/50">On orders over $50</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1eee8]">
            ↩
          </span>

          <div>
            <p className="text-sm font-bold">Easy Returns</p>
            <p className="text-xs text-black/50">30 day return policy</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1eee8]">
            🔒
          </span>

          <div>
            <p className="text-sm font-bold">Secure Checkout</p>
            <p className="text-xs text-black/50">Your data is protected</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
