function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.5fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black text-black">
                L
              </div>

              <span className="text-xl font-black tracking-[0.18em]">LUMA</span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
              Modern essentials designed for everyday living. Simple, useful,
              and made to last.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-bold">Shop</h3>

            <div className="mt-5 space-y-3 text-sm text-white/50">
              <a href="#" className="block transition hover:text-white">
                All Products
              </a>

              <a href="#" className="block transition hover:text-white">
                New Arrivals
              </a>

              <a href="#" className="block transition hover:text-white">
                Categories
              </a>

              <a href="#" className="block transition hover:text-white">
                Best Sellers
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold">Support</h3>

            <div className="mt-5 space-y-3 text-sm text-white/50">
              <a href="#" className="block transition hover:text-white">
                Contact
              </a>

              <a href="#" className="block transition hover:text-white">
                Shipping
              </a>

              <a href="#" className="block transition hover:text-white">
                Returns
              </a>

              <a href="#" className="block transition hover:text-white">
                FAQ
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold">Stay in the loop.</h3>

            <p className="mt-3 text-sm leading-6 text-white/50">
              Get updates about new products and special offers.
            </p>

            <div className="mt-5 flex overflow-hidden rounded-full bg-white p-1">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-black outline-none placeholder:text-black/30"
              />

              <button className="shrink-0 rounded-full bg-[#d97757] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#c46243]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LUMA. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>

            <a href="#" className="transition hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
