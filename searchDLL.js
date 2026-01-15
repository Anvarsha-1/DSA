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

     InsertAtLast(value){
        let node = new Node(value)
        if(this.head===null){
            this.head = node
            this.tail = node
        }

        this.tail.next = node;
        node.prev = this.tail;

        this.tail= node
     }

     searchElement(val){
        if(this.head===null) return null
        if(val===this.head.value)return this.head
        if(val===this.tail.value) return this.tail
        
        let cur = this.head
        while(cur){
            if(cur.value===val){
                return cur
            }cur = cur.next;
        }
        return null
     }

     searchNElement(arr){
        if(this.head===null) return null

        let set = new Set(arr)
        let cur = this.head;
        let found = []
        while(cur){
            if(set.has(cur.value)){
                found.push(cur.value)
                set.delete(cur.value)
            }cur=cur.next
        }return found;
     }
     print(){
        let current = this.head;
        let result = "";
        while(current){
            result+=current.value+"<->";
            current = current.next;
        }
        console.log(result+"null")
     }
}

let list1 = new DoubleLinkedList()

list1.InsertAtLast(10);
list1.InsertAtLast(20);
list1.InsertAtLast(30);
list1.InsertAtLast(40);
list1.InsertAtLast(50);
list1.InsertAtLast(60);

console.log(list1.searchElement(20))

console.log(list1.searchNElement([10,20,30,200,100]))

list.print()