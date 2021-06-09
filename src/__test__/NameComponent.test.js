import { render, screen, within } from "@testing-library/react";
import NameComponent from "../NameComponent";
import userEvent from "@testing-library/user-event";

describe("NameComponent Tests", () => {
  it("should render all fields & elements", async () => {
    // Arrange
    render(<NameComponent />);

    // Act - no action needed

    // Assert
    const heading = screen.getByRole("heading", { name: "Enter your name" });
    expect(heading).toBeInTheDocument();

    const textfield = screen.getByRole("textbox", { name: "Name input" });
    expect(textfield).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Ok" });
    expect(button).toBeInTheDocument();
  });

  it("should call someFunction on render", async () => {
    //Arrange
    const someMock = jest.fn();
    render(<NameComponent someFunction={someMock} />);

    //Act - no action needed

    //Assert
    expect(someMock).toHaveBeenCalledTimes(1);
  });

  it("should accept a name input & render it in the history", async () => {
    // Arrange
    render(<NameComponent names={[]} />);

    const nameToEnter = "Testing";

    // Act
    // enter name into textfield
    const textfield = screen.getByRole("textbox");
    userEvent.type(textfield, nameToEnter);

    // confirm with ok button
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    // textfield empty after ok
    expect(textfield).toBeEmptyDOMElement();

    // check if table displays name in row
    const table = screen.getByRole("table");
    const rows = within(table).getAllByRole("row");
    expect(rows).toHaveLength(2);

    const nameRow = screen.getByRole("row", { name: "1 " + nameToEnter });
    expect(nameRow).toBeInTheDocument();
  });

  describe("textfield tests", () => {
    it("should allow a name to be entered into the textfield", async () => {
      // Arrange
      render(<NameComponent />);

      const nameToEnter = "Workshop";

      // Act
      //fetch textfield
      const nameInput = screen.getByRole("textbox", { name: "Name input" });

      //type a name into the textfield
      userEvent.type(nameInput, nameToEnter);

      // Assert
      expect(nameInput).toHaveValue(nameToEnter);
    });

    it("should clear the textfield after pressing ok", () => {
      // Arrange
      render(<NameComponent />);

      const nameToEnter = "Testing";

      // Act
      // enter name into textfield
      const textfield = screen.getByRole("textbox");
      userEvent.type(textfield, nameToEnter);

      // confirm with ok button
      const button = screen.getByRole("button");
      userEvent.click(button);

      // Assert
      // textfield empty after ok
      expect(textfield).toBeEmptyDOMElement();
    });
  });
});
