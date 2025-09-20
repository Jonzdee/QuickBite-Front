import { BrowserRouter, Routes, Route } from "react-router-dom";
import { introPages } from "./components/IntroPage/introPages";
import Intro from "./components/IntroPage/Intro";
import IntroSplash from "./components/IntroPage/IntroSplash";
import Home from "./pages/Customer/Home";
import Login from "./components/login/Login"
import SignUp from "./components/login/SignUp";
import AllowLocation from "./components/login/AllowLocation";
import Dashboard from "./vendor/pages/Dashboard";
import ChefLayout from "./vendor/layout/ChefLayout";
import AddNewItem from "./vendor/pages/AddNewItem";
import MyFoodList from "./vendor/pages/MyFoodList";

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
        <Route path="/getlocation" element={<AllowLocation />} />

        {/* Chef routes */}
        <Route element={<ChefLayout />}>
          <Route path="/chef/dashboard" element={<Dashboard />} />
          <Route path="/chef/foods" element={<MyFoodList />} />
          <Route path="/chef/add-food" element={<AddNewItem />} />
          {/*<Route path="/chef/orders" element={<Orders />} />
          <Route path="/chef/notifications" element={<Notifications />} />
          <Route path="/chef/messages" element={<Messages />} />
          <Route path="/chef/profile" element={<Profile />} />*/}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
