import { Menu } from "./Menu";
import { NewMenu } from "./NewMenu";

export interface Menu {
  name: string;
  price: number;
  isAvailable: boolean;
}

export function Content() {
  const menus: Menu[] = [];
  return (
    <div style={{ backgroundColor: "#F1FAEE", width: "100%", padding: 10 }}>
      <h1>Menu</h1>
      <div>
        <NewMenu />
        <div style={{ marginTop: 50 }}>
          <Menu />
        </div>
      </div>
    </div>
  );
}
