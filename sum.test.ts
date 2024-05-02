import { describe, expect, test } from "@jest/globals";
import { sum } from "./sum";

describe("sum module", () => {
  beforeEach(async () => {
    console.log("0 ....");
  });
  beforeAll(async () => {
    console.log("1 , 2 , 3 ....");
  });
  afterAll(async () => {
    console.log("4 , 5 , 6 ....");
  },4000);
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
