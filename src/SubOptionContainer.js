import SubOption from "./SubOption";
import "./index.css";
export default function SubOptionContainer({ display, setDisplay }) {
  return (
    <div className={`sub-options-container ${display ? "hidden-element" : ""}`}>
      <SubOption className="subOptions" />
      <SubOption className="subOptions" />
      <SubOption className="subOptions" />
      <SubOption className="subOptions" />
      <SubOption className="subOptions" />
    </div>
  );
}
