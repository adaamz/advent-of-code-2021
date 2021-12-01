export function countPart1(levels: number[]): number
{
    let increasedTimes = 0;
    let prev = levels[0];

    for (const level of levels) {
        if (level > prev) {
            increasedTimes++;
        }
        prev = level;
    }

    return increasedTimes;
}

export function countPart2(levels: number[]): number
{
    const levels3d = [];

    for (let i = 0; i < levels.length - 2; i++) {
        levels3d.push(levels[i] + levels[i + 1] + levels[i + 2]);
    }

    return countPart1(levels3d);
}
