import "./index.css";

export default function SubOption({ infoObj, onClick }) {
  // Extract the value from the infoObj object
  const value = Object.values(infoObj)[0];

  return (
    <div className="subOption" onClick={onClick}>
      <p className="subOptionTitle">{value}</p>
    </div>
  );
}
