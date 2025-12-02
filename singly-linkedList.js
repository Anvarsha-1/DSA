
//Create a simple linkedList 

class Node {
    constructor (value){
      this.value = value;
      this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    addToFirst(value){
        let node = new Node(value)
        if (this.head === null) {
            this.head = node
        }else {
            node.next = this.head
            this.head = node
        }
    }
}

let list = new LinkedList()
list.addToFirst(20)
list.addToFirst(30)
list.addToFirst(40)
console.log(list)