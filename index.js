let currentTool = "";
let lastItemRemoved = "";

const resetActiveTool = () => {
    let previousTool = document.getElementById(currentTool);
    if (previousTool) { previousTool.classList.remove("activeTool") }
    currentTool = "";
}

const resetInventory = () => {
    lastItemRemoved = "";
    let inventory = document.getElementById("inventory");
    inventory.className = "";
}

const onClickToolEvent = (toolName) => {
    resetActiveTool();
    if (toolName !== "inventory" || (toolName == "inventory" && lastItemRemoved)) {
        currentTool = toolName;
        let clickedTool = document.getElementById(toolName);
        clickedTool.classList.add("activeTool");
    }
}


const newCellEvent = () => {
    let cells = document.querySelectorAll("td");
    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if ((currentTool == "pickaxe" && cell.className == "rock") ||
                (currentTool == "shovel" && (cell.className == "soil" || cell.className == "grass")) ||
                (currentTool == "axe" && (cell.className == "treeLeaves" || cell.className == "wood"))) {
                lastItemRemoved = cell.className;
                let inventory = document.getElementById("inventory");
                inventory.className = cell.className;
                cell.className = "";
            } 
            else if (currentTool=="inventory") {
                cell.className=lastItemRemoved;
                currentTool="";
                resetInventory();
            }
        });
    }
    )
}



//drawing the game background 
const newGame = () => {
    resetActiveTool();
    resetInventory();
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
            if ((column == 25 && (row >= 8 && row <= 10))) {
                color = "wood"
            }

            //adding tree leaves
            if (((column >= 24 && column <= 26) && (row >= 5 && row <= 7))) {
                color = "treeLeaves"
            }

            //adding cloud
            if (((column >= 12 && column <= 17) && (row >= 4 && row <= 6))) {
                color = "cloud"
            }

            gameCells += `<td class=${color}></td>`
        }
        gameCells += "</tr>"
    }

    gameBackground.innerHTML = gameCells;
    newCellEvent();
}

newGame();










