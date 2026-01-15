class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }

    AddToFirst(value) {
        let node = new Node(value)
        if (this.head === null) {
            this.head = node
            return
        } else {
            node.next = this.head
            this.head = node
        }
    } convertToArray() {
        let arr = []
        let cur = this.head
        while (cur) {
            arr.push(cur.value)
            cur = cur.next
        }
        return console.log(arr)
    }

    ArrayToLinkedList(arr) {
        if (arr.length === 0) return null

        this.head = new Node(arr[0])
        let current = this.head
        for (let i = 1; i < arr.length; i++) {
            current.next = new Node(arr[i])
            current = current.next
        }
        return this.head
    }

    print() {
        let cur = this.head
        let result = []
        while (cur) {
            result.push(cur.value)
            cur = cur.next
        }
        console.log(result.join("->"))
    }
}

let list = new LinkedList()

list.AddToFirst(10)
list.AddToFirst(20)
list.AddToFirst(30)
list.AddToFirst(40)
list.AddToFirst(50)

let arr = ["3", "4", "5", "7", "4", "7", "9"]
list.ArrayToLinkedList(arr)

list.print()
