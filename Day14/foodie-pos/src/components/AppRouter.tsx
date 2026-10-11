import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Addons } from "./Addons";
import { Orders } from "./Orders";
import { AddonCategories } from "./AddonCategories";
import { Menus } from "./Menus";
import { Tables } from "./Tables";
import { MenuCategories } from "./MenuCategories";
import { Locations } from "./Locations";
import { Settings } from "./Settings";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/menu-categories" element={<MenuCategories />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/addon-categories" element={<AddonCategories />} />
        <Route path="/" element={<Orders />} />
        <Route path="/addons" element={<Addons />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
