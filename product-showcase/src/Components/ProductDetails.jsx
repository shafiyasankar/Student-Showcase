
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  IconButton
} from "@mui/material";
import { X } from "lucide-react";
import Price from "./Price";
import Rating from "./Rating";

function ProductDetails({ product, close, addToCart }) {
  return (
    <Dialog
      open={Boolean(product)}
      onClose={close}
      fullWidth
      maxWidth="sm"
    >
      {product && (
        <>
          <DialogTitle>
            {product.name}
            <IconButton
              onClick={close}
              sx={{ float: "right" }}
            >
              <X />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <div
              className="detail-emoji"
              style={{ background: product.color }}
            >
              {product.emoji}
            </div>

            <p>{product.description}</p>

            <Rating value={product.rating} />

            <Price
              price={product.price}
              oldPrice={product.oldPrice}
            />

            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                addToCart(product);
                close();
              }}
            >
              Add to Cart
            </Button>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}

export default ProductDetails;
