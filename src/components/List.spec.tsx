import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { List } from "./List";

describe("List component test", () => {
  it("should render list items", () => {
    const { getByText, queryByText, unmount } = render(
      <List initialItems={["Maick", "Neuza", "Enilda"]} />
    );

    expect(getByText("Enilda")).toBeDefined();
    expect(getByText("Neuza")).toBeDefined();
    expect(getByText("Maick")).toBeDefined();

    unmount();
    render(<List initialItems={["Lourival"]} />);

    expect(getByText("Lourival")).toBeDefined();
    expect(queryByText("Maick")).toBeNull();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText } = render(
      <List initialItems={[]} />
    );

    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");

    fireEvent.change(inputElement, { target: { value: "Novo" } });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(getByText("Novo")).toBeDefined();
    });
  });
});
