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
  { id: 1, name: "Strawberry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCdS-QQ7dTrYfpXMUYbBK0mKBxn91WrsXpg&s", weight: "160g", price: 65, oldPrice: 149, discount: 56, category: "Fruits" },
  { id: 2, name: "Lady Finger", image: "https://i.pinimg.com/736x/87/48/0a/87480a3980de07e9ccb4d52029f15d2a.jpg", weight: "500g", price: 32, oldPrice: 81, discount: 60, category: "Vegetables" },
  { id: 3, name: "Capsicum Green", image: "https://m.media-amazon.com/images/I/61nBnEY4ZjL._AC_UF1000,1000_QL80_.jpg", weight: "500g - 600g", price: 66, oldPrice: 137, discount: 51, category: "Vegetables" },
  { id: 4, name: "Carrot Red", image: "https://www.hhs1.com/hubfs/carrots%20on%20wood-1.jpg", weight: "500g", price: 56, oldPrice: 82, discount: 31, category: "Vegetables" },
  { id: 5, name: "Carrot Local", image: "https://www.hhs1.com/hubfs/carrots%20on%20wood-1.jpg", weight: "500g", price: 52, oldPrice: 99, discount: 47, category: "Vegetables" },
  { id: 6, name: "Cauliflower", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsF89vG82-ec9OsMxGOQwXz34_QVC9rBpGdA&s", weight: "300g", price: 27, oldPrice: 37, discount: 27, category: "Vegetables" },
];

const categories = ["All", "Fruits", "Vegetables", "Exotic Fruits", "Green Vegetables", "Root Vegetables"];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
      <Card
        sx={{
          width: { xs: "100%", sm: "100%", md: 150, lg: 180 }, // Adjust width based on screen size
          height: 280,
          m: 1,
          position: "relative",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Chip
          label={`${product.discount}% Off`}
          color="secondary"
          size="small"
          sx={{ position: "absolute", top: 5, left: 5 }}
        />
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            width: "100%", // Full width of the card
            height: 120, // Fixed height
            objectFit: "cover", // Prevents distortion
          }}
        />
        <CardContent sx={{ padding: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold" noWrap>
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {product.weight}
          </Typography>
          <Typography variant="body1" color="primary" fontWeight="bold">
            ₹{product.price}{" "}
            <Typography component="span" sx={{ textDecoration: "line-through", fontSize: 12, color: "gray" }}>
              ₹{product.oldPrice}
            </Typography>
          </Typography>
          <Button variant="contained" color="secondary" fullWidth size="small" sx={{ marginTop: 1 }} startIcon={<ShoppingCartIcon />}>
            Add
          </Button>
        </CardContent>
      </Card>
    );
  };

const ProductList: React.FC<{ category: string }> = ({ category }) => {
    const filteredProducts = category === "All" ? products : products.filter(p => p.category === category);
  
    return (
      <Grid 
        container 
        spacing={2} 
        justifyContent="flex-start" 
        sx={{ 
          '@media (max-width: 640px)': { // Small screens
            justifyContent: "center",
          }
        }}
      >
        {filteredProducts.map((product) => (
          <Grid 
            item 
            xs={6}  // 2 items per row on small screens
            sm={4}  // 3 items per row on medium screens
            md={2.3}  // 4 items per row on larger screens
            key={product.id}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    );
  };
  

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="container mx-auto mt-4">
        <div className="flex">
          {/* Sidebar with responsive width */}
          <aside
            className={`transition-all duration-300 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/6 xl:w-1/6 p-4 bg-white rounded-md shadow-md ${isSidebarOpen ? "block" : "hidden sm:block"}`}
          >
            <List>
              {categories.map((category) => (
                <ListItem key={category} disablePadding>
                  <ListItemButton
                    onClick={() => setSelectedCategory(category)}
                    sx={{
                      fontSize: "0.75rem", // smaller font size for categories
                      padding: "6px 12px", // smaller padding
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column", // Image and text will be stacked for small screens
                      textAlign: "center",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)", // optional hover effect
                      },
                    }}
                  >
                    {/* Category Image */}
                    <div style={{ marginBottom: "8px" }}>
                      <img
                        src={`https://media.istockphoto.com/id/174429248/photo/fresh-vegetables.jpg?s=612x612&w=0&k=20&c=fxlgOIET7gKa8M3rwkV974aUfB0gVpWiJQwUoxA4dtQ=`} // Placeholder image; replace with actual images if you have
                        alt={category}
                        style={{
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    {/* Category Name with Ellipsis for overflow */}
                    <ListItemText
                      primary={category}
                      sx={{
                        paddingLeft:"2px",
                        fontSize: "0.75rem", // smaller font size for text
                        whiteSpace: "normal", // Allow wrapping
                        overflow: "hidden",
                        textOverflow: "ellipsis", // Ellipsis for overflow text
                        textAlign: "center", // Align text in the center
                        display: "block", // Allow wrapping
                        maxWidth: "120px", // Limiting the width of the category name
                        lineHeight: "1.2rem", // Making sure text doesn’t overlap
                        WebkitLineClamp: 2, // Maximum of 2 lines
                        WebkitBoxOrient: "vertical", // Ensures text is vertically clamped
                    
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {/* Toggle Button for mobile */}
            <Button onClick={toggleSidebar} sx={{ display: { sm: "none" }, position: "absolute", top: 10, right: 10 }}>
              {isSidebarOpen ? "Close" : "Open"} Sidebar
            </Button>
          </aside>

          {/* Main Content */}
          <main className="w-full sm:w-5/6 p-4">
            <h1 className="text-2xl font-bold mb-4">{selectedCategory}</h1>
            <ProductList category={selectedCategory} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
