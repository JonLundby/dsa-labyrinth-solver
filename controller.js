"use strict";

import * as view from "./view.js";
import Stack from "./stack.js";

window.addEventListener("load", init);

const endpoint = `./labyrinth_03.json`;
let model;
let startCell;
let goalCell;
let route = []; //new Stack();
let strategy;
let goalFound = false;

async function init() {
    // model sættes til at være javascript objekt parsed fra json
    model = await getLabyrinthModel();
    
    
    // bygger den visuelle labyrint/grid
    view.createGrid(model);
    view.showVisualLabyrinth(model);
    
    // sætter start og goal celler svarende til model/maze/labyrint
    startCell = model.maze[model.start.row][model.start.col];
    goalCell = model.goal;
    
    // eventlisteners
    document.querySelector("#solve-btn").addEventListener("click", () => {
        visitCell(startCell); // start-cellen bliver sendt med som den første celle der besøges
    });
    
}

// fetch model/json data
async function getLabyrinthModel() {
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
}

// Depth-First Search algoritmen
function visitCell(cell) {
    
    // markerer cellen som besøgt
    cell.visited = true;
    
    // pusher cellen til route
    route.push(cell);
    // console.log("route after push: ", [...route]);

    view.markVisitedCell(route, model)
    
    // tjekker om den celle der besøges er goal cellen
    if (goalCell.row === cell.row && goalCell.col === cell.col) {
        console.log("GOAL FOUND!!!");
        goalFound = true;
        view.markGoalRouteCells(route, model)
        return;
    }

    // finder alle naboer der ikke er visited og som ikke er blokeret af en væg
    let neighbours = getValidNeighbours(cell);

    // rekursivt kald til visitCell så længe der er en tilgængelig nabo
    while (neighbours.length > 0 && !goalFound) {
        visitCell(neighbours[0])

        neighbours = getValidNeighbours(cell)
    }

    // 
    if (!goalFound) {
        route.pop();
    }
}

function getValidNeighbours(cell) {
    let neighbours = [];

    // Strategi for at tjekke vægge mod N, E, S, W
    const directions = [
        { name: "north", rowChange: -1, colChange: 0 },
        { name: "east", rowChange: 0, colChange: 1 },
        { name: "south", rowChange: 1, colChange: 0 },
        { name: "west", rowChange: 0, colChange: -1 },
    ];

    // for hver mulig retning af cellen...
    for (const dir of directions) {
        if (!cell[dir.name]) {
            const nextRow = cell.row + dir.rowChange;
            const nextCol = cell.col + dir.colChange;

            if (!model.maze[nextRow][nextCol].visited) {
                neighbours.push(model.maze[nextRow][nextCol]);
            }
        }
    }

    return neighbours;
}
