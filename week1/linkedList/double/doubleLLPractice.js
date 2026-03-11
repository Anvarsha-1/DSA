class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    Append(val){
        let node = new Node(val)
      if(!this.head){
         this.head = node
         this.tail = node
         return
      }
      this.tail.next = node
      node.prev  = this.tail
      this.tail = node
    }
    middleElement(){
        if(!this.head)return false
        let fast = this.head
        let slow = this.head
      while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
      }
        return slow.val
    }
    deleteMiddleElem(){
        if(!this.head) return false

        if(this.head===this.tail){
            this.head = null
            this.tail = null
            return true
        }
        let fast = this.head
        let slow = this.head
        let prev = null
        while(fast && fast.next){
            prev = slow
            fast = fast.next.next
            slow = slow.next
        }
        prev.next = slow.next
        if(slow===this.tail){
            this.tail = prev
        }
        return true
    }
    print(){
        if(!this.head)return false
        let cur = this.head
        let result = ""
        while(cur){
            result+=cur.val+"->"
            cur =cur.next
        }
        console.log(result+="null")
    }
}

let Dll = new DoubleLinkedList()

Dll.Append(10)
Dll.Append(20)
Dll.Append(30)
Dll.Append(40)
Dll.Append(50)
Dll.Append(60)



console.log(Dll.deleteMiddleElem())

Dll.print()