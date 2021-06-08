import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import NameComponent from "../NameComponent";
import "@testing-library/jest-dom";

describe("Test", () => {
  it("should render all fields & elements", async () => {
    //Arrange
    render(<NameComponent someFunction={jest.fn()} />);
    console.log("piep");

    //Act - no action needed

    //Assert
    //better: .toBeInTheDocument()
    const heading = screen.getByRole("heading", { name: "Enter your name" });
    expect(heading).toBeTruthy();

    expect(screen.getByText("Ok")).toBeTruthy();

    const button = screen.getByRole("button", { name: "Ok" });
    expect(button).toBeTruthy();

    const buttons = screen.getAllByRole("button");

    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  it("should find button by testId", async () => {
    //Arrange
    render(<NameComponent someFunction={jest.fn()} />);

    //Act - no action needed

    //Assert
    expect(screen.getByTestId("button-id")).toBeTruthy();
  });

  it("should be able to click the ok button", async () => {
    //Arrange
    render(<NameComponent />);

    //Act - no action needed
    const button = screen.getByRole("button");
    fireEvent.click(button);

    //Assert
    expect(screen.getByTestId("button-id")).toBeTruthy();
  });

  it("should find textfield by its labels text", async () => {
    //Arrange
    render(<NameComponent someFunction={jest.fn()} />);

    //Act - no action needed

    //Assert
    const textfield = screen.getByLabelText("Name input");
    expect(textfield).toBeTruthy();
  });

  it("should call someFunction on render", async () => {
    //Arrange
    const someMock = jest.fn();
    render(<NameComponent someFunction={someMock} />);

    //Act - no action needed

    //Assert
    expect(someMock).toHaveBeenCalledTimes(1);
  });

  it("should allow a name to be entered into the textfield", async () => {
    //Arrange
    render(<NameComponent />);

    const nameToEnter = "Workshop";

    //Act
    //fetch textfield
    const nameInput = screen.getByRole("textbox", { name: "Name input" });

    //type a name into the textfield
    userEvent.type(nameInput, nameToEnter);

    //Assert
    expect(nameInput).toHaveValue(nameToEnter);
  });

  it("should allow a name to be entered with fireEvent into the textfield", async () => {
    //Arrange
    render(<NameComponent />);

    const nameToEnter = "Workshop";

    //Act
    //fetch textfield
    const nameInput = screen.getByRole("textbox", { name: "Name input" });

    //type a name into the textfield
    fireEvent.change(nameInput, { target: { value: nameToEnter } });

    //Assert
    expect(nameInput).toHaveValue(nameToEnter);
  });
});
