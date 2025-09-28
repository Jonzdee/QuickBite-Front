import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

function SignUp({ className, ...props }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      const res = await axios.post(`${API_URL}/users/signup`, payload);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // ✅ Pass phoneNumber to OTP page
      navigate("/otp", { state: { phoneNumber: formData.phoneNumber } });
    } catch (err) {
      console.error(err.response?.data || err.message);

      let backendError = "Signup failed";

      if (Array.isArray(err.response?.data)) {
        backendError = err.response.data.join(", ");
      } else if (err.response?.data?.message) {
        backendError = err.response.data.message;
      } else if (typeof err.response?.data === "string") {
        backendError = err.response.data;
      }

      setError(backendError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card
          className={cn(
            "w-full max-w-sm overflow-hidden md:max-w-2xl border-none",
            className
          )}
          {...props}
        >
          <CardContent className="grid p-0 md:grid-cols-1">
            <motion.form
              className="p-6 md:p-6"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex flex-col gap-5">
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-xl font-bold mb-4">Join QuickBite</h1>
                  <p className="text-muted-foreground text-sm">
                    Create your{" "}
                    <span className="font-semibold text-orange-500">
                      QuickBite Food Delivery
                    </span>{" "}
                    account
                  </p>
                </motion.div>

                {/* Full Name */}
                <motion.div
                  className="grid gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="your name here"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  className="grid gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your email here"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="grid gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="text"
                    placeholder="+234........"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Password */}
                <motion.div
                  className="grid gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {/* Confirm Password */}
                <motion.div
                  className="grid gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-amber-700"
                    disabled={loading}
                  >
                    {loading ? "Signing up..." : "Sign Up"}
                  </Button>
                </motion.div>

                <motion.div
                  className="text-center text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  Already have an account?{" "}
                  <Link to="/login" className="underline underline-offset-4">
                    Log in
                  </Link>
                </motion.div>
              </div>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
export default SignUp;
