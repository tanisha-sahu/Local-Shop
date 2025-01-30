import React, { useState } from 'react';
import { TextField, Button, CircularProgress, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import {SignupPage} from './SignupPage.tsx'
import { Link } from "react-router-dom";


interface LoginPageProps {
    onLogin: () => void;
    onClose: () => void;
}

const LoginModal: React.FC<LoginPageProps> = ({ onLogin, onClose }) => {
    const [step, setStep] = useState<1 | 2>(1);
    const [mobile, setMobile] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleMobileSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!mobile.match(/^\d{10}$/)) {
            setError('Please enter a valid 10-digit mobile number');
            return;
        }
        setError(null);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(2);
        }, 2000);
    };

    const handleOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.length !== 6) {
            setError('Please enter a valid 6-digit OTP');
            return;
        }
        setError(null);
        setLoading(true);
        setTimeout(() => {
            onLogin();
            onClose();
            setLoading(false);
            console.log('OTP Verified');
        }, 2000);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <div className="bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-lg border-2 border-gray-300 shadow-xl w-full max-w-md animate__animated animate__fadeIn relative">
                <IconButton className="absolute top-2 left-2" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {step === 1 && (
                    <form onSubmit={handleMobileSubmit} className="space-y-6">
                        <div>
                            <TextField
                                label="Mobile Number"
                                variant="outlined"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                fullWidth
                                required
                                className="bg-gray-100 rounded-lg"
                                type="tel"
                                placeholder="Enter your mobile number"
                                inputProps={{ maxLength: 10 }}
                            />
                        </div>
                        <Button type="submit" variant="contained" color="primary" fullWidth className="py-2 relative" disabled={loading}>
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Send OTP'}
                        </Button>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleOtpSubmit} className="space-y-6">
                        <div>
                            <TextField
                                label="OTP"
                                variant="outlined"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                fullWidth
                                required
                                className="bg-gray-100 rounded-lg"
                                type="text"
                                placeholder="Enter the OTP"
                                inputProps={{ maxLength: 6 }}
                            />
                        </div>
                        <Button type="submit" variant="contained" color="primary" fullWidth className="py-2 relative" disabled={loading}>
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Verify OTP'}
                        </Button>
                    </form>
                )}
                <div className="text-center mt-4 text-sm text-gray-600">
                    {/* <p>
                        By logging in, you agree to our{' '}
                        <a href="/terms" className="text-blue-500 hover:underline">
                            Terms & Conditions
                        </a>
                    </p> */}
                    <p className="text-center mt-4 text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
                 Create one
                </Link>
                </p>
                </div>

            </div>
        </div>
    );
};

export default LoginModal;