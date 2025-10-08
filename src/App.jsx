import { BrowserRouter, Routes, Route } from "react-router-dom";
import { introPages } from "../src/components/IntroPage/introPages";
import Intro from "../src/components/IntroPage/Intro";
import IntroSplash from "../src/components/IntroPage/IntroSplash";
import Home from "../src/pages/Customer/Home";
import Login from "../src/components/login/Login"
import SignUp from "../src/components/login/SignUp";
import ForgoteenPassword from "./components/login/ForgottenPassword";
import Reviews from "./components/chefInterface/Reviews";
import ProfileDashboard from "./components/chefInterface/ProfileDashboard";
import WithdrawSuccess from "./components/chefInterface/WithdrawSucess";
import ChangePassword from "./components/chefInterface/ChangePassword";
import OrderPage from "./components/chefInterface/OrderPage";
import Notifications from "./components/chefInterface/Notifications";
import Messages from "./components/chefInterface/Messages";
import PrivacyPolicy from "./About/PrivacyPolicy";
import TermsOfUse from "./About/TermsOfUse";
import RidersLandingPage from "./components/Riders/RidersLandingPage";






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
       
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/dashboard" element={<ProfileDashboard />} />
        <Route path="/withdraw-success" element={<WithdrawSuccess />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/riders-landingpage" element={<RidersLandingPage />} />
        


        
        
        
        
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
