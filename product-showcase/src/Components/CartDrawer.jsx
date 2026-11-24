
import React from "react";
import { Drawer, IconButton, Button } from "@mui/material";
import { X, ShoppingCart } from "lucide-react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function CartDrawer({
  open,
  close,
  cart,
  increase,
  decrease,
  remove,
  clearCart,
  checkout
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Drawer anchor="right" open={open} onClose={close}>
      <div className="cart-drawer">
        <div className="drawer-heading">
          <h2>Shopping Cart ({count})</h2>

          <IconButton onClick={close}>
            <X />
          </IconButton>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <ShoppingCart size={55} />

            <h3>Your cart is empty</h3>

            <p>Explore our products and start shopping!</p>

            <Button variant="contained" onClick={close}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increase={() => increase(item.id)}
                decrease={() => decrease(item.id)}
                remove={() => remove(item.id)}
              />
            ))}

            <CartSummary
              total={total}
              clearCart={clearCart}
              checkout={checkout}
            />
          </>
        )}
      </div>
    </Drawer>
  );
}

export default CartDrawer;
