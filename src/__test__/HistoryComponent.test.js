import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HistoryComponent from "../HistoryComponent";
import "@testing-library/jest-dom";

describe("HistoryComponent Unit Tests", () => {
  it("should render all fields & elements", async () => {
    // Arrange
    render(<HistoryComponent />);

    // Act - no action needed

    // Assert
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

    // screen.getByRole("lol");
    const combobox = screen.getByRole("combobox", {
      name: "amountEntriesSelect"
    });
    // expect select to be in the document & have 3 options
    expect(combobox).toBeInTheDocument();
    expect(within(combobox).getAllByRole("option")).toHaveLength(3);

    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
    expect(within(table).getAllByRole("row")).toHaveLength(1);

    const numberColHeader = within(table).getByRole("columnheader", {
      name: "Number"
    });
    expect(numberColHeader).toBeInTheDocument();

    const nameColHeader = within(table).getByRole("columnheader", {
      name: "Name"
    });
    expect(nameColHeader).toBeInTheDocument();
  });

  it("should display all given names in the table", async () => {
    // Arrange
    const nameList = ["Robert", "Herbert", "Kunibert"];
    render(<HistoryComponent nameList={nameList} />);

    // Act - no action needed

    // Assert
    const table = screen.getByRole("table");
    const rows = within(table).getAllByRole("row");
    // 3 rows with names + header row
    expect(rows).toHaveLength(4);

    const kuniRow = within(table).getByRole("row", { name: "1 Kunibert" });
    expect(kuniRow).toBeInTheDocument();

    const herRow = within(table).getByRole("row", { name: "2 Herbert" });
    expect(herRow).toBeInTheDocument();

    const RobertRow = within(table).getByRole("row", { name: "3 Robert" });
    expect(RobertRow).toBeInTheDocument();
  });

  describe("select tests", () => {
    it("should render select with the first value selected", () => {
      // Arrange
      render(<HistoryComponent historyOptions={["All", 5, 10]} />);

      // Action - no action needed

      // Assert
      const select = screen.getByRole("combobox");
      expect(select).toHaveValue("All");
    });

    it("should be able to select history options amount", () => {
      // Arrange
      render(<HistoryComponent historyOptions={["All", 5, 10]} />);

      // Action
      const select = screen.getByRole("combobox");
      userEvent.selectOptions(select, "5");

      // Assert
      expect(select).toHaveValue("5");
    });

    it("should render the selected maximum amount of rows", async () => {
      // Arrange
      const nameList = ["Robert", "Herbert", "Kunibert"];
      render(<HistoryComponent nameList={nameList} historyOptions={[2]} />);

      // Act - no action needed

      // Assert
      const rows = screen.getAllByRole("row");
      // 2 name rows + 2 column
      expect(rows).toHaveLength(3);
    });
  });
});
