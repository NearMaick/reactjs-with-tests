import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { List } from "./List";

describe("List component test", () => {
  it("should render list items", () => {
    const { getByText } = render(
      <List initialItems={["Maick", "Neuza", "Enilda"]} />
    );

    expect(getByText("Enilda")).toBeDefined();
    expect(getByText("Neuza")).toBeDefined();
    expect(getByText("Maick")).toBeDefined();
  });
});
