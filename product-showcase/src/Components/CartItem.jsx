
import React from "react";
import { IconButton } from "@mui/material";
import { Trash2 } from "lucide-react";
import Price from "./Price";
import QuantityControl from "./QuantityControl";

function CartItem({
  item,
  increase,
  decrease,
  remove
}) {
  return (
    <div className="cart-item">
      <div
        className="cart-emoji"
        style={{ background: item.color }}
      >
        {item.emoji}
      </div>

      <div className="cart-item-info">
        <strong>{item.name}</strong>

        <Price
          price={item.price}
          oldPrice={item.oldPrice}
        />

        <QuantityControl
          quantity={item.quantity}
          increase={increase}
          decrease={decrease}
        />
      </div>

      <IconButton color="error" onClick={remove}>
        <Trash2 size={19} />
      </IconButton>
    </div>
  );
}

export default CartItem;
