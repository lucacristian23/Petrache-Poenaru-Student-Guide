export default function OptionAndSubOptionContainer() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <div className="option" onClick={(e) => setDisplay(!display)}></div>
      <div
        className={`sub-options-container ${display ? "hidden-element" : ""}`}
      >
        <SubOption />
        <SubOption />
        <SubOption />
      </div>
    </div>
  );
}
