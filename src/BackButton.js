export default function BackButton({ displayList, setDisplayList }) {
  const handleClick = () => {
    console.log("test");
    setDisplayList(() => !displayList);
  };
  return (
    <button className="backButton" onClick={() => handleClick()}>
      Return
    </button>
  );
}
