
import React from "react";
import { Button } from "@mui/material";

function CartSummary({ total, clearCart, checkout }) {
  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>

      <div className="total-row">
        <span>Total Amount</span>

        <strong>
          ₹{total.toLocaleString("en-IN")}
        </strong>
      </div>

      <Button
        fullWidth
        variant="contained"
        onClick={checkout}
      >
        Proceed to Checkout
      </Button>

      <Button
        fullWidth
        color="error"
        onClick={clearCart}
      >
        Clear Cart
      </Button>

      <p>Demo checkout only. No payment connected.</p>
    </div>
  );
}

export default CartSummary;
