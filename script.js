var grid = [
    [0,0,0,0,0,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];


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

let flag = 0;
solveSudoku = () => {

    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (grid[x][y] === 0) {
                for (let n = 1; n < 10; n++) {
                    if (ifPossible(x,y,n)) {
                        grid[x][y] = n;
                        solveSudoku();
                        grid[x][y] = 0;
                    }
                }

                return;
            }
        }
    }
    flag === 0 ? console.log(JSON.parse(JSON.stringify(grid))) : null;
    flag = 1
}

initUI = () => {
    let container_element = document.querySelector(".container");

    let small_div = document.createElement("div");
    small_div.setAttribute("id", "myDropdown");
    small_div.setAttribute("class", "dropdown-content");


    for (let i = 1; i < 10; i++) {
        let number_button = document.createElement("button");
        let text_inside_button = document.createTextNode(i.toString());
        number_button.appendChild(text_inside_button);

        number_button.setAttribute("onclick", "changeNumber(parentElement,"+i.toString()+")");

        small_div.appendChild(number_button);
    }



    let button_element = document.createElement("button");
    button_element.setAttribute("onclick", "myFunction()");
    button_element.setAttribute("class", "dropbtn");

    let text_button = document.createTextNode("9");
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


    let buttons = document.querySelectorAll("button.in_button")
    for ([i, item] of buttons.entries()) {
        item.setAttribute("id", ((Math.floor(i/9)).toString())+(i%9).toString());
        let input1 = document.createTextNode("9");

        item.appendChild(input1)
        console.log(item);
    }
}

function myFunction(id) {
    document.getElementById(id).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function changeNumber(id, nr) {
    let btn = id.previousElementSibling;
    let new_text = document.createTextNode("5");
    btn.innerText = nr;

}