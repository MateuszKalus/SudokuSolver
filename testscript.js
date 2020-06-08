let grid = [[4],[4]];

"use strict";
function ff() {
    grid[0][0] = 5;
    console.log(grid); // [[7],[4]] ???? powinno byc [[5],[4]]
    grid[0][0] = 6;
//console.log(grid); // [[7],[4]] ???? powinno byc [[6],[4]]
    grid[0][0] = 7;
//console.log(grid); // [[7],[4]] - tu sie zgadza
}