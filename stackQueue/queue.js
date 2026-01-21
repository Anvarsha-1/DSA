class Queue{
    constructor(){
        this.data = []
        this.head = 0
        this.tail = 0
    }

    enqueue(x) {
      this.data[this.tail++] = x
    }

    dequeue(){
        if(this.isEmpty()) return null
        let val = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return val
    }

    isEmpty(){
        return this.tail === this.head
    }

    front(){
        return isEmpty() ? null : this.head
    }
    back(){
        return isEmpty() ? null : this.tail
    }
}

let queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

queue.dequeue()

console.log(queue)

