class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    InsertAtLast(value) {
        let newNode = new Node(value)
        if (this.head === null) {
            this.head = this.tail = newNode
            return
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail

            this.tail = newNode
        }
    }

    InsertAtFirst(value) {
        let newNode = new Node(value)
        if (this.head === null) {
            this.head = this.tail = newNode
            return
        } else {
            newNode.next = this.head
            this.head.prev = newNode

            this.head = newNode
        }
    }
    delete(value) {
        let cur = this.head

        while (cur) {
            if (cur.value === value) {
                //delete head 
                if (cur === this.head) {
                    this.head = cur.next
                    if (this.head) this.head.prev = null
                    return
                }
                //delete tail
                if (cur === this.tail) {
                    this.tail = cur.prev
                    this.tail.next = null
                    return
                } else {
                    cur.prev.next = cur.next
                    cur.next.prev = cur.prev
                    return
                }

            }
            cur = cur.next
        }
    }
    print() {
        if (this.head === null) {
            console.log("Head not found")
            return
        }
        let cur = this.head
        let result = []
        while (cur) {
            result.push(cur.value)
            cur = cur.next
        }
        console.log(result.join("->"))
    }

}

let node = new DoubleLinkedList()

node.InsertAtFirst(10)
node.InsertAtFirst(20)
node.InsertAtFirst(30)
node.InsertAtFirst(40)
node.InsertAtFirst(50)
node.delete(11)



node.print()


