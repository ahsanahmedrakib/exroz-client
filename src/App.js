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
import MyOrders from "./Components/Dashboard/MyOrders/MyOrders";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrders from "./Components/Dashboard/ManageOrders/ManageOrders";
import AddServices from "./Components/Dashboard/AddServices/AddServices";
import AddPricing from "./Components/Dashboard/AddPricing/AddPricing";
import DashboardHeader from "./Components/Dashboard/DashboardHeader/DashboardHeader";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import Orders from "./Components/Dashboard/Orders/Orders";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="order/:id" element={<Orders />}></Route>

          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <DashboardHeader></DashboardHeader>
              </PrivateRoute>
            }
          >
            <Route path={``} element={<DashboardHome></DashboardHome>}></Route>
            <Route path={`myorders`} element={<MyOrders></MyOrders>}></Route>
            <Route
              path={`addservices`}
              element={<AddServices></AddServices>}
            ></Route>
            <Route path={`makeadmin`} element={<MakeAdmin></MakeAdmin>}></Route>
            <Route
              path={`manageorders`}
              element={<ManageOrders></ManageOrders>}
            ></Route>
            <Route
              path={`addpricing`}
              element={<AddPricing></AddPricing>}
            ></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
