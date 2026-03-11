
//class for creating new node 
class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.size = 0
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    //Adding value from the back like .push() in array
    append(value) {
        this.size++
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            return
        }

        this.tail.next =  node
        this.tail = node
    }
    //Inserting node form the front like .unshift() from array
    unshift(value){
        this.size++
        let node = new Node(value)
        if(!this.head){
           this.head = node
           this.tail = node
           return
        }
        node.next = this.head
        this.head = node
    }
    //find an element form linkedList
    search(value){
        if(!this.head) return
        if(this.head.value===value) return true
        if(this.tail.value===value) return true
        let cur = this.head.next
        while(cur.next.next){
            if(cur.value==value){
                return true
            }
            cur = cur.next
        }
        return false
    }
    //insert a value at specific position function will take two argument 1.position 2.value
    insertAtPosition(pos,value){
        if(!this.head)return 
        let cur = this.head
        let count = 1
        while((pos)-1>count){
            if(cur===null){
                return false
            }
            count+=1
           cur = cur.next    
        }
        let newNode = new Node(value)
        let next = cur.next
        cur.next = newNode
        newNode.next = next
        return true
    }
   //Delete a tail from a linked List
    deleteTail(){
        if(!this.head || !this.tail) return
        if(this.head===this.tail){
            this.tail = null
            this.head = null
            return
        }
        let cur = this.head
        while(cur.next!==this.tail){
           cur = cur.next
        }
        this.tail = cur
        cur.next = cur.next.next 
        return true
    }
    //find middle element from a linked list complexity = O(n)
    middleElem(){
        if(!this.head) return
        let slow = this.head
        let fast = this.head
        while(fast && fast.next && fast.next.next){
            fast = fast.next.next
            slow = slow.next
        }
        slow.next = slow.next.next
        return true
    }
    //reverse a linkedList complexity- O(n)
    reverse(){
        if(!this.head) return 
        let cur = this.head
        let prev = null
        while(cur){
          let next = cur.next
          cur.next = prev
          prev =  cur
          cur = next
        }return this.head = prev
    }
    //check if its a circle linkedList not complete
    findCircle(){
        if(!this.head) return false
        let slow = this.head
        let fast = this.head
        while(fast&&fast.next){
            fast = fast.next.next
            slow = slow.next
            if(fast===slow){
                return true
            } 
        }
       return false

    }
    //delete a specific node from linked list
    deleteValue(val){
      if(!this.head)return
      if(!val)return null
      if(this.head.value===val){
        this.head = this.head.next
        if(!this.head){
            this.tail = null
            return
        }
      }
    }

    FindNthFromEnd(pos){
      if(!this.head) return
      if(pos<1)return null
      let slow =this.head
      let fast = this.head
      let count = 1
      while(count<pos){
        if(fast===null){
            return null
        }
         fast = fast.next
         count++

      }
      console.log(count)
      while(fast.next){
        slow = slow.next
        fast = fast.next
      }
     return fast!==null ? slow.value : null
    }
    //find duplicate in sorted linkedList
   findDuplicate(){
    if(!this.head)return false
    let cur = this.head
    let result = []
    while(cur && cur.next){
        if(cur.value===cur.next.value){
             result.push(cur.value)
        }
        cur = cur.next
    }return result
   }

   //find duplicate form a unsorted linked List
   findDuplicateUnSorted(){
    if(!this.head)return []
    let seen = new Set()
    let duplicate = new Set()
    let cur = this.head
    while(cur){
        if(seen.has(cur.value)){
            duplicate.add(cur.value)
        }else{
            seen.add(cur.value)
        }
        cur = cur.next
    }return [...duplicate]
   }

   //remove duplicate from a sorted list
   removeDuplicate(){
    if(!this.head)return false
    let cur = this.head
    while(cur && cur.next){
       if(cur.value===cur.next.value){
        cur.next = cur.next.next
        continue
       }cur = cur.next
    }this.tail = cur
    return true
   }

   //remove duplicate from a unsorted list
   removeDupSorted(){
    if(!this.head)return false
    let seen = new Set()
    let cur = this.head
    let prev = null
    while(cur){
      if(seen.has(cur.value)){
        prev.next = cur.next
      }else{
        seen.add(cur.value)
        prev = cur
      }
      cur = cur.next
    }return true
   }

   mergeTwoLinkedList(list1,list2){
    if(!list1.head) return list2
    if(!list2.head) return list1
    
    let cur1 = list1.head
    let cur2 = list2.head

    while(cur1 && cur2){
        let next1 = cur1.next
        let next2 = cur2.next
        
        cur1.next = cur2

        if(!next1){
          list1.tail = list2.tail
          break 
        }
        cur2.next = next1

        cur1 = next1
        cur2 = next2
    }
    list2.head= null
    list2.tail = null
    list2.size = 0
    return list1

   }
    print(){
        if (!this.head) {
            return
        }
        let current = this.head
        let result = ""
        while (current) {
            result+=current.value + "-->"
            current = current.next
        } result+="null"
        console.log(result)
        
    }
}

let list1 = new LinkedList()
let list2 = new LinkedList()



list1.unshift(10)
list1.unshift(10)
list1.unshift(20)
list1.unshift(30)
list1.unshift(40)
list1.unshift(50)
list1.unshift(50)
list1.unshift(50)
list1.unshift(10)

console.log(list1.removeDupSorted())

list1.print()


