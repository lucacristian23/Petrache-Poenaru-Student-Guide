import Option from "./Option";
import SubOption from "./SubOption";
import { optionData } from "./config.js";
/*
export default function OptionList() {
  return (
    <div>
      <ul>
        {optionData.map((data, index) => {
          console.log(data);
          return <Option key={index} optionObject={data} />;
        })}
      </ul>
    </div>
  );
}
*/
export default function OptionList() {
  return (
    <div className="option-list">
      <Option />
      <Option />
      <Option />
      <Option />
      <Option />
      <Option />
    </div>
  );
}
