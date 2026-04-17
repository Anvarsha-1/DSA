class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = []
        }
    }

    addEdges(v1, v2) {
        if (!this.adjList[v1]) this.addVertex(v2)
        if (!this.adjList[v2]) this.addVertex(v1)

        if (!this.adjList[v1].includes(v2)) {
            this.adjList[v1].push(v2)
        }
        if (!this.adjList[v2].includes(v1)) {
            this.adjList[v2].push(v1)
        }
    }
    removeEdge(v1, v2) {
        if (!this.adjList[v1] || !this.adjList[v2]) return;
        this.adjList[v1] =
            this.adjList[v1].filter((vertex) => vertex !== v2)

        this.adjList[v2] =
            this.adjList[v2].filter((vertex) => vertex !== v1)
    }
    removeVertex(vertex) {
        if (!this.adjList[vertex]) return
        while (this.adjList[vertex].length) {
            let adjacentVertex = this.adjList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjList[vertex]
    }
    hasCycle() {
        let visited = new Set()

        for (let vertex in this.adjList) {
            if (!visited.has(vertex)) {
                if (this.dfsCycle(vertex, visited, null)) {
                    return true
                }
            }
        } return false
    }

    dfsCycle(vertex, visited, parent) {
        visited.add(vertex)

        for (let neighbor of this.adjList[vertex]) {
            if (!visited.has(neighbor)) {
                if (this.dfsCycle(neighbor, visited, vertex)) {
                    return true
                }

            }
            else if (neighbor !== parent) {
                return true
            }
        } return false
    }
}

let graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")


graph.addEdges("A", "B")
graph.addEdges("B", "C")


console.log(graph.adjList)

console.log(graph.hasCycle())

// graph.removeEdge("A","C")


// console.log(graph.adjList)

// graph.removeVertex("A")

// console.log(graph.adjList)