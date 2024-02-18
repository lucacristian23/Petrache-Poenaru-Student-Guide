import { useState } from "react";
import Option from "./Option";
import SubOptionContainer from "./SubOptionContainer";

export default function OptionAndSubOptionContainer() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <Option display={display} setDisplay={setDisplay} />
      <SubOptionContainer
        display={display}
        setDisplay={setDisplay}
        className="sub-options-container"
      />
    </div>
  );
}
