import { BrowserRouter, Routes, Route } from "react-router-dom";
import { introPages } from "./components/IntroPage/introPages";
import Intro from "./components/IntroPage/Intro";
import IntroSplash from "./components/IntroPage/IntroSplash";
import Home from "./pages/Customer/Home";
import Login from "./components/login/Login"
import SignUp from "./components/login/SignUp";
import ForgoteenPassword from "./components/ForgottenPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Splash screen */}
        <Route path="/intro" element={<IntroSplash />} />

        {/* Dynamic intro pages */}
        {introPages.map((page) => (
          <Route
            key={page.id}
            path={`/intro${page.id}`}
            element={<Intro {...page} />}
          />
        ))}

        {/* Main app */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgoteenPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
