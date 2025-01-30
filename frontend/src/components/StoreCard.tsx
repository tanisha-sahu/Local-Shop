import { Card, CardMedia, CardContent, Typography, Rating } from "@mui/material";

interface Store {
  id: string;
  name: string;
  image: string;
  rating: number; // Accept rating
}

const StoreCard = ({ store }: { store: Store }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <CardMedia
      component="img"
      image={store.image}
      alt={store.name}
      sx={{ height: 180 }} // Fixed image height
    />
    <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Typography variant="h6">{store.name}</Typography>
      <Rating value={store.rating} precision={0.1} readOnly />
    </CardContent>
  </Card>
  );
};

export default StoreCard;
