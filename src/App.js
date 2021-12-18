import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home/Home";
import Pricing from "./Components/Pages/Pricing/Pricing";
import Services from "./Components/Pages/Services/Services";
import Contact from "./Components/Pages/Contact/Contact";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import NotFound from "./Components/Pages/NotFound/NotFound";
import PrivateRoute from "./Components/Dashboard/PrivateRoute/PrivateRoute";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import MyOrders from "./Components/Dashboard/MyOrders/MyOrders";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Components/Dashboard/AdminRoute/AdminRoute";
import ManageOrders from "./Components/Dashboard/ManageOrders/ManageOrders";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>}/>
          <Route path="/dashboard/myorders" element={<PrivateRoute><MyOrders></MyOrders></PrivateRoute>}/>
          <Route path="/dashboard/makeadmin" element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}/>
          <Route path="/dashboard/manageorders" element={<AdminRoute><ManageOrders></ManageOrders></AdminRoute>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
