import "./index.css";

export default function SubOption({ infoObj }) {
  // Extract the value from the infoObj object
  const value = Object.values(infoObj)[0];

  return (
    <div className="subOption">
      <p className="subOptionTitle">{value}</p>
    </div>
  );
}
