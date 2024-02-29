import SubOption from "./SubOption";
import "./index.css";
/*
export default function SubOptionContainer({ display, setDisplay, subObj }) {
  return (
    <ul className={`sub-options-container ${display ? "hidden-element" : ""}`}>
      {subObj.map(({ key, value }) => (
        <SubOption
          key={key}
          className="subOptions"
          infoObj={{ [key]: value }}
          onClick={() => console.log("test")}
        />
      ))}
    </ul>
  );
}
*/
export default function SubOptionContainer({
  display,
  setDisplay,
  subObj,
  parentTitle,
}) {
  const handleClick = (subOptionKey) => {
    console.log(`Clicked on suboption ${subOptionKey} of ${parentTitle}`);
    // Perform any other actions as needed
  };

  return (
    <ul className={`sub-options-container ${display ? "hidden-element" : ""}`}>
      {subObj.map(({ key, value }) => (
        <SubOption
          key={key}
          className="subOptions"
          infoObj={{ [key]: value }}
          onClick={() => handleClick(key)}
        />
      ))}
    </ul>
  );
}
