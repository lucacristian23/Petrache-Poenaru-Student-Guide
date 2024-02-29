import { useState } from "react";
import Option from "./Option";
import SubOptionContainer from "./SubOptionContainer";
/*
export default function OptionAndSubOptionContainer({ infoObj }) {
  const [display, setDisplay] = useState(false);
  console.log(infoObj);
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
*/

export default function OptionAndSubOptionContainer({
  infoObj,
  displayList,
  setDisplayList,
}) {
  const [display, setDisplay] = useState(true);
  const { title, suboptions } = infoObj; // Destructure title and suboptions from infoObj

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
        parentTitle={title} // Pass parentTitle as a prop
      />
    </div>
  );
}
