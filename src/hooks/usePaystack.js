import { useEffect } from "react";

export default function usePaystack() {
  useEffect(() => {
    
    if (!document.querySelector('script[src="https://js.paystack.co/v1/inline.js"]')) {
      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
}
