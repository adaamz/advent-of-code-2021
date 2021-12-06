type CoordinatesPlain = [number, number];
type Coordinates = {x: number, y: number};

function hydrateVentPair(ventPair: [CoordinatesPlain, CoordinatesPlain]): [Coordinates, Coordinates]
{
    return ventPair.map(vent => {
        return {x: vent[0], y: vent[1]};
    }) as [Coordinates, Coordinates];
}

export function countPart1(ventsList: [CoordinatesPlain, CoordinatesPlain][]): number
{
    const map = new Map<Coordinates["y"], Map<Coordinates["x"], number>>();

    for (const ventPair of ventsList) {
        const [from, to] = hydrateVentPair(ventPair);

        if (from.x === to.x) {
            const x = from.x;
            for (let y = Math.min(from.y, to.y); y <= Math.max(from.y, to.y); y++) {
                if (!map.has(y)) {
                    map.set(y, new Map());
                }
                if (!map.get(y)!.has(x)) {
                    map.get(y)!.set(x, 0);
                }
                const countInMap = map.get(y)!.get(x)!;
                map.get(y)!.set(x, countInMap+1);
            }
        } else if (from.y === to.y) {
            const y = from.y;
            for (let x = Math.min(from.x, to.x); x <= Math.max(from.x, to.x); x++) {
                if (!map.has(y)) {
                    map.set(y, new Map());
                }
                if (!map.get(y)!.has(x)) {
                    map.get(y)!.set(x, 0);
                }
                const countInMap = map.get(y)!.get(x)!;
                map.get(y)!.set(x, countInMap+1);
            }
        }
    }

    let twiceAndMoreTotal = 0;
    map.forEach(cols => cols.forEach(total => {
        if (total >= 2) {
            twiceAndMoreTotal++;
        }
    }));

    return twiceAndMoreTotal;
}

export function countPart2(ventsList: [CoordinatesPlain, CoordinatesPlain][]): number
{
    const map = new Map<Coordinates["y"], Map<Coordinates["x"], number>>();

    for (const ventPair of ventsList) {
        const [from, to] = hydrateVentPair(ventPair);

        if (from.x === to.x) {
            const x = from.x;
            for (let y = Math.min(from.y, to.y); y <= Math.max(from.y, to.y); y++) {
                if (!map.has(y)) {
                    map.set(y, new Map());
                }
                if (!map.get(y)!.has(x)) {
                    map.get(y)!.set(x, 0);
                }
                const countInMap = map.get(y)!.get(x)!;
                map.get(y)!.set(x, countInMap+1);
            }
        } else if (from.y === to.y) {
            const y = from.y;
            for (let x = Math.min(from.x, to.x); x <= Math.max(from.x, to.x); x++) {
                if (!map.has(y)) {
                    map.set(y, new Map());
                }
                if (!map.get(y)!.has(x)) {
                    map.get(y)!.set(x, 0);
                }
                const countInMap = map.get(y)!.get(x)!;
                map.get(y)!.set(x, countInMap+1);
            }
        } else if (
            (Math.abs(from.x - to.x) === Math.abs(from.y - to.y))
            ||
            (Math.abs(from.x - to.y) === Math.abs(from.y - to.x))
        ) {
            let x = from.x;
            let y = from.y;
            const opX = () => {x += from.x > to.x ? -1 : +1};
            const opY = () => {y += from.y > to.y ? -1 : +1};

            for (; x <= Math.max(from.x, to.x) && x >= Math.min(from.x, to.x) && y <= Math.max(from.y, to.y) && y >= Math.min(from.y, to.y); opX(), opY()) {
                if (!map.has(y)) {
                    map.set(y, new Map());
                }
                if (!map.get(y)!.has(x)) {
                    map.get(y)!.set(x, 0);
                }
                const countInMap = map.get(y)!.get(x)!;
                map.get(y)!.set(x, countInMap+1);
            }
        }
    }

    let twiceAndMoreTotal = 0;
    map.forEach(cols => cols.forEach(total => {
        if (total >= 2) {
            twiceAndMoreTotal++;
        }
    }));

    return twiceAndMoreTotal;
}
