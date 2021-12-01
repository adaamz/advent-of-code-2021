import {assertStrictEquals} from "../../deps.ts";
import {countPart1, countPart2} from "../src/01.ts";

Deno.test("01: Example test from introduction (Part one)", () => {
    const input = [
        199,
        200,
        208,
        210,
        200,
        207,
        240,
        269,
        260,
        263,
    ];
    const expectedOutput = 7;

    assertStrictEquals(countPart1(input), expectedOutput);
});

Deno.test("01: Final test (Part one)", () => {
    const input = (
        Deno.readTextFileSync("01/final_input.txt").trimEnd()
    ).split("\n").map(Number);

    const expectedOutput = 1342;

    assertStrictEquals(countPart1(input), expectedOutput);
});

Deno.test("01: Example test from introduction (Part two)", () => {
    const input = [
        199,
        200,
        208,
        210,
        200,
        207,
        240,
        269,
        260,
        263,
    ];

    const expectedOutput = 5;

    assertStrictEquals(countPart2(input), expectedOutput);
});

Deno.test("01: Final test (Part two)", () => {
    const input = (
        Deno.readTextFileSync("01/final_input.txt").trimEnd()
    ).split("\n").map(Number);

    const expectedOutput = 1378;

    assertStrictEquals(countPart2(input), expectedOutput);
});
