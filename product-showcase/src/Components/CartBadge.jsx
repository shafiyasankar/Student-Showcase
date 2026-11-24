
import React from "react";
import { Badge } from "@mui/material";
import { ShoppingCart } from "lucide-react";

function CartBadge({ count }) {
  return (
    <Badge badgeContent={count} color="error">
      <ShoppingCart size={23} />
    </Badge>
  );
}

export default CartBadge;
