import { itemsPerRow } from "../index";

describe("itemsPerRow", () => {
  it("every 2 items should be placed into a new array", () => {
    const arr = itemsPerRow([1, 2, 3, 4, 5, 6], 2);
    expect(arr).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
  it("every 3 items should be placed into a new array", () => {
    const arr = itemsPerRow([1, 2, 3, 4, 5, 6], 3);
    expect(arr).toEqual([[1, 2, 3], [4, 5, 6]]);
  });
  it("if the number of last items is less than the specified amount, they should be placed into new array", () => {
    const arr = itemsPerRow([4, 5, 7], 2);
    expect(arr).toEqual([[4, 5], [7]]);
  });
});
