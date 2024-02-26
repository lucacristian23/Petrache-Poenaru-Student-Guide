import { useState } from "react";
import Option from "./Option";
import SubOptionContainer from "./SubOptionContainer";

export default function OptionAndSubOptionContainer({ infoObj }) {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <Option display={display} setDisplay={setDisplay} infoObj={infoObj} />
      <SubOptionContainer
        display={display}
        setDisplay={setDisplay}
        className="sub-options-container"
        subObj={infoObj.suboptions}
      />
    </div>
  );
}
