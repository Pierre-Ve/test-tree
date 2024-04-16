import { treeLengthService } from "../../src/services/tree.service.js";
import data from "../mockData/tree.json";

const dataJson = JSON.parse(JSON.stringify(data));

describe("treeLengthService", () => {
  it("should calculate the length of a tree with complete parameters", () => {
    const result = treeLengthService.calculate(dataJson.complete.branch);
    expect(result).toBe(16.4);
  });

  it("should calculate the length of a tree with missing branches", () => {
    const result = treeLengthService.calculate(dataJson.incomplete.branch);
    expect(result).toBe(16.4);
  });
});
