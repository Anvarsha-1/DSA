class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    InsertLast(value){
        let node = new Node(value);

        if(this.head===null){
            this.head = node;
            this.tail = node;
            return
        }
        
        this.tail.next = node;
        node.prev = this.tail;

        this.tail = node;
    }
    deleteMiddle(){
        if(this.head===null) return null

        if(this.head===this.tail){
            this.head=null;
            this.tail=null;
            return
        }
        let left = this.head;
        let right = this.tail;
        while(left!==right && left.next!==right){
            left= left.next
            right = right.prev
        }
        let mid = left

        if (mid === this.head){
            this.head = mid.next;
            this.head.prev = null
            return
        }
         
        else if (mid === this.tail){
            this.tail = mid.prev;
            this.tail.next = null
            return
        } 

        if(mid) mid.next.prev = mid.prev;
        if(mid) mid.prev.next = mid.next

        
    }
    
    
    print(){
        let cur = this.head;
        let res = "";
        while(cur){
            res+=cur.value + "<->";
            cur=cur.next
        }
        console.log(res+"null")
    }
}

let list = new  DoubleLinkedList()

list.InsertLast(10)
list.InsertLast(20)
list.InsertLast(30)
list.InsertLast(40)


list.deleteMiddle()

list.print()