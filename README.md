# Labyrinth solver

[Try the labyrinth solver](https://jonlundby.github.io/dsa-labyrinth-solver/)

- For this labyrinth solver I used a Depth-First-Search algorithm with backtracking.

- The algorithm is recursive with a stack so that every cell visited will be stored in the stack called route

- The route is not animated but cells visited during the search are marked and the route to goal is also marked separately

- You can add more labyrinths_xx.json to the project root folder and change the endpoint in the controller script to try other labyrinths