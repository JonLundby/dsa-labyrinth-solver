export { labyrinthModel };

let labyrinthModel = await getLabyrinthModel();

async function getLabyrinthModel() {
    const response = await fetch(`./labyrinth_01.json`);
    const data = response.json();

    return data;
}