import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { List } from "./List";

describe("List component test", () => {
  it("should render", () => {
    const { getByText } = render(<List />);

    expect(getByText("Maick Souza")).toBeDefined();
  });
});
