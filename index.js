//drawing the game background 
const newGame = () => {
    let gameBackground = document.getElementById("gameBackground");
    let gameCells = "";
    for (let row = 0; row < 20; row++) {
        gameCells += "<tr>"
        for (let column = 0; column < 30; column++) {
            let color = "";
            if (row < 11) {
                color = ""
            } else if (row == 11) {
                color = "grass"
            } else {
                color = "soil"
            }

            //adding leaves
            if ((row == 10 && (column >= 4 && column <= 6)) || (row == 9 && column == 5)) {
                color = "treeLeaves"
            }

            //adding rocks
            if ((row == 10 && (column == 29 || column == 28 || column == 21 || column == 20))) {
                color = "rock"
            }

            //adding tree wood
            if ((column == 25 && (row>=8 && row <= 10))) {
                color = "wood"
            }

            //adding tree leaves
             if (( (column>=24 && column <= 26) && (row>=5 && row <= 7))) {
                color = "treeLeaves"
            }

            //adding cloud
            if (( (column>=12 && column <= 17) && (row>=4 && row <=6 ))) {
                color = "cloud"
            }

            gameCells += `<td class=${color}></td>`
        }
        gameCells += "</tr>"
    }

    gameBackground.innerHTML = gameCells;
}

newGame();


let cells = document.querySelectorAll("td");
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        cell.className = "";
    });
}
)






