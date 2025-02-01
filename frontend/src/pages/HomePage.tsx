import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import StoreCard from "../components/StoreCard.tsx";
import Navbar from "../components/Navbar.tsx";
import Carousel from '../components/OfferCanvas.tsx';
import LoginPage from "./LoginPage.tsx";
// import CheckoutPage from "./CheckoutPage.tsx";
import ProfilePage from "./ProfilePage.tsx";

interface Store {
  id: string;
  name: string;
  image: string;
  rating: number;
}

interface HomeProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

const Home = ({ isLoggedIn, onLogin, onLogout }: HomeProps) => {
  const [stores, setStores] = useState<Store[]>([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const sampleStores: Store[] = [
    { "id": "1", "name": "Fresh Mart", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6DyOHLsghI9lFalg73Q9FoxQv6UwVEQIeA&s", "rating": 2.5 },
    { "id": "2", "name": "Daily Needs", "image": "https://i.pinimg.com/236x/b8/ea/17/b8ea172d0dfc94790edadb5dc531222f.jpg", "rating": 4.2 },
    { "id": "3", "name": "Grocery Hub", "image": "https://thenewshop.in/images/1644479805444.jpeg", "rating": 4.8 },
    { "id": "4", "name": "Super Bazaar", "image": "https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg?semt=ais_hybrid", "rating": 3.9 },
    { "id": "5", "name": "Quick Pick", "image": "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-03/The%20New%20Shop.jpg", "rating": 4.5 },
    { "id": "6", "name": "Green Grocers", "image": "https://c8.alamy.com/comp/CF4H1C/the-exterior-of-a-local-convenience-shop-british-food-wine-store-in-CF4H1C.jpg", "rating": 3.2 },
    { "id": "7", "name": "Nature's Basket", "image": "https://www.shutterstock.com/image-photo/winchester-uk-aug-31-2024-260nw-2511391585.jpg", "rating": 4.7 },
    { "id": "8", "name": "Local Mart", "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_536/https://7heven.com/wp-content/uploads/2023/06/7-Heven.jpg", "rating": 3.8 },
    { "id": "9", "name": "Organic Fresh", "image": "https://c8.alamy.com/comp/T49C6D/american-candy-shop-in-oxford-street-sells-american-sweets-not-usually-easily-available-in-the-uk-T49C6D.jpg", "rating": 4.6 },
    { "id": "10", "name": "City Supermarket", "image": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-07/220719-american-candy-mb-1055-95daf7.jpg", "rating": 4.1 }
  ];

  useEffect(() => {
    setStores(sampleStores);
  }, []);

  const openLoginModal = () => {
    setIsLoginModalOpen(true); // Open the login modal
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false); // Close the login modal
  };

  // Handle store click event
  const handleStoreClick = () => {
    navigate("/store"); // Navigate to the /store route with the storeId
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogin={openLoginModal} onLogout={onLogout} />
      <Carousel />
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {stores.map((store) => (
            <Grid item xs={12} sm={6} md={4} key={store.id}>
              <div onClick={() => handleStoreClick()}
                style={{ cursor: 'pointer' }}
                >
                <StoreCard store={store} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ProfilePage/>
      {/* Conditionally render the login page modal */}
      {isLoginModalOpen && <LoginPage onLogin={onLogin} onClose={closeLoginModal} />}
    </>
  );
};

export default Home;
