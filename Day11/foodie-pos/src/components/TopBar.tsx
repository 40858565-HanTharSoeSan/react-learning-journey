import "./TopBar.css";

interface Props {
  city: string;
}
export function TopBar(props: Props) {
  return (
    <div className="topbar">
      <h2>Foodie POS</h2>
      <h2>{props.city}</h2>
      <h2>Log out</h2>
    </div>
  );
}
