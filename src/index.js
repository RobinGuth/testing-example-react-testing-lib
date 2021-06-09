import { StrictMode } from "react";
import ReactDOM from "react-dom";

import NameComponent from "./NameComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NameComponent
      someFunction={() => {
        console.log("someFunction was called");
      }}
      names={[
        "Robert",
        "Herbert",
        "Kunibert",
        "Nurbert",
        "Schnurrbert",
        "Turmbert",
        "Flurbert",
        "Humbert"
      ]}
    />
  </StrictMode>,
  rootElement
);
