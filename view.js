export function createGrid(model) {
    const labyrinthContainer = document.querySelector("#grid-container");

    for (let row = 0; row < model.rows; row++) {
        for (let col = 0; col < model.cols; col++) {
            // laver et nyt div element og adder css klassen cell
            const cell = document.createElement("div");
            cell.classList.add("cell");

            // indsætter cellen i containeren
            labyrinthContainer.insertAdjacentElement("beforeend", cell);

            document.documentElement.style.setProperty("--grid-rows", model.rows);
            document.documentElement.style.setProperty("--grid-cols", model.cols);
        }
    }
}

export function showVisualLabyrinth(model) {
    const visualCells = document.querySelectorAll("#grid-container .cell");

    for (let row = 0; row < model.rows; row++) {
        for (let col = 0; col < model.cols; col++) {
            const cell = model.maze[row][col];

            const visualCellIndex = row * model.cols + col;
            const visualCell = visualCells[visualCellIndex];

            // tilføjer klasser til cellen baseret på hvilke vægge der er i cellen
            if (cell.north) {
                visualCell.classList.add("north");
            }
            if (cell.east) {
                visualCell.classList.add("east");
            }
            if (cell.south) {
                visualCell.classList.add("south");
            }
            if (cell.west) {
                visualCell.classList.add("west");
            }
            if (model.goal.row === row && model.goal.col === col) {
                visualCell.classList.add("goal");
            }
            if (model.start.row === row && model.start.col === col) {
                visualCell.classList.add("start");
            }
        }
    }
}

export function markVisitedCell(route, model) {
    const visualCells = document.querySelectorAll("#grid-container .cell");
    for (const cell of route) {
        const visualCellIndex = cell.row * model.cols + cell.col;
        const visualCell = visualCells[visualCellIndex];
        visualCell.classList.add("visited")
    }
}

export function markGoalRouteCells(route, model) {
    const visualCells = document.querySelectorAll("#grid-container .cell");
    for (const cell of route) {
        const visualCellIndex = cell.row * model.cols + cell.col;
        const visualCell = visualCells[visualCellIndex];
        visualCell.classList.add("route")
    }
}
