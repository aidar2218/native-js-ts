import {multiply, splitIntoWords, sum} from "./hello-test";

// data
let a: number
let b: number
let c: number


beforeEach(() => {
    // data
    a = 6
    b = 3
    c = 4
})



test("function sum should be correct", () => {


    // action
    const result1 = sum(a, b);
    const result2 = sum(c, b);

    // expect
    expect(result1).toBe(9);
    expect(result2).toBe(7);
})


test("function multiply should be correct", () => {

    // action
    const result1 = multiply(a, b);
    const result2 = multiply(c, b);

    // expect
    expect(result1).toBe(18);
    expect(result2).toBe(12);
})


test("function splitIntoWords should be correct", () => {
    // data
    const sentence1 = "Hello my friends!"
    const sentence2 = "JavaScript - the best programming language."

    // action
    const result1 = splitIntoWords(sentence1);
    const result2 = splitIntoWords(sentence2);

    // expect
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends");

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("javascript");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");
    expect(result2[4]).toBe("language");
})