class Node{
    constructor(value){
      this.value = value;
      this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value){
      let node = new Node(value)

      if(!this.front){
        this.front = this.rear = node
      }else{
         this.rear.next = node
         this.rear = node
      }
      this.size++
    }
    dequeue(){
        if(!this.front) return null

        const value = this.front.value
        this.front = this.front.next

        if(!this.front)  this.rear=null
        this.size--
        return value
    }
    peek(){
        return this.front ? this.front.value : null
    }
    isEmpty(){
        return this.size===0
    }
   
    print(){
        let res = ""
        let cur = this.front
        while(cur){
            res+=cur.value+"=>"
            cur = cur.next
        }
        console.log(res,"null")
    }
    getSize(){
        return this.size
    }
}


let queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.dequeue()
console.log(queue.getSize())

queue.print()