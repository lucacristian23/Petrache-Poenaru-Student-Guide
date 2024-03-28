import "./index.css";

export default function Option({ display, setDisplay, infoObj }) {
  return (
    <div className="option" onClick={(e) => setDisplay(!display)}>
      <img
        src={infoObj.image}
        alt=""
        style={{
          width: "auto",
          height: "100%",
          aspectRatio: "4 / 2.6",
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          overflow: "hidden",
          border: "2px solid #204060",
        }}
      />
      <div className="textContainer">
        <h5 className="optionTitle">{infoObj.title}</h5>
        <p className="optionDescription">{infoObj.description}</p>
      </div>
    </div>
  );
}
