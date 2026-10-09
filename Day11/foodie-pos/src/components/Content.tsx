import { Menu } from "./Container";
import { NewMenuDialog } from "./NewMenuDialog";

interface Props {
  menus: Menu[];
}
export function Content(props: Props) {
  console.log("Content props:", props.menus);
  return (
    <div
      style={{ width: "100%", backgroundColor: "lightblue", padding: "15px" }}
    >
      <NewMenuDialog />
    </div>
  );
}
