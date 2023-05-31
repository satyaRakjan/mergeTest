import { merge } from "../src/index";

describe("merge function", () => {
  it("should merge sorted arrays correctly ", () => {
    const collection1 = [1, 4, 7, 8];
    const collection2 = [2, 3, 5, 6];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should handle empty arrays correctly", () => {
    const collection1: number[] = [];
    const collection2: number[] = [1, 2, 3];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3]);
  });

  it("should handle one empty array correctly", () => {
    const collection1 = [1, 2, 3];
    const collection2: number[] = [];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3]);
  });

  it("should handle arrays of different lengths correctly", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6, 8];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 8]);
  });
});
