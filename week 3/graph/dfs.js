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
        if (!this.adjList[v1]) this.addVertex(v1)
        if (!this.adjList[v2]) this.addVertex(v2)

        if (!this.adjList[v1].includes(v2)) {
            this.adjList[v1].push(v2)
        }
        if (!this.adjList[v2].includes(v1)) {
            this.adjList[v2].push(v1)
        }
    }
    dfs(start, visited = new Set()) {
        if(!start) return []
        console.log(start)
        visited.add(start)
        for(let neighbor of this.adjList[start]){
            if(!visited.has(neighbor)){
                this.dfs(neighbor,visited)
            }
        }

    }
    bfs(start){
        let queue = [start] 
        let visited = new Set()
        visited.add(start)

        while(queue.length){
            let node = queue.shift()
             console.log(node)
            for(let nei  of this.adjList[node]){
                if(!visited.has(nei)){
                    visited.add(nei)
                    queue.push(nei)
                }
            }
        }
    }
    hasCycle(){
      let visited = new Set()
      for(let vertex  in this.adjList){
          if(!visited.has(vertex)){
            if(this.dfsCycle(vertex,visited,null)){
                return true
            }
          }
      }return false
    }
    dfsCycle(vertex,visited,parent){
        visited.add(vertex)
        for(let nei of this.adjList[vertex]){
            if(!visited.has(nei)){
                if (this.dfsCycle(nei,visited,vertex)){
                    return true
                }
            }else if(parent!==nei){
                return true
            }
        }return false
    }
    shortestPath(start,target){
        let queue = [start]
        let visited =  new Set(start)
        let parent = {}
        
        parent[start] = null

        while(queue.length){

            let node = queue.shift()
            if(node===target){
                let cur = target
                let path = []
                while(cur!==null){
                  path.push(cur)
                  cur = parent[cur]
                }
                return path.reverse()
            }

            for(let nei of this.adjList[node]){
                if(!visited.has(nei)){
                    queue.push(nei)
                    parent[nei] = node
                    visited.add(nei)
                }
            }
        }return []
    }
}


let graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")

graph.addEdges("A","B")
graph.addEdges("B", "C")
graph.addEdges("C","D")

console.log(graph.adjList)
// graph.dfs("A")
// console.log("BFS")
// graph.bfs("B")
// console.log("has Cycle")
// console.log(graph.hasCycle())
console.log("Path")
console.log(graph.shortestPath("A","D"))