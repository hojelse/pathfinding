A reworked version of this project can be found at [/pathfinding-visualizer](https://github.com/hojelse/pathfinding-visualizer)

# Pathfinding visualization

A visualization website for pathfinding algorithms

## Pathfinding

Based on [Shortest Paths](https://algs4.cs.princeton.edu/44sp/) from Algorithms, 4th Edition by Robert Sedgewick and Kevin Wayne.

Dijkstra [Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

A* [Wikipedia](https://en.wikipedia.org/wiki/A*_search_algorithm)

## Development

Typescript and Sass in vscode

### Typescript

install [node.js](https://nodejs.org/en/download/) to use `npm`

`npm install -g typescript` to install typescript compiler globally

`tsc` to compile `.ts` files in `./src/` to `.js` files in `./docs/`

`tsc --watch` to recompile on file changed

### Sass

Install [Visual Studio Code](https://code.visualstudio.com/) and extension [Live Sass Compiler](https://github.com/ritwickdey/vscode-live-sass-compiler) by Ritwick Dey

Add following to vscode user setting `settings.json` to compile `.sass` files to `./docs/styles/`
```
"liveSassCompile.settings.formats": [{
  "format": "expanded",
  "extensionName": ".css",
  "savePath": "./docs/styles"
}]
```
