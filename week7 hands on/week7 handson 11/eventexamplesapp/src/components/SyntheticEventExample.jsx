function SyntheticEventExample() {
  const handleClick = (e) => {
    alert('I was clicked');
  };

  return (
    <button onClick={handleClick}>Synthetic Event</button>
  );
}
export default SyntheticEventExample;