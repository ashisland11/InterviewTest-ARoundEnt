import React from "react";
import { Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductCard = ({ product, onDelete }) => {
  const { name, description, price, image } = product;

  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
     <CardMedia
        component="img"
        alt={name}
        height="140"
        image={product.imageUrl} 
/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${price}
        </Typography>
      </CardContent>
      <IconButton
        onClick={() => onDelete(product.id)}
        color="error"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};

export default ProductCard;
