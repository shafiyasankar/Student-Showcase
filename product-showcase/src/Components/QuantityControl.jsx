
import React from "react";
import { IconButton } from "@mui/material";
import { Plus, Minus } from "lucide-react";

function QuantityControl({
  quantity,
  increase,
  decrease
}) {
  return (
    <div className="quantity-control">
      <IconButton size="small" onClick={decrease}>
        <Minus size={15} />
      </IconButton>

      <span>{quantity}</span>

      <IconButton size="small" onClick={increase}>
        <Plus size={15} />
      </IconButton>
    </div>
  );
}

export default QuantityControl;
