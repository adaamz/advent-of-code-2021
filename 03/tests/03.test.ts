import {assertStrictEquals} from "../../deps.ts";
import {countPart1, countPart2} from "../src/03.ts";

Deno.test("03: Example test from introduction (Part one)", () => {
    const input = ("00100\n" +
        "11110\n" +
        "10110\n" +
        "10111\n" +
        "10101\n" +
        "01111\n" +
        "00111\n" +
        "11100\n" +
        "10000\n" +
        "11001\n" +
        "00010\n" +
        "01010"
    );
    const expectedOutput = 198;

    assertStrictEquals(countPart1(input.split("\n")), expectedOutput);
});

Deno.test("03: Final test (Part one)", () => {
    const input = (
        Deno.readTextFileSync("03/final_input.txt").trimEnd()
    );

    const expectedOutput = 1082324;

    assertStrictEquals(countPart1(input.split("\n")), expectedOutput);
});

Deno.test("03: Example test from introduction (Part two)", () => {
    const input = (
        "00100\n" +
        "11110\n" +
        "10110\n" +
        "10111\n" +
        "10101\n" +
        "01111\n" +
        "00111\n" +
        "11100\n" +
        "10000\n" +
        "11001\n" +
        "00010\n" +
        "01010\n"
    );

    const expectedOutput = 230;

    assertStrictEquals(countPart2(input.split("\n")), expectedOutput);
});

Deno.test("03t: Final test (Part two)", () => {
    const input = (
        Deno.readTextFileSync("03/final_input.txt").trimEnd()
    );

    const expectedOutput = 1353024;

    assertStrictEquals(countPart2(input.split("\n")), expectedOutput);
});
