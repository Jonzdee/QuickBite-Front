import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

function OTP() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [timer, setTimer] = useState(60);

  const phoneNumber = location.state?.phoneNumber;

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      console.log("Verifying with:", { otp, phoneNumber });

      const res = await axios.post(`${API_URL}/vendors/verify-otp`, {
        otp,
        phoneNumber,
      });

      if (res.status === 200) {
        navigate("/chef/dashboard");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(
        err.response?.data?.message || "OTP verification failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };
  const handleResend = async () => {
    try {
      setResending(true);
      setError("");
      setSuccess("");

      console.log("Resending OTP to:", phoneNumber);

      await axios.post(`${API_URL}/vendors/resend-otp`, { phoneNumber });

      setSuccess("OTP resent successfully!");
      setTimer(60);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to resend OTP.");
    } finally {
      setResending(false);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="w-full max-w-sm border-none shadow-lg">
          <CardContent className="p-6">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <h1 className="text-xl font-bold text-center">
                OTP Verification
              </h1>
              <p className="text-sm text-muted-foreground text-center">
                Enter the OTP sent to your phone{" "}
                {phoneNumber && (
                  <span className="font-semibold">{phoneNumber}</span>
                )}
              </p>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              {success && (
                <p className="text-green-500 text-sm text-center">{success}</p>
              )}

              <div className="grid gap-2">
                <Label htmlFor="otp">OTP Code</Label>
                <Input
                  id="otp"
                  inputMode="numeric"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-amber-700"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full mt-2"
                disabled={resending || timer > 0}
                onClick={handleResend}
              >
                {resending
                  ? "Resending..."
                  : timer > 0
                  ? `Resend OTP in ${timer}s`
                  : "Resend OTP"}
              </Button>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default OTP;
