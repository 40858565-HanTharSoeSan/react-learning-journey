import { Menu } from "./Content";

export function NewMenu() {
    const menu: Menu = { name: "", price: 0, isAvailable: true };
    
    const handleCreateMenu = () => {
        console.log("Creating menu:", menu);
    }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        maxWidth: 200,
      }}
    >
      <input
        type="text"
        placeholder="Menu Name"
        style={{ height: 30 }}
        onChange={(evt) => {
          menu.name = evt.target.value;
        }}
      />
      <input
        type="number"
        placeholder="Price"
        style={{ height: 30 }}
        onChange={(evt) => {
          menu.price = Number(evt.target.value);
        }}
      />
      <div>
        <input
          type="checkbox"
          onChange={(evt) => {
            menu.isAvailable = evt.target.checked;
          }}
        />
        <span>Available</span>
      </div>

      <button
        style={{ marginTop: 10, width: "fit-content" }}
        onClick={handleCreateMenu}
      >
        Create
      </button>
    </div>
  );
}
