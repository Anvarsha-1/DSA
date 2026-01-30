class Node{
    constructor(value){
        this.value = value;;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail =null
    }

    InsertAfter(value){
        let node = new Node(value)
        if(this.head===null){
            this.head= node;
            this.tail = node;
            return
        }else{
           this.tail.next = node;
           node.prev = this.tail

           this.tail = node
        }
    }

    reverse(){
        let current = this.head;
        let temp = null

        while(current){
            temp = current.prev
            current.prev = current.next
            current.next = temp

            current = current.prev
        }
        if(temp){
            this.head = temp.prev
        }
    }
    print(){
        let res = ""
        let cur = this.head;

        while(cur){
          res+= cur.value+"<=>"
          cur = cur.next
        }
        console.log(res+"null")
    }
}


let list = new DoubleLinkedList()

list.InsertAfter(10)
list.InsertAfter(20)
list.InsertAfter(30)
list.InsertAfter(40)
list.InsertAfter(50)
list.reverse()

list.print()