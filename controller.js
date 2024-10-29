import * as view from "./view.js";
import * as model from "./model.js";
import Stack from "./stack.js";

const labyrinth = model.labyrinthModel;
let startCell;
let goalCell;
let route = new Stack();
let strategy;

init();

function init() {
    // bygger den visuelle labyrint og sætter start og goal cell
    view.createLabyrinth(labyrinth);
    startCell = labyrinth.maze[labyrinth.start.row][labyrinth.start.col];
    goalCell = labyrinth.maze[labyrinth.goal.row][labyrinth.goal.col];

    console.log(labyrinth);

    document.querySelector("#dfs-solve-btn").addEventListener("click", () => {
        visitCell(startCell);
    });
    document.querySelector("#strategy-select").addEventListener("change", setStrategy);

    // pusher start cellen ind i route
    // route.push(labyrinth.maze[labyrinth.start.row][labyrinth.start.col]);
    // console.log("peek route: ", route.peek())
}

// Depth-First Search algoritmen
function visitCell(cell) {
    console.log("visit cell: ", cell);
}

function setStrategy() {
    strategy = document.querySelector("#strategy-select").value;
    console.log("strategy: ", strategy);
}
