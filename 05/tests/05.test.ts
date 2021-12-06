import {assertStrictEquals} from "../../deps.ts";
import {countPart1, countPart2} from "../src/05.ts";

Deno.test("05: Example test from introduction (Part one)", () => {
    const input = (
        "0,9 -> 5,9\n" +
        "8,0 -> 0,8\n" +
        "9,4 -> 3,4\n" +
        "2,2 -> 2,1\n" +
        "7,0 -> 7,4\n" +
        "6,4 -> 2,0\n" +
        "0,9 -> 2,9\n" +
        "3,4 -> 1,4\n" +
        "0,0 -> 8,8\n" +
        "5,5 -> 8,2"
    );
    const expectedOutput = 5;

    assertStrictEquals(
        countPart1(
            input.split("\n").map(r => r.split(" -> ").map(p => p.split(",").map(Number))) as [[number, number], [number, number]][]
        ),
        expectedOutput
    );
});

Deno.test("05: Final test (Part one)", () => {
    const input = (
        Deno.readTextFileSync("05/final_input.txt").trimEnd()
    );

    const expectedOutput = 7269;

    assertStrictEquals(
        countPart1(
            input.split("\n").map(r => r.split(" -> ").map(p => p.split(",").map(Number))) as [[number, number], [number, number]][]
        ),
        expectedOutput
    );
});

Deno.test("05: Example test from introduction (Part two)", () => {
    const input = (
        "0,9 -> 5,9\n" +
        "8,0 -> 0,8\n" +
        "9,4 -> 3,4\n" +
        "2,2 -> 2,1\n" +
        "7,0 -> 7,4\n" +
        "6,4 -> 2,0\n" +
        "0,9 -> 2,9\n" +
        "3,4 -> 1,4\n" +
        "0,0 -> 8,8\n" +
        "5,5 -> 8,2"
    );

    const expectedOutput = 12;

    assertStrictEquals(
        countPart2(
            input.split("\n").map(r => r.split(" -> ").map(p => p.split(",").map(Number))) as [[number, number], [number, number]][]
        ),
        expectedOutput
    );
});

Deno.test("05: Final test (Part two)", () => {
    const input = (
        Deno.readTextFileSync("05/final_input.txt").trimEnd()
    );

    const expectedOutput = 21140;

    assertStrictEquals(
        countPart2(
            input.split("\n").map(r => r.split(" -> ").map(p => p.split(",").map(Number))) as [[number, number], [number, number]][]
        ),
        expectedOutput
    );
});
