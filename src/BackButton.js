export default function BackButton({
  displayList,
  setDisplayList,
  transportInfo,
  setTransportInfo,
}) {
  const handleClick = () => {
    setDisplayList(() => !displayList);
    setTransportInfo(() => 1);
  };
  return (
    <button className="backButton" onClick={() => handleClick()}>
      Return
    </button>
  );
}
