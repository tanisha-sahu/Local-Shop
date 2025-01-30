import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid, Button, Chip, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Product {
  id: number;
  name: string;
  image: string;
  weight: string;
  price: number;
  oldPrice: number;
  discount: number;
  category: string;
}

const products: Product[] = [
    { id: 1, name: "Strawberry", image: "https://5.imimg.com/data5/SP/JB/KZ/SELLER-108598973/fresh-milk1-jpg-500x500.jpg", weight: "160g", price: 65, oldPrice: 149, discount: 56, category: "Fruits" },
    { id: 2, name: "Lady Finger", image:  "https://m.media-amazon.com/images/I/61ZJhcdG7LL._AC_UF1000,1000_QL80_.jpg", weight: "500g", price: 32, oldPrice: 81, discount: 60, category: "Vegetables" },
    { id: 3, name: "Capsicum Green", image: "https://m.media-amazon.com/images/I/31ra3zrxejL._AC_UF894,1000_QL80_.jpg" , weight: "500g - 600g", price: 66, oldPrice: 137, discount: 51, category: "Vegetables" },
    { id: 4, name: "Carrot Red", image: "https://5.imimg.com/data5/SP/JB/KZ/SELLER-108598973/fresh-milk1-jpg-500x500.jpg", weight: "500g", price: 56, oldPrice: 82, discount: 31, category: "Vegetables" },
    { id: 5, name: "Carrot Local", image: "https://m.media-amazon.com/images/I/31ra3zrxejL._AC_UF894,1000_QL80_.jpg" , weight: "500g", price: 52, oldPrice: 99, discount: 47, category: "Vegetables" },
    { id: 6, name: "Cauliflower", image:  "https://m.media-amazon.com/images/I/61ZJhcdG7LL._AC_UF1000,1000_QL80_.jpg", weight: "300g", price: 27, oldPrice: 37, discount: 27, category: "Vegetables" },
  ];

const categories = ["All", "Fruits", "Vegetables"];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card sx={{ width: 200, height: 280, m: 1, position: "relative", boxShadow: 3, borderRadius: 2 }}>
      <Chip
        label={`${product.discount}% Off`}
        color="secondary"
        size="small"
        sx={{ position: "absolute", top: 5, left: 5 }}
      />
      <CardMedia component="img" height="120" image={product.image} alt={product.name} sx={{ objectFit: "contain" }} />
      <CardContent sx={{ padding: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold" noWrap>
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.weight}
        </Typography>
        <Typography variant="body1" color="primary" fontWeight="bold">
          ₹{product.price} <Typography component="span" sx={{ textDecoration: "line-through", fontSize: 12, color: "gray" }}>₹{product.oldPrice}</Typography>
        </Typography>
        <Button variant="contained" color="secondary" fullWidth size="small" sx={{ marginTop: 1 }} startIcon={<ShoppingCartIcon />}>Add</Button>
      </CardContent>
    </Card>
  );
};

const ProductList: React.FC<{ category: string }> = ({ category }) => {
  const filteredProducts = category === "All" ? products : products.filter(p => p.category === category);
  return (
    <Grid container spacing={1} justifyContent="flex-start">
      {filteredProducts.map((product) => (
        <Grid item key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {/* Categories on the left */}
      <Grid item xs={3} sx={{ borderRight: "1px solid #ddd", paddingRight: 2 }}>
        <List>
          {categories.map((category) => (
            <ListItem key={category} disablePadding>
              <ListItemButton selected={selectedCategory === category} onClick={() => setSelectedCategory(category)}>
                <ListItemText primary={category} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      {/* Products on the right */}
      <Grid item xs={9}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Fruits & Vegetables
        </Typography>
        <ProductList category={selectedCategory} />
      </Grid>
    </Grid>
  );
};

export default App;
