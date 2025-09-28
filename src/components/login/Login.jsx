import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; 

function Login({ className, ...props }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    try {
      setLoading(true);
      setError("");

      const res = await axios.post(`${API_URL}/users/login`, formData);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/getlocation");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);

      let backendError = "Login failed";
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
            "w-full max-w-sm overflow-hidden md:max-w-full border-none",
            className
          )}
          {...props}
        >
          <CardContent className="grid p-0 md:grid-cols-1">
            <motion.form
              className="p-6 md:p-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-5">
                
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-xl font-bold mb-4">Welcome To QuickBite</h1>
                  <p className="text-muted-foreground text-sm">
                    Login to your{" "}
                    <span className="font-semibold text-orange-500">
                      QuickBite Food Delivery
                    </span>{" "}
                    account
                  </p>
                </motion.div>

               
                <motion.div
                  className="grid gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
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

                <motion.div
                  className="grid gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="/forget-password"
                      className="ml-auto text-xs underline-offset-2 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                
                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

             
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-amber-700"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </motion.div>

               
                <motion.div
                  className="relative text-center text-xs after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or continue with
                  </span>
                </motion.div>

             
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    type="button"
                    className="w-full text-xs bg-black text-white hover:bg-gray-800 transition"
                  >
                    Apple
                  </Button>
                  <Button
                    type="button"
                    className="w-full text-xs bg-white text-gray-800 border hover:bg-gray-100 transition"
                  >
                    Google
                  </Button>
                </motion.div>

                
                <motion.div
                  className="text-center text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  New to QuickBite?{" "}
                  <Link to="/signup" className="underline underline-offset-4">
                    Create an account
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

export default Login;
