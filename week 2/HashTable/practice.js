//hash Table implementation

// class HashTable{
//     constructor(size=10){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let char of key){
//             total+=key.charCodeAt(char)
//         }
//         return total%this.size
//     }

//     set(key,value){
//         let index = this.hash(key)

//         this.table[index] = value
//     }
//     get(key){
//         let index = this.hash(key)
//         return this.table[index]
//     }
//     display(){
//         console.log(this.table)
//     }
// }

// let hashTable = new HashTable()

// hashTable.set("name","Anvarsha")
// hashTable.set("age", 22)
// hashTable.set("role", "Developer")


// hashTable.display()

//hashTable with collision resolution ->chaining (Array)

// class HashTable {
//     constructor(size = 10) {
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key) {
//         let total = 0
//         for (let char of key) {
//             total += char.charCodeAt(0)
//         }
//         return total % this.size
//     }

//     set(key, value) {
//         let index = this.hash(key)
//        if(!this.table[index]){
//             this.table[index] = []
//        }

//         this.table[index].push([key,value])
//     }
//     get(key) {
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             for(let [k,v] of bucket){
//                 if(k===key){
//                     return v
//                 }
//             }return undefined
//         }
//         return this.table[index]
//     }
//     display() {
//         console.log(this.table)
//     }
// }

// let hashTable = new HashTable()

// hashTable.set("ab", "Anvarsha")
// hashTable.set("ba", 22)
// hashTable.set("role", "Developer")


// hashTable.display()

//collision resolution using linked list


class Node{
    constructor(key,val){
        this.key  = key
        this.val = val
        this.next = null
    }
}

class HashTable {
    constructor(size = 10) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let char of key) {
            total += char.charCodeAt(0)
        }
        return total % this.size
    }

    set(key, value) {
        let index = this.hash(key)
        let node =  new Node(key,value)
        if (!this.table[index]) {
            this.table[index] = node
            return
        }
        let cur = this.table[index]
        while(cur.next){
            cur = cur.next
        }

        cur.next = node
    }
    get(key) {
        let index = this.hash(key)
        let cur = this.table[index]
        while(cur) {
            if(cur.key===key){
               return cur.val
            }
            cur=cur.next
        }
            return undefined

    }
    display() {
        console.log(this.table)
    }
}

let hashTable = new HashTable()

hashTable.set("ab", "Anvarsha")
hashTable.set("ba", 22)
hashTable.set("role", "Developer")


hashTable.display()