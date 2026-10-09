import { Content } from "./Content";
import { Sidebar } from "./Sidebar";

export interface Menu {
  id: number;
  name: string;
}

export function Container() {
    const menus:Menu[] = [{id:1, name:"Shan Khout Swal"}]
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Content menus={menus}/>
    </div>
  );
}
