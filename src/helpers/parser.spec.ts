import { parseComment } from "./parser";

describe("parse comment", () => {
  test("no emoji", () => expect(parseComment("hello coffee").emoji).toBe(""));
  test("no emoji", () =>
    expect(parseComment("hello coffee").text).toBe("hello coffee"));

  test("single emoji", () =>
    expect(parseComment("hello :coffee:").emoji).toBe(":coffee:"));
  test("single emoji", () =>
    expect(parseComment("hello :coffee:").text).toBe("hello"));

  test("single emoji", () =>
    expect(parseComment("hello :coffee:, how are you").emoji).toBe(":coffee:"));
  test("single emoji", () =>
    expect(parseComment("hello :coffee:, how are you").text).toBe(
      "hello , how are you"
    ));

  test("multiple emoji", () =>
    expect(parseComment("hello :coffee:, how is :pizza:").emoji).toBe(
      ":coffee:"
    ));
  test("multiple emoji", () =>
    expect(parseComment("hello :coffee:, how is :pizza:").text).toBe(
      "hello , how is"
    ));
});
