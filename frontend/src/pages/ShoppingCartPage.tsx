import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Button,
  Box,
  Divider,
  CircularProgress,
  useMediaQuery
} from '@mui/material';
import { Remove, Add, Delete } from '@mui/icons-material';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const ShoppingCartPage: React.FC = () => {
  // Sample cart data
  const initialCart: CartItem[] = [
    { id: 1, name: "Product 1", price: 20, quantity: 1, image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: 50, quantity: 2, image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: 30, quantity: 1, image: "/images/product3.jpg" }
  ];

  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [loading, setLoading] = useState<boolean>(false);

  const handleQuantityChange = (id: number, action: 'increase' | 'decrease'): void => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const updatedQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(updatedQuantity, 1) };
      }
      return item;
    }));
  };

  const handleRemoveItem = (id: number): void => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleProceedToPayment = (): void => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      alert("Payment Successful!");
    }, 2000);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Your Shopping Cart
        </Typography>

        {cart.length === 0 ? (
          <Typography variant="h6" align="center" color="textSecondary">
            Your cart is empty.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card variant="outlined">
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body1" color="textSecondary">${item.price}</Typography>

                        <Box mt={2} display="flex" alignItems="center" justifyContent="space-between">
                          <Box display="flex" alignItems="center">
                            <IconButton
                              onClick={() => handleQuantityChange(item.id, 'decrease')}
                              disabled={item.quantity <= 1}
                            >
                              <Remove />
                            </IconButton>
                            <TextField
                              value={item.quantity}
                              size="small"
                              style={{ width: '40px', textAlign: 'center' }}
                              InputProps={{
                                readOnly: true,
                              }}
                            />
                            <IconButton onClick={() => handleQuantityChange(item.id, 'increase')}>
                              <Add />
                            </IconButton>
                          </Box>
                          <IconButton onClick={() => handleRemoveItem(item.id)} color="error">
                            <Delete />
                          </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Total: ${totalPrice}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleProceedToPayment}
            disabled={loading || cart.length === 0}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Proceed to Payment'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ShoppingCartPage;
