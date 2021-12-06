import {assertStrictEquals} from "../../deps.ts";
import {countPart1, countPart2} from "../src/04.ts";

Deno.test("04: Example test from introduction (Part one)", () => {
    const input = (
        "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1\n" +
        "\n" +
        "22 13 17 11  0\n" +
        " 8  2 23  4 24\n" +
        "21  9 14 16  7\n" +
        " 6 10  3 18  5\n" +
        " 1 12 20 15 19\n" +
        "\n" +
        " 3 15  0  2 22\n" +
        " 9 18 13 17  5\n" +
        "19  8  7 25 23\n" +
        "20 11 10 24  4\n" +
        "14 21 16 12  6\n" +
        "\n" +
        "14 21 17 24  4\n" +
        "10 16 15  9 19\n" +
        "18  8 23 26 20\n" +
        "22 11 13  6  5\n" +
        " 2  0 12  3  7"
    );
    const expectedOutput = 4512;

    assertStrictEquals(
        countPart1(
            input.split("\n")[0].split(",").map(Number),
            input.replace(/[ ]+/g, " ").split("\n\n").slice(1).map(b => b.split("\n").map(r => r.trim().split(" ").map(Number)))
        ),
        expectedOutput
    );
});

Deno.test("04: Final test (Part one)", () => {
    const input = (
        Deno.readTextFileSync("04/final_input.txt").trimEnd()
    );

    const expectedOutput = 45031;

    assertStrictEquals(
        countPart1(
            input.split("\n")[0].split(",").map(Number),
            input.replace(/[ ]+/g, " ").split("\n\n").slice(1).map(b => b.split("\n").map(r => r.trim().split(" ").map(Number)))
        ),
        expectedOutput
    );
});

Deno.test("04: Example test from introduction (Part two)", () => {
    const input = (
        "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1\n" +
        "\n" +
        "22 13 17 11  0\n" +
        " 8  2 23  4 24\n" +
        "21  9 14 16  7\n" +
        " 6 10  3 18  5\n" +
        " 1 12 20 15 19\n" +
        "\n" +
        " 3 15  0  2 22\n" +
        " 9 18 13 17  5\n" +
        "19  8  7 25 23\n" +
        "20 11 10 24  4\n" +
        "14 21 16 12  6\n" +
        "\n" +
        "14 21 17 24  4\n" +
        "10 16 15  9 19\n" +
        "18  8 23 26 20\n" +
        "22 11 13  6  5\n" +
        " 2  0 12  3  7"
    );

    const expectedOutput = 1924;

    assertStrictEquals(
        countPart2(
            input.split("\n")[0].split(",").map(Number),
            input.replace(/[ ]+/g, " ").split("\n\n").slice(1).map(b => b.split("\n").map(r => r.trim().split(" ").map(Number)))
        ),
        expectedOutput
    );
});

Deno.test("04: Final test (Part two)", () => {
    const input = (
        Deno.readTextFileSync("04/final_input.txt").trimEnd()
    );

    const expectedOutput = 2568;

    const result = countPart2(
        input.split("\n")[0].split(",").map(Number),
        input.replace(/[ ]+/g, " ").split("\n\n").slice(1).map(b => b.split("\n").map(r => r.trim().split(" ").map(Number)))
    );

    assertStrictEquals(result, expectedOutput);
});
