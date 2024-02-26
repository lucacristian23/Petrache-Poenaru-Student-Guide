import Option from "./Option";
import SubOption from "./SubOption";
import OptionAndSubOptionContainer from "./OptionAndSubOptionContainer.js";
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
const infoData = [
  {
    title: "The Transport in Bucharest",
    description: "Take a look on how to navigate the Bucharest like a local!",
    suboptions: [
      { key: "sub1", value: "The ridesharing apps: Uber and Bolt" },
      {
        key: "sub2",
        value: "How to navigate the Bucharest with InfoSTB like a pro!",
      },
      { key: "sub3", value: "How to use the subway system" },
    ],
  },
  {
    title: "How to get a romanian visa",
    description: "The proces of getting a romanian visa in detail",
    suboptions: [
      { key: "sub1", value: "What documents do I need for the visa?" },
      { key: "sub2", value: "How to apply online for the visa" },
      { key: "sub3", value: "Frequently Asked Questions About Visa" },
    ],
  },
];

export default function OptionList() {
  return (
    <ul className="option-list">
      {infoData.map((info) => (
        <OptionAndSubOptionContainer infoObj={info} />
      ))}
    </ul>
  );
}
