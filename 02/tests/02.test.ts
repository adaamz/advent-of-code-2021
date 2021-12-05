import {assertStrictEquals} from "../../deps.ts";
import {countPart1, countPart2, Direction} from "../src/02.ts";

Deno.test("02: Example test from introduction (Part one)", () => {
    const input = (
        "forward 5\n" +
        "down 5\n" +
        "forward 8\n" +
        "up 3\n" +
        "down 8\n" +
        "forward 2"
    );
    const expectedOutput = 150;

    assertStrictEquals(countPart1(input.split("\n").map(line => {
        const s = line.split(" ");
        return [s[0] as Direction, Number(s[1])]
    })), expectedOutput);
});

Deno.test("02: Final test (Part one)", () => {
    const input = (
        Deno.readTextFileSync("02/final_input.txt").trimEnd()
    );

    const expectedOutput = 1962940;

    assertStrictEquals(countPart1(input.split("\n").map(line => {
        const s = line.split(" ");
        return [s[0] as Direction, Number(s[1])]
    })), expectedOutput);
});

Deno.test("02: Example test from introduction (Part two)", () => {
    const input = (
        "forward 5\n" +
        "down 5\n" +
        "forward 8\n" +
        "up 3\n" +
        "down 8\n" +
        "forward 2"
    );
    const expectedOutput = 900;

    assertStrictEquals(countPart2(input.split("\n").map(line => {
        const s = line.split(" ");
        return [s[0] as Direction, Number(s[1])]
    })), expectedOutput);
});

Deno.test("02: Final test (Part two)", () => {
    const input = (
        Deno.readTextFileSync("02/final_input.txt").trimEnd()
    );

    const expectedOutput = 1813664422;

    assertStrictEquals(countPart2(input.split("\n").map(line => {
        const s = line.split(" ");
        return [s[0] as Direction, Number(s[1])]
    })), expectedOutput);
});
