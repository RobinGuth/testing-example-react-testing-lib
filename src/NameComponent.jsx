import React from "react";

export default function NameComponent() {
  const [inputValue, setInputValue] = React.useState("");
  const [name, setName] = React.useState(null);

  const setNameFromInput = (event) => {
    setName(inputValue);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1>Naming yourself</h1>
      Please enter a name & press ok <br />
      <label>Name input</label> <br />
      <input
        type="text"
        id="nameInput"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button onClick={setNameFromInput}>Ok</button> <br />
      {name ? "Hello " + name + "!" : null}
    </>
  );
}
