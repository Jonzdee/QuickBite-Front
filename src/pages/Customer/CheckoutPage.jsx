
import React, { useState } from "react";
import usePaystack from "@/hooks/usePaystack";
import Swal from "sweetalert2";
function CheckoutPage() {
  usePaystack();

  const [cart] = useState([
    { id: 1, name: "Jollof Rice", price: 2500, qty: 2 },
    { id: 2, name: "Chicken Suya", price: 3500, qty: 1 },
  ]);


  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [shipping, setShipping] = useState("standard");

 
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shippingCost = shipping === "standard" ? 1200 : 2500;
  const taxes = Math.round(total * 0.075); // 7.5% VAT
  const grandTotal = total + shippingCost + taxes;

  
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const payWithPaystack = () => {
    if (!window.PaystackPop) {
      alert("⚠️ Payment library not loaded yet. Please try again.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: email || "guest@email.com",
      amount: grandTotal * 100, 
      currency: "NGN",
      ref: "QB-" + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "full_name",
            value: fullName,
          },
          { display_name: "Phone", variable_name: "phone", value: phone },
          { display_name: "Address", variable_name: "address", value: address },
        ],
      },
      callback: (response) => {
        Swal.fire({
          title: `Payment made successfully ${response.reference}`,
          icon: "success",
        });
      },
      onClose: () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Payment Cancelled",
        });
      },
    });

    handler.openIframe();
  };

  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
     
      <div>
   
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Contact information</h2>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-2 mb-3"
          />
        </div>

      
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Shipping information</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded p-2 mb-3"
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded p-2 mb-3"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded p-2 mb-3"
          />
        </div>

     
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Delivery method</h2>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="delivery"
                value="standard"
                checked={shipping === "standard"}
                onChange={() => setShipping("standard")}
              />
              <span>Standard (₦1,200)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="delivery"
                value="express"
                checked={shipping === "express"}
                onChange={() => setShipping("express")}
              />
              <span>Express (₦2,500)</span>
            </label>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Payment</h2>
          <button
            onClick={payWithPaystack}
            disabled={cart.length === 0}
            className="w-full bg-orange-600 text-white font-semibold text-lg py-3 rounded-xl hover:bg-orange-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Pay ₦{grandTotal.toLocaleString()}
          </button>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Order summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-2">
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>₦{(item.price * item.qty).toLocaleString()}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₦{shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>₦{taxes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 pt-2 border-t">
                <span>Total</span>
                <span>₦{grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;
