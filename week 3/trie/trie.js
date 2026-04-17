
class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }

}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word) {
        let node = this.root

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char];
        }
        node.isEnd = true
    }
    search(word) {
        let node = this.root

        for (let char of word) {
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEnd
    }

}

let trie = new Trie()

trie.insert("cat")
trie.insert("car")


console.log(trie.search("cat"))

console.dir(trie, { depth: null });
// console.log(JSON.stringify(trie, null, 2));

// Trie {
//     root: TrieNode {
//         children: {
//             c: TrieNode {
//                 children: {
//                     a: TrieNode {
//                         children: {
//                             t: TrieNode { children: { }, isEnd: true },
//                             r: TrieNode { children: { }, isEnd: true }
//                         },
//                         isEnd: false
//                     }
//                 },
//                 isEnd: false
//             }
//         },
//         isEnd: false
//     }
