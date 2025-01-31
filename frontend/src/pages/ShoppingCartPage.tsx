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
      { 
        id: 1, 
        name: "Fresh Apples", 
        price: 3.99, 
        quantity: 1, 
        image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg" 
      },
      { 
        id: 2, 
        name: "Organic Eggs", 
        price: 4.99, 
        quantity: 2, 
        image: "https://m.media-amazon.com/images/I/31ra3zrxejL._AC_UF894,1000_QL80_.jpg" 
      },
      { 
        id: 3, 
        name: "Whole Wheat Bread", 
        price: 2.49, 
        quantity: 1, 
        image: "https://www.foodandwine.com/thmb/Z2AE53BGYP2U-kXhtbVwXZQX8sc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Perfect-Sandwich-Bread-FT-RECIPE0723-dace53e15a304942acbc880b0ae34f5a.jpg" 
      },
      { 
        id: 4, 
        name: "Milk (1 Liter)", 
        price: 1.29, 
        quantity: 2, 
        image: "https://5.imimg.com/data5/SP/JB/KZ/SELLER-108598973/fresh-milk1-jpg-500x500.jpg" 
      },
      { 
        id: 5, 
        name: "Tomatoes (2 Kg)", 
        price: 5.99, 
        quantity: 1, 
        image: "https://m.media-amazon.com/images/I/61ZJhcdG7LL._AC_UF1000,1000_QL80_.jpg" 
      }, 
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
            <Grid item xs={12} md={8}>
              {/* Item List */}
              {cart.map((item) => (
                <Card key={item.id} variant="outlined" sx={{ mb: 3 }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={4} sm={3}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
                      </Grid>
                      <Grid item xs={8} sm={9}>
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
              ))}
            </Grid>

            <Grid item xs={12} md={4}>
              {/* Right Side - Bill Receipt */}
              <Card variant="outlined" sx={{ p: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Order Summary
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="body1">Subtotal</Typography>
                    <Typography variant="body1">${totalPrice}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="body1">Shipping</Typography>
                    <Typography variant="body1">Free</Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h6">${totalPrice}</Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleProceedToPayment}
                    fullWidth
                    disabled={loading || cart.length === 0}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Proceed to Payment'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default ShoppingCartPage;
