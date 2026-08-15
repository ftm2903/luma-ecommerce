import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart({
  shoppingCart,
  totalCartItems,
  setIsCartOpen,
  handleAddToShoppingCart,
  handleDecreaseQuantity,
  handleRemoveFromCart,
  subtotal,
  handleClearCart,
}) {
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const navigate = useNavigate();

  const shippingCost = subtotal >= 50 || shoppingCart.length === 0 ? 0 : 9.99;

  const total = subtotal + shippingCost;

  function handleCheckout() {
    if (shoppingCart.length === 0) {
      return;
    }

    setIsOrderComplete(true);
  }

  function handleContinueShopping() {
    handleClearCart();
    setIsCartOpen(false);
    navigate("/");
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Dark overlay */}
      <button
        aria-label="Close cart"
        className="absolute inset-0 h-full w-full bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart panel */}
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#f7f7f5] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d97757]">
              Your bag
            </p>

            <h2 className="mt-1 text-2xl font-black">
              {isOrderComplete ? "Order Complete" : "Shopping Cart"}
            </h2>
          </div>

          <button
            aria-label="Close cart"
            onClick={() => setIsCartOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-xl transition hover:bg-black hover:text-white"
          >
            ×
          </button>
        </div>

        {isOrderComplete ? (
          /* Success message */
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
              ✓
            </div>

            <h3 className="mt-6 text-2xl font-black">
              Order placed successfully!
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-6 text-black/55">
              Thank you for shopping with LUMA. Your order has been received.
            </p>

            <div className="mt-7 w-full rounded-2xl border border-black/5 bg-white p-5 text-left">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-black/50">Items</span>

                <span className="font-bold">
                  {totalCartItems} item{totalCartItems !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-3">
                <span className="font-medium text-black/50">Total paid</span>

                <span className="text-xl font-black">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleContinueShopping}
              className="mt-7 w-full rounded-full bg-[#171717] py-4 text-sm font-bold text-white transition hover:bg-[#333]"
            >
              Continue shopping →
            </button>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {shoppingCart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="text-5xl">🛒</span>

                  <h3 className="mt-5 text-xl font-bold">Your cart is empty</h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-black/50">
                    Add products you love and they will appear here.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {shoppingCart.map((cartItem) => (
                    <article
                      key={cartItem.id}
                      className="flex gap-4 rounded-2xl border border-black/5 bg-white p-3"
                    >
                      <img
                        src={cartItem.image}
                        alt={cartItem.name}
                        className="h-20 w-20 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-xs font-bold uppercase tracking-wider text-black/40">
                              {cartItem.category}
                            </p>

                            <h3 className="mt-1 truncate font-bold">
                              {cartItem.name}
                            </h3>
                          </div>

                          <button
                            aria-label={`Remove ${cartItem.name}`}
                            onClick={() => handleRemoveFromCart(cartItem.id)}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg text-black/40 transition hover:bg-red-50 hover:text-red-600"
                          >
                            ×
                          </button>
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-3">
                          <p className="font-black">
                            ${cartItem.price.toFixed(2)}
                          </p>

                          <div className="flex items-center rounded-full border border-black/10 bg-[#f7f7f5] p-1">
                            <button
                              aria-label={`Decrease ${cartItem.name} quantity`}
                              onClick={() =>
                                handleDecreaseQuantity(cartItem.id)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full text-lg transition hover:bg-white"
                            >
                              −
                            </button>

                            <span className="flex min-w-8 justify-center text-sm font-bold">
                              {cartItem.quantity}
                            </span>

                            <button
                              aria-label={`Increase ${cartItem.name} quantity`}
                              onClick={() => handleAddToShoppingCart(cartItem)}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-lg transition hover:bg-white"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-black/10 bg-white px-6 py-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-black/50">Subtotal</span>

                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-black/50">Shipping</span>

                  <span className="font-bold text-[#d97757]">
                    {shippingCost === 0 ? "Free" : `$${shippingCost}`}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-black/10 pt-4">
                  <div>
                    <p className="text-sm font-medium text-black/50">Total</p>

                    <p className="mt-1 text-xs text-black/40">
                      {totalCartItems} item
                      {totalCartItems !== 1 ? "s" : ""}
                    </p>
                  </div>

                  <span className="text-2xl font-black">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <button
                  type="button"
                  disabled={shoppingCart.length === 0}
                  onClick={handleCheckout}
                  className="w-full rounded-full bg-[#171717] py-4 text-sm font-bold text-white transition hover:bg-[#333] disabled:cursor-not-allowed disabled:bg-black/20"
                >
                  Checkout →
                </button>

                {shoppingCart.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearCart}
                    className="w-full rounded-full border border-red-200 bg-red-50 py-3 text-sm font-bold text-red-600 transition hover:border-red-300 hover:bg-red-100 hover:text-red-700"
                  >
                    Clear cart
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;
