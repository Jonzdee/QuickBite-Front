import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion} from "framer-motion";
import QuickBiteLogo from "../../assets/Images/QuickBiteLogo.png";

function IntroSplash() {
 const navigate = useNavigate();
  useEffect(() => {
    
    const timer =setTimeout(()=>{
      localStorage.setItem("showSplashOnce", "true")
      navigate("/login", {replace: true})
    }, 2000)
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-svh items-center justify-center bg-gray-100">
      <motion.img
        src={QuickBiteLogo}
        alt="QuickBite Logo"
        className="w-64 h-64 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: [0, -15, 0] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default IntroSplash;
