import React from "react";

export default function NameComponent({
  someFunction = () => {},
  names = ["Herbert", "Kunibert", "Nurbert"],
  historyOptions = ["All", 3, 5, 8]
}) {
  someFunction();

  const [inputValue, setInputValue] = React.useState("");
  const [name, setName] = React.useState(null);
  const [nameList, setNameList] = React.useState(names);
  const [maxAmount, setMaxAmount] = React.useState(historyOptions[0]);

  const setNameFromInput = (event) => {
    setName(inputValue);
    setInputValue("");
    setNameList((current) => [...current, inputValue]);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setMaxAmount(event.target.value);
  };

  return (
    <>
      <h1 role="heading">Enter your name</h1>
      Please enter a name & press ok <br />
      <label id="input-label">Name input</label> <br />
      <input
        type="text"
        role="textbox"
        id="nameInput"
        onChange={handleInputChange}
        value={inputValue}
        aria-labelledby="input-label"
      />
      <button onClick={setNameFromInput} role="button" data-testid="button-id">
        Ok
      </button>
      <br />
      {name ? "Hello " + name + "!" : null}
      <br />
      <h2>History</h2>
      <select id="amountNames" value={maxAmount} onChange={handleSelectChange}>
        {historyOptions.map((element) => (
          <option value={element}>{element}</option>
        ))}
      </select>
      <table>
        <tr>
          <th>Number</th>
          <th>Name</th>
        </tr>
        {nameList.map((element) => {
          return maxAmount === "All" ||
            nameList.indexOf(element) < maxAmount ? (
            <tr>
              <td>{nameList.indexOf(element) + 1}</td>
              <td>{element}</td>
            </tr>
          ) : null;
        })}
      </table>
    </>
  );
}
