class Graph{
    constructor(){
        this.adjList = {};  
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = []
        }
    }
    addEdge(v1,v2){
        if(!this.adjList[v1].includes(v2)){
        this.adjList[v1].push(v2)
        }
        if(!this.adjList[v2].includes(v1)){
        this.adjList[v2].push(v1)
        }
    }
    dfs(start,visited = new Set()){
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
        let visited = new Set([start])
        console.log(visited)
        while(queue.length){
            let node = queue.shift();
           console.log(node)
            for(let nei of this.adjList[node]){
                if(!visited.has(nei)){
                    visited.add(nei)
                    queue.push(nei)
                }
            }
        }
    }
    countComponent(){
        let count = 0
        let visited = new Set()

        for(let vertex in this.adjList){
            if(!visited.has(vertex)){
                visited.add(vertex)
                this.dfs(vertex,visited)
                count++
            }
        }return count
    } 
    dfsForDisconnect() {
        let visited = new Set()
        let result = []

        const Traversal = (vertex) => {
            visited.add(vertex)
            result.push(vertex)

            for (let nei of this.adjList[vertex]) {
                if (!visited.has(vertex)) {
                    Traversal(nei)
                }
            }
        }

        for (let vertex in this.adjList) {
            if (!visited.has(vertex)) {
                Traversal(vertex)
            }
        }
        return result

    }
    bfsForDisconnected() {
        let visited = new Set()
        let result = []

        for (let vertex in this.adjList) {
            if (!visited.has(vertex)) {
                this.helperBfs(visited, vertex, result)
            }
        } return result
    }
    helperBfs(visited, vertex, result) {
        let queue = [vertex]
        result.push(vertex)
        visited.add(vertex)
        while (queue.length) {
            let cur = queue.shift()
            for (let nei of this.adjList[cur]) {
                if (!visited.has(nei)) {
                    visited.add(nei)
                    result.push(nei)
                    queue.push(nei)
                }
            }
        }
    }
    
    shortestPath(start,target){
       let queue =  [start];
       let visited = new Set();
       let parent = {};
       
       visited.add(start);
       parent[start] = null

       while(queue.length){
        let node = queue.shift()

        if(node===target){
            
            let path = []
            let curr =  target

            while(curr!==null){
                path.push(curr)
                curr = parent[curr]
            }
            return path.reverse()
        }

        for(let neighbor of this.adjList[node]){
             if(!visited.has(neighbor)){
                visited.add(neighbor)
                parent[neighbor] = node
                queue.push(neighbor)
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
    graph.addVertex("E")


    graph.addEdge("A","B")
    graph.addEdge("B","D")
    graph.addEdge("B", "C")
    graph.addEdge("D","E")
    graph.addEdge("E", "D")


graph.dfs("A")
console.log("bfs")
graph.bfs("A")

console.log("Group")
console.log(graph.countComponent())
console.log(graph.adjList)

console.log("shortestPath")
console.log(graph.shortestPath("A","E"))