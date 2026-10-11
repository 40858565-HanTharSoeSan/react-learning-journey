import { useState } from "react";
import { Layout } from "./Layout";
import { MenuItem } from "./MenuItem";
import { NewMenu } from "./NewMenu";

export interface Menu {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
}

export function Menus() {
  const menusStrFromLocalStorage = localStorage.getItem("menus") as string;
  const menusFromLocalStorage: Menu[] = menusStrFromLocalStorage
    ? JSON.parse(menusStrFromLocalStorage)
    : [];

  const [menus, setMenus] = useState<Menu[]>(menusFromLocalStorage);

  return (
    <Layout>
      <div style={{ backgroundColor: "#F1FAEE", width: "100%", padding: 10 }}>
        <h1>Menu</h1>
        <div>
          <NewMenu setMenus={setMenus} menus={menus} />
          <div style={{ marginTop: 50, display: "flex", flexWrap: "wrap" }}>
            {menus.map((menu) => {
              return <MenuItem key={menu.id} menu={menu} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
