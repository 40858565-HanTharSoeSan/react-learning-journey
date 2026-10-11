import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddonCategories } from "./AddonCategories";
import { Addons } from "./Addons";
import { Locations } from "./Locations";
import { MenuCategories } from "./MenuCategories";
import { Menus } from "./Menus";
import { Orders } from "./Orders";
import { Settings } from "./Settings";
import { Tables } from "./Tables";
import Login from "./Login";
import Register from "./Register";
import PrivateRoutes from "./PrivateRoutes";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Orders />} />
          <Route path="/menu-categories" element={<MenuCategories />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/addon-categories" element={<AddonCategories />} />
          <Route path="/addons" element={<Addons />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
