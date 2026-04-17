class TrieNode{
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
      let node = this.root

      for(let char of word){
        if(!node.children[char]){
            node.children[char] = new TrieNode()
        }
        node = node.children[char]
      }
      node.isEnd = true
    }
    search(word){
        let node = new TrieNode()

        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
    autoComplete(prefix){
        let node = this.root

        for(let char of prefix){
            if(!node.children[char])return []
            node = node.children[char]
        }
        let result = []

        const dfs =(currNode,path)=>{
            if(currNode.isEnd){
                result.push(path)
            }

            for(let char in currNode.children){
                dfs(currNode.children[char],path+char)
            }
        }
        dfs(node, prefix)
        return result
    }
}

let trie = new Trie()

trie.insert("cat")
trie.insert("car")
trie.insert("cart")
trie.insert("card")
trie.insert("coffee")

// console.dir(trie,{depth:null})

console.log(trie.autoComplete("ca"))