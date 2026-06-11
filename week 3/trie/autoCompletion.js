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
            if(!node.children[char]) return []

            node = node.children[char]
        }

        let result = []

        const dfs =((path,curNode)=>{
            if(curNode.isEnd){
                result.push(path)
            }
            for(let char in curNode.children){
                dfs(path+char,curNode.children[char])
            }
        })
        dfs(prefix,node)
        return result
    }
    remove(word){
        const dfs = ((node,depth)=>{

            if(depth===word.length){
                if(!node.isEnd) return false

                node.isEnd = false
                
                return Object.keys(node.children).length===0
            }

            let char = word[depth]
            let child = node.children[char]
            if(!child) return false

            let shouldDelete =  dfs(child,depth+1)

            if(shouldDelete){
                delete node.children[char]
            }

            return (
                !node.isEnd &&
                Object.keys(node.children).length===0
            )
        })
       return  dfs(this.root,0)
    }
}

let trie = new Trie()

trie.insert("cat")
trie.insert("car")
trie.insert("cart")
trie.insert("card")
trie.insert("coffee")
trie.insert("Hello")

// console.dir(trie,{depth:null})

console.log(trie.remove("co"))