import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { introPages } from "@/components/IntroPage/introPages"; 


function IntroSlider() {
    const navigate = useNavigate();
    
  useEffect(() => {
      const showSplashOnce = localStorage.getItem("showSplashOnce");
  
      if (showSplashOnce){
        navigate("/login", {replace:true})
        return;
      }
  
      const timer =setTimeout(()=>{
        localStorage.setItem("showSplashOnce", "true")
        navigate("/login", {replace: true})
      }, 2000)
      return () => clearTimeout(timer);
    }, [navigate]);


  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); 

  const nextSlide = () => {
    if (index < introPages.length - 1) {
      setDirection(1);
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextSlide();
    } else if (info.offset.x > 100) {
      prevSlide();
    }
  };

  const current = introPages[index];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="flex min-h-svh items-center justify-center bg-gray-50 px-4 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            className="flex flex-col items-center text-center gap-6"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {/* Image */}
            <motion.img
              src={current.image}
              alt={current.title}
              className="w-48 h-48 md:w-72 md:h-72 object-contain"
            />

            {/* Text */}
            <div className="space-y-3">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                {current.title}
              </h1>
              <p className="text-gray-600 md:text-lg">{current.description}</p>
            </div>

            {/* Buttons */}
            {current.getStarted ? (
              <Link to={current.getStarted} className="w-full">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-4">
                  GET STARTED
                </Button>
              </Link>
            ) : (
              <>
                {/* Desktop Buttons */}
                <div className="hidden sm:grid sm:grid-cols-2 gap-3 w-full">
                  <Button
                    onClick={nextSlide}
                    className="bg-orange-400 hover:bg-white text-white w-full py-4 hover:text-orange-400"
                  >
                    NEXT
                  </Button>
                  <Link to={current.skip} className="w-full">
                    <Button className="bg-white border border-gray-300 hover:bg-orange-400 hover:text-white w-full py-4 text-orange-400">
                      SKIP
                    </Button>
                  </Link>
                </div>

                {/* Mobile Skip Button */}
                <div className="flex sm:hidden w-full">
                  <Link to={current.skip} className="w-full">
                    <Button className="bg-orange-400 border border-gray-300 hover:bg-orange-400 w-full py-4 text-white">
                      SKIP
                    </Button>
                  </Link>
                </div>
              </>
            )}

           
           
          </motion.div>
        </AnimatePresence>
      </div>
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {introPages.map((page, i) => (
                <button
                  key={page.id}
                  onClick={() => {
                    if (i > index) setDirection(1);
                    else if (i < index) setDirection(-1);
                    setIndex(i);
                  }}
                  className={`w-3 h-3 rounded-full transition ${
                    i === index ? "bg-orange-500 scale-110" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
    </div>
  );
}

export default IntroSlider;
