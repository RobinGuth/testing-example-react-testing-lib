import React from "react";
import HistoryComponent from "./HistoryComponent";

export default function NameComponent({
  someFunction = () => {},
  names = [],
  historyOptions = ["All", 2, 3, 5, 8]
}) {
  someFunction();

  const [inputValue, setInputValue] = React.useState("");
  const [name, setName] = React.useState(null);
  const [nameList, setNameList] = React.useState(names);

  const setNameFromInput = () => {
    setName(inputValue);
    setInputValue("");
    setNameList((current) => [inputValue, ...current]);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1>Enter your name</h1>
      Please enter a name & press ok <br />
      <label id="input-label">Name input</label> <br />
      <input
        type="text"
        id="nameInput"
        onChange={handleInputChange}
        value={inputValue}
        aria-labelledby="input-label"
      />
      <button onClick={setNameFromInput} data-testid="button-id">
        Ok
      </button>
      <br />
      {name ? "Hello " + name + "!" : null}
      <HistoryComponent nameList={nameList} historyOptions={historyOptions} />
    </>
  );
}
