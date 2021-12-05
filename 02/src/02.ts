export enum Direction
{
    FORWARD = "forward",
    DOWN = "down",
    UP = "up",
}

export function countPart1(plan: [Direction, number][]): number
{
    let horizontal = 0;
    let depth = 0;

    const directionCallbacks = {
        [Direction.FORWARD]: (count: number) => {horizontal += count},
        [Direction.DOWN]: (count: number) => {depth += count},
        [Direction.UP]: (count: number) => {depth -= count},
    };

    plan.forEach(value => directionCallbacks[value[0]](value[1]));

    return horizontal * depth;
}

export function countPart2(plan: [Direction, number][]): number
{
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    const directionCallbacks = {
        [Direction.FORWARD]: (count: number) => {horizontal += count; depth += aim * count},
        [Direction.DOWN]: (count: number) => {aim += count},
        [Direction.UP]: (count: number) => {aim -= count},
    };

    plan.forEach(value => directionCallbacks[value[0]](value[1]));

    return horizontal * depth;
}
