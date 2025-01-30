import React, { useState } from "react";
import { IconButton, Button, CircularProgress, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


interface LoginModalProps {
  onLogin: () => void;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onLogin, onClose }) => {
  const [step, setStep] = useState<"login" | "register" | "otp">("login");
  const [mobile, setMobile] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile.match(/^\d{10}$/)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    if (step === "register" && (!name || !address)) {
      setError("Please enter all details");
      return;
    }

    setError(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 2000);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setError(null);
    setLoading(true);
    setTimeout(() => {
      onLogin();
      onClose();
      setLoading(false);
      console.log("OTP Verified");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md relative transition-transform transform">
        <IconButton
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            color: 'rgba(0, 0, 0, 0.7)',
            '&:hover': { color: 'rgba(0, 0, 0, 0.9)' },
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
    
        <Typography variant="h5" align="center" color="textPrimary" sx={{ mb: 4, fontWeight: 'bold' }}>
          {step === "login"
            ? "Login to Your Account"
            : step === "register"
            ? "Create an Account"
            : "Enter OTP"}
        </Typography>
    
        {error && (
          <Typography color="error" align="center" sx={{ mb: 4, fontSize: '0.875rem' }}>
            {error}
          </Typography>
        )}
    
        {step === "login" && (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <TextField
              label="Mobile Number"
              variant="outlined"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              fullWidth
              required
              type="tel"
              inputProps={{ maxLength: 10 }}
              sx={{
                borderRadius: 2,
                '& .MuiInputBase-root': {
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover .MuiOutlinedInput-root': {
                  borderColor: 'primary.main',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{
                borderRadius: 2,
                padding: '12px',
                '&:hover': { backgroundColor: 'primary.dark' },
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Send OTP"}
            </Button>
            <Typography variant="body2" align="center" sx={{ mt: 2, fontSize: '0.875rem' }}>
              Don't have an account?{" "}
              <Button
                onClick={() => setStep("register")}
                sx={{ color: 'blue', fontWeight: 'bold', textTransform: 'none' }}
              >
                Register
              </Button>
            </Typography>
          </form>
        )}
    
        {step === "register" && (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              sx={{
                borderRadius: 2,
                '& .MuiInputBase-root': {
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover .MuiOutlinedInput-root': {
                  borderColor: 'primary.main',
                },
              }}
            />
            <TextField
              label="Address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
              required
              sx={{
                borderRadius: 2,
                '& .MuiInputBase-root': {
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover .MuiOutlinedInput-root': {
                  borderColor: 'primary.main',
                },
              }}
            />
            <TextField
              label="Mobile Number"
              variant="outlined"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              fullWidth
              required
              type="tel"
              inputProps={{ maxLength: 10 }}
              sx={{
                borderRadius: 2,
                '& .MuiInputBase-root': {
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover .MuiOutlinedInput-root': {
                  borderColor: 'primary.main',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{
                borderRadius: 2,
                padding: '12px',
                '&:hover': { backgroundColor: 'primary.dark' },
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Send OTP"}
            </Button>
            <Typography variant="body2" align="center" sx={{ mt: 2, fontSize: '0.875rem' }}>
              Already have an account?{" "}
              <Button
                onClick={() => setStep("login")}
                sx={{ color: 'blue', fontWeight: 'bold', textTransform: 'none' }}
              >
                Login
              </Button>
            </Typography>
          </form>
        )}
    
        {step === "otp" && (
          <form onSubmit={handleOtpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <TextField
              label="OTP"
              variant="outlined"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              fullWidth
              required
              type="text"
              inputProps={{ maxLength: 6 }}
              sx={{
                borderRadius: 2,
                '& .MuiInputBase-root': {
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover .MuiOutlinedInput-root': {
                  borderColor: 'primary.main',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{
                borderRadius: 2,
                padding: '12px',
                '&:hover': { backgroundColor: 'primary.dark' },
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Verify OTP"}
            </Button>
          </form>
        )}
      </div>
    </div>
    
  );
};

export default LoginModal;
