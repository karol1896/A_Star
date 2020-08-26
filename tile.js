function Tile(i, j) {
  // Coordinates
  this.i = i;
  this.j = j;

  // f, g, and h values for A*
  this.f = 0;
  this.g = 0;
  this.h = 0;

  // Neighbors
  this.neighbors = [];

  // Previous elemneths of path
  this.previous = undefined;

  this.wall = false;
  if (random(1) < 0.2) {
    this.wall = true;
  }

  // Display
  this.show = function(col) {
    if (this.wall) {
      fill(0);
      noStroke();
      //Eliptical shape of obstacles
      //ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
      //Rectangle shape of obstacles
      rect(this.i * w, this.j * h, w, h);
    } else if (col) {
      fill(col);
      rect(this.i * w, this.j * h, w, h);
    }
  };

  // Adding neighbors
  this.addNeighbors = function(grid) {
    var i = this.i;
    var j = this.j;
    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j]);
    }
    if (i > 0) {
      this.neighbors.push(grid[i - 1][j]);
    }
    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }
    if (j > 0) {
      this.neighbors.push(grid[i][j - 1]);
    }
    if (i > 0 && j > 0) {
      this.neighbors.push(grid[i - 1][j - 1]);
    }
    if (i < cols - 1 && j > 0) {
      this.neighbors.push(grid[i + 1][j - 1]);
    }
    if (i > 0 && j < rows - 1) {
      this.neighbors.push(grid[i - 1][j + 1]);
    }
    if (i < cols - 1 && j < rows - 1) {
      this.neighbors.push(grid[i + 1][j + 1]);
    }
  };
}
