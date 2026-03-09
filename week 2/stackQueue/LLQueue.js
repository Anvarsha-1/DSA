class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class QueueLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(x) {
        let node = new Node(x)
        if (!this.head) {
            this.head = this.tail = node
            return
        }

        this.tail.next = node
        this.tail = node

    }

    dequeue() {
        if (!this.head) return null;

        const v = this.head.value

        this.head = this.head.next

        if (!this.head) this.tail = null
        return v
    }

    front() {
        return this.head === null ? null : this.head.value
    }

    isEmpty() {
        return this.head === null
    }

}

let queue = new QueueLL()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.dequeue()


console.log(queue.front())
console.log(queue)

