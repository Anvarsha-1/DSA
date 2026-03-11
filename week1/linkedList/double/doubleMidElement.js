class Node{
    constructor(value){
       this.value = value;
       this.prev = null;
       this.next = null;
    }
}

class DoubleLinkedList{
      constructor(){
        this.head = null
        this.tail = null
      }

      AddAtFirst(value){
       let node = new Node(value)
       if(this.head===null){
        this.head = node
        this.tail = node
        return
       }else{
        this.head.prev = node;
        node.next = this.head;
        
        this.head = node
       }

      }
      findMid(){
        if(this.head===null)return null
        let left = this.head
        let right = this.tail

        while(left!==right && left.next!==right){
            left=left.next;
            right = right.prev;
        }
        return left.value
      }
    print() {
        let cur = this.head
        let result = ""
        while (cur) {
            result += cur.value + "<=>"
            cur = cur.next
        } console.log(result+"null")
    }
}

let list = new DoubleLinkedList()

list.AddAtFirst(10)
list.AddAtFirst(20)
list.AddAtFirst(30)
list.AddAtFirst(40)
list.AddAtFirst(50)
list.AddAtFirst(60)
list.AddAtFirst(70)



console.log(list.findMid())

list.print()
