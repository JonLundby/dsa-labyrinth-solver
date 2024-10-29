export { createLabyrinth };

function createLabyrinth(data) {
    // console.log(data);
    
    // sætter html grid-container element til at være samme størrelse som labyrinten
    document.documentElement.style.setProperty("--grid-rows", data.rows);
    document.documentElement.style.setProperty("--grid-cols", data.cols);

    const labContainer = document.querySelector("#grid-container");

    for (let row = 0; row < data.rows; row++) {
        for (let col = 0; col < data.cols; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            if (data.maze[row][col].north) {
                cell.classList.add("north");
            }
            if (data.maze[row][col].east) {
                cell.classList.add("east");
            } 
            if (data.maze[row][col].south) {
                cell.classList.add("south");
            } 
            if (data.maze[row][col].west) {
                cell.classList.add("west");
            }
            if (data.goal.row === row && data.goal.col === col) {
                cell.classList.add("goal")
            }
            if (data.start.row === row && data.start.col === col) {
                cell.classList.add("start")
            }
            labContainer.insertAdjacentElement("beforeend", cell);
        }
    }
}
