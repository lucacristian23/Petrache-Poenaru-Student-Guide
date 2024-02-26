import SubOption from "./SubOption";
import "./index.css";
export default function SubOptionContainer({ display, setDisplay, subObj }) {
  console.log(subObj);
  return (
    <ul className={`sub-options-container ${display ? "hidden-element" : ""}`}>
      {subObj.map(({ key, value }) => (
        <SubOption
          key={key}
          className="subOptions"
          infoObj={{ [key]: value }}
        />
      ))}
    </ul>
  );
}
