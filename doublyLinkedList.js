class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    InsertAtFirst(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = this.tail = node;
            return
        }
        else {
            node.next = this.head;
            this.head.prev = node

            this.head = node
        }
    }
    findMiddleElem() {
        if (this.head === null) return null
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            let slow = slow.next
            let fast = fast.next.next
        }
        return slow.value
    }

    print() {
        let cur = this.head
        let result = []
        while (cur) {
            result.push(cur.value)
            cur = cur.next
        } console.log(result.join("->"))
    }
}


let list = new LinkedList()

list.InsertAtFirst(10)
list.InsertAtFirst(20)
list.InsertAtFirst(30)
list.InsertAtFirst(40)
list.InsertAtFirst(50)
list.InsertAtFirst(60)
list.InsertAtFirst(70)
list.InsertAtFirst(80)


list.findMiddleElem()

list.print()


