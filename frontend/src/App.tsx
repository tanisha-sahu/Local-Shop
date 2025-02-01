import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage";
import ProductList from "./pages/ProductList.tsx"
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login state to true when user logs in
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login state to false when user logs out
  };
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />} />
        {/* Define route for LoginPage */}
        <Route path="/login" element={<LoginPage onLogin={handleLogin} onClose={handleLogout}/>} />
        <Route path = "/store" element={<ProductList/>}/>
        <Route path = "/cart" element={<ShoppingCartPage/>}/>
        <Route path = "/profile" element={<ProfilePage/>}/>
        <Route path = "/checkout" element={<CheckoutPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
