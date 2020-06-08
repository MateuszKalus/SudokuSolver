var grid = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

// def isPossible(x,y,n):
// for i in range(0,9):
// if grid[x][i] == n or grid[i][y] == n:
// return False
//
// xloc = (x//3)*3
// yloc = (y//3)*3
//
// for i in range(0,3):
// for j in range(0,3):
// if grid[xloc+i][yloc+j] == n:
// return False
// return True


ifPossible = (x, y, n) => {
    for (let i = 0; i < 9; i++) {
        if (grid[x][i] === n || grid[i][y] === n) {
            return false;
        }
    }

    const xloc = Math.floor(x/3)*3;
    const yloc = Math.floor(y/3)*3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[xloc+i][yloc+j] === n) {
                return false;
            }
        }
    }
    return true;
}

solveSudoku = () => {

//console.log(JSON.parse(JSON.stringify(grid)));

    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (grid[x][y] === 0) {
                for (let n = 1; n < 10; n++) {
                    if (ifPossible(x,y,n)) {
                        grid[x][y] = n;
                        //console.log(1);
                        //console.log(grid);
                        solveSudoku();
                        //console.log(2);
                        grid[x][y] = 0;
                    }
                }

                return;
            }
        }
    }
    console.log("KONIEC")
    console.log(grid);
    console.log(grid[0][3]);
    console.log(JSON.parse(JSON.stringify(grid)));
}

function tryGrid() {
    grid[0][8] = 99;
    console.log(grid);
    function tryGrid2() {
        grid[0][7] = 55;
        console.log(grid);
    }

    tryGrid2();
}