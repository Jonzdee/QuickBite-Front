import { BrowserRouter, Routes, Route } from "react-router-dom";
import { introPages } from "./components/IntroPage/introPages";
import Intro from "./components/IntroPage/Intro";
import IntroSplash from "./components/IntroPage/IntroSplash";
import Home from "./pages/Customer/Home";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Landing from "./pages/Landing/Landing";
import Default from "./pages/DefaultPage/Default";
import Page from "./pages/Vendor/Page";
import RiderPage from "./pages/Rider/RiderPage";
import CheckoutPage from "./pages/Customer/CheckoutPage";
import VendorLogin from "./components/vendor/VendorLogin";
import VendorForgotPassword from "./components/vendor/VendorForgotPassword";
import VendorSignup from "./components/vendor/VendorSignup";
import ScrollToTop from "./components/ScrollToTop";
import AllowLocation from "./components/login/AllowLocation";
import Dashboard from "./vendor/pages/Dashboard";
import ChefLayout from "./vendor/layout/ChefLayout";
import AddNewItem from "./vendor/pages/AddNewItem";
import MyFoodList from "./vendor/pages/MyFoodList";
import ProductDetails from "./components/landingComponents/ProductDetails";
import OTP from "./components/login/OTP";
import ForgetPassword from "./components/login/ForgetPassword";
import Notifications from "./vendor/pages/Notifications";
import Profile from "./vendor/pages/Profile";
import Orders from "./vendor/pages/Orders";
import Reviews from "./vendor/pages/Reviews";
import VendorOtp from "./components/vendor/VendorOtp";
import Overview from "./components/riders/Overview";
import Jobs from "./components/riders/Jobs";
import Earnings from "./components/riders/Earnings";
import Performance from "./components/riders/Performance";
import Schedule from "./components/riders/Schedule";
import Map from "./components/riders/Map";
import Support from "./components/riders/Support";
import Inbox from "./components/riders/Inbox";
import Account from "./components/riders/Acount";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/intro" element={<IntroSplash />} />

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
          <Route path="/getlocation" element={<AllowLocation />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* Riders Routes */}
          <Route path="/overview" element={<Overview />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/map" element={<Map />} />
          <Route path="/support" element={<Support />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/account" element={<Account />} />

          {/* Vendors routes both dashboard/landingpage */}
          <Route element={<ChefLayout />}>
            <Route path="/chef/dashboard" element={<Dashboard />} />
            <Route path="/chef/foods" element={<MyFoodList />} />
            <Route path="/chef/add-food" element={<AddNewItem />} />
            <Route path="/chef/reviews" element={<Reviews />} />
            <Route path="/chef/orders" element={<Orders />} />
            <Route path="/chef/notifications" element={<Notifications />} />
            <Route path="/chef/profile" element={<Profile />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landingpage" element={<Landing />} />
          <Route path="/home" element={<Default />} />
          <Route path="/vendors" element={<Page />} />
          <Route path="/riders" element={<RiderPage />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/vendor-otp" element={<VendorOtp />} />
          <Route path="/vendor-signup" element={<VendorSignup />} />
          <Route path="/forgot-password" element={<VendorForgotPassword />} />
          <Route path="/getlocation" element={<AllowLocation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
