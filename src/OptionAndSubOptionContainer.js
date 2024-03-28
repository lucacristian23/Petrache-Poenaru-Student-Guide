import { useState } from "react";
import Option from "./Option";
import SubOptionContainer from "./SubOptionContainer";

export default function OptionAndSubOptionContainer({
  infoObj,
  displayList,
  setDisplayList,
  selectedSubOption,
  setSelectedSubOption,
}) {
  const [display, setDisplay] = useState(true);
  const { title, suboptions } = infoObj;

  return (
    <div>
      <Option display={display} setDisplay={setDisplay} infoObj={infoObj} />
      <SubOptionContainer
        display={display}
        setDisplay={setDisplay}
        displayList={displayList}
        setDisplayList={setDisplayList}
        className="sub-options-container"
        subObj={suboptions}
        parentTitle={title}
        selectedSubOption={selectedSubOption}
        setSelectedSubOption={setSelectedSubOption}
      />
    </div>
  );
}
