import { Menu } from "./Content";

interface Props {
  menu: Menu;
}

export function MenuItem({ menu }: Props) {
  const { name, price, isAvailable } = menu;
  return (
    <div
      style={{
        backgroundColor: "#E63946",
        display: "flex",
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        flexDirection: "column",
        borderRadius: 5,
        color: "#F1FAEE",
        marginRight: 10,
      }}
    >
      <div>{name}</div>
      <div style={{ fontSize: 14 }}>{price}Kyats</div>
      <div style={{ fontSize: 14 }}>
        {isAvailable ? "Available" : "Not available"}
      </div>
    </div>
  );
}
