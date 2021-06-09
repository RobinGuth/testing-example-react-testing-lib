import React from "react";

export default function HistoryComponent({
  nameList = [],
  historyOptions = ["All", 5, 10]
}) {
  const [maxAmount, setMaxAmount] = React.useState(historyOptions[0]);

  const handleSelectChange = (event) => {
    setMaxAmount(event.target.value);
  };

  return (
    <>
      <h2>History</h2>
      <select
        id="amountNames"
        aria-label="amountEntriesSelect"
        value={maxAmount}
        onChange={handleSelectChange}
      >
        {historyOptions.map((element) => (
          <option key={element + "_option"} value={element}>
            {element}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {nameList.map((element) => {
            return maxAmount === "All" ||
              nameList.indexOf(element) < maxAmount ? (
              <tr key={element + "_row" + nameList.indexOf(element)}>
                <td>{nameList.length - nameList.indexOf(element)}</td>
                <td>{element}</td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </>
  );
}
