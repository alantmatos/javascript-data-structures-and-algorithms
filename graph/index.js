
///////////////////////////////////


class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(data) {
    if (!this.adjacencyList[data]) {
      this.adjacencyList[data] = []
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }


  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex =>
        vertex !== vertex2)
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex =>
        vertex !== vertex1)
    }
  }


  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        let adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex)
      }
      delete this.adjacencyList[vertex];
    }
  }

  // // DFS Graph traversal
  // // Recursive 

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      });
    })(start);
    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      });
    }
    return result;
  }


  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);


      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }







}