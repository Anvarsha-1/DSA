class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    
    AddToFirst(value){
        let node = new Node(value)
        if(this.head===null){
            this.head = node
            return
        }else{
            node.next = this.head
            this.head = node
        }
    }

    AddToLast(value){
       let node = new Node(value)
       if(this.head===null){
        this.head = node
        return
       }else{
        let current = this.head
        while(current.next!==null){
            current = current.next
        }
        current.next = node
       }
    }

    ArrayToList(arr){
        for(let a of arr){
            this.AddToLast(a)
        }
    }
    print(){
        let cur = this.head
        let result = []
        while(cur){
            result.push(cur.value)
            cur=cur.next
        }console.log(result.join("->"))
    }

}

let node = new LinkedList()

let arr = [1,2,3,4,5,6,7,8,9,10]
node.ArrayToList(arr)

node.print()


