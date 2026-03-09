class Node{
    constructor(value){
        this.value= value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertAtFirst(value){
        let node = new Node(value)

        if(this.head===null){
            this.head=node;
            this.tail=node;
            return
        }
        this.head.prev = node;
        node.next = this.head;

        this.head = node
    }
    deleteKthFromEnd(k){
       if(0>=k || typeof(k)!== "number" || this.head==null) return null;

       let fast = this.head;
       let slow = this.head;

       for(let i=0;i<k;i++){
        if(!fast)  return console.log("invalid k");
        fast = fast.next
       }

       while(fast!==null){
        slow = slow.next;
        fast = fast.next;
       }

       if(slow===this.tail){
        this.tail = slow.prev;
        if(this.tail)this.tail.next = null
       }else if(slow===this.head){
          this.head = slow.next;
          if(this.head)this.head.prev = null
       }
       else{
        slow.prev.next = slow.next;
        slow.next.prev = slow.prev;
       }
      
    }
    print(){
        let result = ""
        let cur = this.head;

        while(cur){
            result+=cur.value+"<->";
            cur = cur.next;
        }console.log(result+"null")
    }
}

let list = new DoubleLinkedList();

list.insertAtFirst(50)
list.insertAtFirst(40)
list.insertAtFirst(30)
list.insertAtFirst(20)
list.insertAtFirst(10)

list.deleteKthFromEnd(1)

list.print()