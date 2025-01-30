import { useState } from "react";
import { Input } from "../components/Input"; // Correct import
import { Button } from "../components/Button"; // Correct import
import { Card } from "../components/Card"; // Correct import
import { Loader2 } from "lucide-react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const sendOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  const verifyOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("OTP Verified! Redirecting...");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-96 p-6 rounded-2xl shadow-md ">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-center mb-4">
            {step === 1 ? "Create Your Account" : "Enter OTP"}
          </h2>
          {step === 1 ? (
            <>
              <Input
                type="text"
                placeholder="Enter your name"
                className="mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Enter your address"
                className="mb-4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                type="tel"
                placeholder="Enter mobile number"
                className="mb-4"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button
                className="w-full"
                onClick={sendOtp}
                disabled={name === "" || address === "" || phone.length !== 10 || loading}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Send OTP"}
              </Button>
            </>
          ) : (
            <>
              <Input
                type="text"
                placeholder="Enter OTP"
                className="mb-4"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <Button
                className="w-full"
                onClick={verifyOtp}
                disabled={otp.length !== 6 || loading}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Verify OTP"}
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
