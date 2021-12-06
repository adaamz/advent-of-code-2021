type Board = number[][];

declare global {
    interface Array<T> {
        sum(): number;
    }
}
Array.prototype.sum = function(this: number[]): number {
    return this.reduce((acc, curr) => acc+curr, 0);
};

class GameBoard
{
    private calledNumber_PLACEHOLDER = -1;
    private not_calledNumbers: number[];
    private stringable_board: string;

    public constructor(public readonly board_index: number, private readonly board: Board)
    {
        this.not_calledNumbers = board.reduce((acc, val) => [...acc, ...val] , []);
        this.stringable_board = board.reduce((prev, curr) => prev + curr.reduce((p, c) => p + c + " ", "") + "\n", "");
    }

    private won(): boolean
    {
        // check each row for win
        for (let y = 0; y < this.board.length; y++) {
            let xCalled = 0;
            for (let x = 0; x < this.board[y].length; x++) {
                if (this.board[y][x] === this.calledNumber_PLACEHOLDER) {
                    xCalled++;
                    if (xCalled === 5) {
                        return true;
                    }
                } else {
                    xCalled = 0;
                }
            }
        }

        // check each column for win
        for (let x = 0; x < this.board[0].length; x++) {
            let yCalled = 0;
            for (let y = 0; y < this.board.length; y++) {
                if (this.board[y][x] === this.calledNumber_PLACEHOLDER) {
                    yCalled++;
                    if (yCalled === 5) {
                        return true;
                    }
                } else {
                    yCalled = 0;
                }
            }
        }

        return false;
    }

    public playRound(calledNumber: number): number | undefined
    {
        this.not_calledNumbers = this.not_calledNumbers.filter(n => n != calledNumber);

        for (let y = 0; y < this.board.length; y++) {
            for (let x = 0; x < this.board[y].length; x++) {
                if (this.board[y][x] === calledNumber) {
                    this.board[y][x] = this.calledNumber_PLACEHOLDER;
                }
            }
        }

        if (this.won()) {
            return this.not_calledNumbers.sum();
        }

        return undefined;
    }
}

export function countPart1(calledNumbers: number[], boards: Board[]): number
{
    const gamesBoards = boards.map((b, i) => new GameBoard(i, b));
    let calledNumber = 1;
    for (calledNumber of calledNumbers) {
        for (const gb of gamesBoards) {
            const sum = gb.playRound(calledNumber);
            if (sum) {
                return sum * calledNumber;
            }
        }
    }

    return -1;
}

export function countPart2(calledNumbers: number[], boards: Board[]): number
{
    const gamesBoards = boards.map((b, i) => new GameBoard(i, b));
    let calledNumber = 1;
    const winners = new Set<GameBoard["board_index"]>();
    for (calledNumber of calledNumbers) {
        for (const gb of gamesBoards) {
            const sum = gb.playRound(calledNumber);
            if (sum) {
                winners.add(gb.board_index);
                if (winners.size === gamesBoards.length) {
                    return sum * calledNumber;
                }
            }
        }
    }

    return -1;
}
