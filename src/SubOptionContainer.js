import SubOption from "./SubOption";

import "./index.css";

export default function SubOptionContainer({
  display,
  setDisplay,
  subObj,
  parentTitle,
  displayList,
  setDisplayList,
  selectedSubOption,
  setSelectedSubOption,
}) {
  const handleClick = (subOptionKey) => {
    setSelectedSubOption({
      subOptionKey: subOptionKey,
      parentTitle: parentTitle,
    });
    setDisplayList(!displayList);
  };

  return (
    <>
      <ul
        className={`sub-options-container ${display ? "hidden-element" : ""}`}
      >
        {subObj.map(({ key, value }) => (
          <SubOption
            key={key}
            className="subOptions"
            infoObj={{ [key]: value }}
            onClick={() => handleClick(key)}
          />
        ))}
      </ul>
    </>
  );
}
