import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login({ className, ...props }) {
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
            >
              <div className="flex flex-col gap-5">
                
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-xl font-bold mb-4">
                    Welcome To QuickBite
                  </h1>
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
                      to="#"
                      className="ml-auto text-xs underline-offset-2 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </motion.div>

                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link to="/getlocation">
                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-amber-700"
                    >
                      Login
                    </Button>
                  </Link>
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

                {/* Signup Link */}
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
