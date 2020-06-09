let grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const grid_pattern = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const blank_grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]





letsSolveIt = (grid_loaded) => {

    ifPossible = (x, y, n, gridoo) => {
        for (let i = 0; i < 9; i++) {
            if ((gridoo[x][i] === n && i!==y)|| (gridoo[i][y] === n && i!==x)) {
                return false;
            }
        }

        const xloc = Math.floor(x / 3) * 3;
        const yloc = Math.floor(y / 3) * 3;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (gridoo[xloc + i][yloc + j] === n) {
                    if (!(xloc+i===x && yloc+j===y)){
                        return false;
                    }

                }
            }
        }

        return true;
    }

    let flag = 0;
    let grido = grid_loaded;
    let new_grid = blank_grid.slice();


    solveSudoku = () => {

        if (flag !== 1) {
            for (let x = 0; x < 9; x++) {
                for (let y = 0; y < 9; y++) {
                    if (grido[x][y] === 0) {
                        for (let n = 1; n < 10; n++) {
                            if (ifPossible(x, y, n, grido)) {
                                grido[x][y] = n;
                                solveSudoku();
                                grido[x][y] = 0;
                            }
                        }

                        return;
                    }
                }
            }
        }


        if (flag === 0) {
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    new_grid[i][j] = grido[i][j];
                }
            }
        }
        flag = 1;
    }

    checkIfPossibleToSolve = (grid_to_check) => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (grid_to_check[i][j] !== 0) {
                    if (ifPossible(i, j, grid_to_check[i][j], grid_to_check) === false) {
                        console.log(i, j, grid_to_check[i][j], grid_to_check);
                        return false;
                    }
                }

            }

        }
        return true;
    }



    if (checkIfPossibleToSolve(grido)) {
        solveSudoku();
        getGrid(new_grid);
        console.log(new_grid);
    } else {
        alert("NOT POSSIBLE TO SOLVE!");
        //solveSudoku();
        //getGrid(new_grid);
    }




}


clearBoard = () => {

    for (let i = 0; i < 81; i++) {
        let elem = document.getElementById(i.toString()).previousElementSibling;
        elem.innerText = '';
    }
    setGrid();
}

loadPattern = () => {
    getGrid(grid_pattern);
    setGrid();
}

setGrid = () => {

    for (let i = 0; i < 81; i++) {
        let elem = document.getElementById(i.toString()).previousElementSibling;

        let value;

        if (elem.innerText === '') {
            value = 0;
        } else {
            value = Number.parseInt(elem.innerText);
        }

        grid[Math.floor(i / 9)][i % 9] = value;
    }
}

getGrid = (solvedGrid) => {

    for (let i = 0; i < 81; i++) {
        let elem = document.getElementById(i.toString()).previousElementSibling;
        if (solvedGrid[Math.floor(i / 9)][i % 9] === 0) {
            elem.innerText = '';
        } else {
            elem.innerText = solvedGrid[Math.floor(i / 9)][i % 9];
        }

    }

}


initUI = () => {
    let container_element = document.querySelector(".container");

    let small_div = document.createElement("div");
    small_div.setAttribute("id", "myDropdown");
    small_div.setAttribute("class", "dropdown-content");


    for (let i = 1; i < 11; i++) {
        let number_button = document.createElement("button");

        if (i < 10) {
            let text_inside_button = document.createTextNode(i.toString());

            number_button.appendChild(text_inside_button);
            number_button.setAttribute("onclick", "changeNumber(parentElement," + i.toString() + ")");
            number_button.setAttribute("class", "dropdown-button");
        } else {
            let text_inside_button = document.createTextNode('B L A N K');

            number_button.appendChild(text_inside_button);
            number_button.setAttribute("onclick", "changeNumber(parentElement,'')");
            number_button.setAttribute("class", "dropdown-last-button");
        }


        small_div.appendChild(number_button);
    }


    let button_element = document.createElement("button");
    button_element.setAttribute("onclick", "myFunction()");
    button_element.setAttribute("class", "dropbtn");

    let text_button = document.createTextNode('');
    button_element.appendChild(text_button);

    let dropdown_button = document.createElement("div");
    dropdown_button.setAttribute("class", "dropdown");


    for (let i = 0; i < 81; i++) {

        button_element.setAttribute("onclick", "myFunction(" + i + ")");
        small_div.setAttribute("id", i.toString());
        dropdown_button.appendChild(button_element);
        dropdown_button.appendChild(small_div);

        let element = dropdown_button.cloneNode(true);
        container_element.appendChild(element);
        console.log("HERE");
    }


}

function removeDropdowns() {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

function myFunction(id) {

    if (document.getElementById(id).classList.contains("show")) {
        document.getElementById(id).classList.toggle("show");
    } else {
        removeDropdowns()
        document.getElementById(id).classList.toggle("show");
    }

}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        removeDropdowns();
    }
}

function changeNumber(id, nr) {
    let btn = id.previousElementSibling;
    btn.innerText = nr;

    setGrid();

}

initUI();