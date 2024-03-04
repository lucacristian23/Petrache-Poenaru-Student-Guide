import { useState } from "react";
import OptionAndSubOptionContainer from "./OptionAndSubOptionContainer.js";
import DisplayText from "./DisplayText";
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
    title: "Admission Process for English Programs",
    description:
      "Explore the admission process for English programs at the University. Find details on deadlines, document requirements and evaluation criteria.",
    suboptions: [
      { key: "sub1", value: "Admission Calendar" },
      {
        key: "sub2",
        value: "Specifications for Documents",
      },
      { key: "sub3", value: "Required Documents" },
      { key: "sub4", value: "Evaluation Criteria for Admission" },
      { key: "sub5", value: "Online Document Submission Process" },
    ],
    image: "/admission.jpg",
  },
  {
    title: "Obtaining Romanian Entry Visa",
    description:
      "Comprehensive guide to obtaining a Romanian visa, covering application procedures, required documentation, and essential steps for a successful application.",
    suboptions: [
      { key: "sub1", value: "Find out if you require entry visa" }, // form cu fiecare tara
      { key: "sub2", value: "The process of getting the visa" },
      { key: "sub3", value: "Documents needed for the visa" },
      { key: "sub4", value: "How to apply online for the visa" },
    ],
    image: "/visa.jpg",
  },
  {
    title: "Accommodation",
    description:
      "Explore various housing options in Romania, including university and private dormitories, off-campus rentals, and temporary stays.",
    suboptions: [
      { key: "sub1", value: "Application Process for University Dormitories" },
      {
        key: "sub2",
        value: "Application Process for Private Dormitories",
      },
      { key: "sub3", value: "Finding Rentals on Online Platforms" },
      { key: "sub4", value: "Hotel Booking & Airbnb Guide" },
    ],
    image: "/accomodation.jpg",
  },
  {
    title: "Legal Residence in Romania",
    description: "Take a look on how to navigate the Bucharest like a local!",
    suboptions: [],
    image: "/legal residency.jpg",
  },
  {
    title: "Transport in Bucharest",
    description: "Take a look on how to travel in Bucharest!",
    suboptions: [
      {
        key: "sub1",
        value: "Using Info TB App for Navigation",
      },
      {
        key: "sub2",
        value: "All you need to know about the subway system.",
      },
      { key: "sub3", value: "Ridesharing with Uber and Bolt" },
      {
        key: "sub4",
        value: "Paying for Trips with 24pay App",
      },
      { key: "sub5", value: "Rent a car" },
      {
        key: "sub6",
        value: "Airport Transfers: Getting to and from the Airport",
      },
      {
        key: "sub7",
        value: "Monthly Passes: Applying & Student Discounts",
      },
    ],
    image: "/transportation.jpg",
  },
];

export default function OptionList() {
  const [displayList, setDisplayList] = useState(false);
  const [selectedSubOption, setSelectedSubOption] = useState({
    subOptionKey: "a1",
    parentTitle: "a2",
  });
  return (
    <>
      <ul className={`option-list ${displayList ? "hidden-element" : ""}`}>
        {infoData.map((info) => (
          <OptionAndSubOptionContainer
            infoObj={info}
            key={info.title}
            displayList={displayList}
            setDisplayList={setDisplayList}
            selectedSubOption={selectedSubOption}
            setSelectedSubOption={setSelectedSubOption}
          />
        ))}
      </ul>
      <DisplayText
        className={` ${!displayList ? "hidden-element" : ""}`}
        displayList={displayList}
        setDisplayList={setDisplayList}
        selectedSubOption={selectedSubOption}
        setSelectedSubOption={setSelectedSubOption}
      />
    </>
  );
}
