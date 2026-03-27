class Node{
    constructor(val){
        this.val =  val
        this.next = null
        this.prev = null
    }
}

class DLList {
    constructor(){
        this.head = null
        this.tail = null
    }

    insertAtStart(value){
        let node = new Node(value)

        if(!this.head){
            this.head = node
            this.tail = node
            return
        }
        this.head.prev= node
        node.next = this.head
        this.head = node  
    }
    insertAtEnd(value){
        let node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
            return
        }
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
    }
    deleteFromStart(){
        if(!this.head)return false
        if(this.head===this.tail){
            this.head = null
            this.tail = null
            return true
        }
        this.head = this.head.next
        this.head.prev= null
        return true
    }
    deleteFromEnd(){
        if(!this.head) return false
        if(this.tail==this.head){
            this.tail = null
            this.head = null
            return true
        }

        this.tail = this.tail.prev
        this.tail.next = null
        return true
    }

    reverse(){
        if(!this.head)return false
       
        let cur = this.head
        let temp = null
        while(cur){
          temp = cur.prev
          cur.prev = cur.next
          cur.next = temp
          cur = cur.prev
        }
        temp = this.head
        this.head = this.tail
        this.tail = temp
        return false
    }
    middle(){
        if(!this.head)return false
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next
        }return slow
    }
    delete(val){
        if(!this.head)return false
        let cur =this.head
        while(cur){
            if(cur.val===val){
                if(cur===this.head){
                   this.head = cur.next
                   if(this.head) this.head.prev = null
                   else this.tail = null
                }else if(this.tail.val===val){
                    this.tail = this.tail.prev
                    this.tail.next = null
                }else{
                    cur.prev.next = cur.next
                    cur.next.prev = cur.prev
                }return true
            }
            cur = cur.next
        }
        return false
    }
    insertAtPosition(pos,val){
     if(!this.head)return false
    let cur = this.head
    let node = new Node(val)
     if(pos===1){
         node.next = this.head
         if (this.head) this.head.prev = node
         this.head = node
         return true
     }
     let count = 1
     while((pos-1)>count && cur){
        cur = cur.next
     }
     if(!cur) return false
     
     node.next = cur.next
     node.prev = cur
     if(cur.next){
        cur.next.prev = node
     }
     cur.next = node
     return true
    }
    print(){
        if(!this.head) return
        let cur = this.head
        let result = ""
        while(cur){
            result +=cur.val +"->"
            cur = cur.next
        }
        console.log(result+"null")
    }
}

let list = new DLList()

list.insertAtEnd(10)
list.insertAtEnd(20)
list.insertAtEnd(30)
list.insertAtEnd(40)
list.insertAtEnd(50)

console.log(list.insertAtPosition(1,90))

list.print()