class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    append(value) {
        let node = new Node(value)
        this.size++
        if (this.head === null) {
            this.head = node
            this.tail = node
            return
        }
        this.tail.next = node
        this.tail = node
    }
    middle() {
        if (!this.head) return
        let fast = this.head
        let slow = this.head
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }

    reverse() {
        if (!this.head) return this
        let prev = null
        let cur = this.head
        this.tail = this.head
        while (cur !== null) {
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        this.head = prev
        return this
    }
    insertAtPosition(pos, value) {
        if (!this.head) return
        let node = new Node(value)
        let cur = this.head
        let count = 1
        if (pos === 1) {
            node.next = this.head
            this.head = node
            return
        }
        while (count < pos - 1 && cur !== null) {
            cur = cur.next
            count++
        }
        if (cur === null) return null
        node.next = cur.next
        cur.next = node

    } deleteTail() {
        if (!this.head) return
        this.size -= 1
        let cur = this.head
        if (this.head == this.tail) {
            this.head = null
            this.tail = null
        }
        while (cur.next !== this.tail) {
            cur = cur.next
        }
        cur.next = null
        this.tail = cur
    }
    findtheNthNode(n) {
        if (!this.head) return null
        if (n < 0) return null
        let cur = this.head
        let count = 0
        while (cur && count < n) {
            count++
            cur = cur.next
        }

        return cur || null
    }
    deleteValue(val) {
        if (!this.head) return false;
        if (!val) return console.log("pass value")
        this.size -= 1
        if (val === this.head.value) {
            this.head = this.head.next
            if (!this.head) this.tail = null
            return
        }
        let cur = this.head
        while (cur.next && cur.next.value !== val) {
            cur = cur.next
        }
        if (cur.next === null) return false
        if (cur.next === this.tail) this.tail = cur
        cur.next = cur.next.next
        return true

    } checkList() {
        if (!this.head) {
            return console.log("list is empty")
        } else {
            return console.log("not empty")
        }
    } listCount() {
        let cur = this.head
        let count = 0
        while (cur !== null) {
            count++
            cur = cur.next
        }
        return count
    }
    searchValue(value) {
        if (!this.head) return false
        let cur = this.head
        while (cur !== null && cur.value !== value) {
            cur = cur.next

        }
        return cur || null

    }
    sum() {
        if (!this.head) return 0
        let sum = 0
        let cur = this.head
        while (cur) {
            if (typeof (cur.value) === 'number') sum += cur.value
            cur = cur.next
        } return sum
    }
    freqOfValue(val) {
        let cur = this.head
        let freq = 0
        while (cur) {
            if (cur.value === val) {
                freq++
            }
            cur = cur.next
        } return freq
    }
    removeNFromEnd(n) {
        if (!this.head) return false
        if (n <= 0) return false
        let fast = this.head
        let slow = this.head
        for (let i = 0; i < n; i++) {
            if (!fast) return false
            fast = fast.next
        }


        if (!fast) {
            this.head = this.head.next
            if (!this.head) this.tail = null
            return true
        }

        while (fast.next) {
            fast = fast.next
            slow = slow.next
        }

        let toDelete = slow.next
        slow.next = toDelete.next

        if (toDelete === this.tail) {
            this.tail = slow
        }
        return true
    }
    lastOcccurenceVal(val, num) {
        if (!this.head) return false

        let cur = this.head;
        let prev = null
        let target = null;
        if (this.head.value === val) {
            target = this.head
        }
        while (cur.next) {
            if (val === cur.next.value) {
                target = cur.next
                prev = cur
            }
            cur = cur.next
        }

        if (!target) return false
        let node = new Node(num)
        if (!prev) {
            node.next = this.head.next
            this.head = node
            return
        }

        if (prev.next === this.tail) {
            prev.next = node
            this.tail = node
            node.next = null
            return
        }

        node.next = prev.next.next
        prev.next = node
        return true
    }
    mixTwoList(list1, list2) {
        if (!list1) return list2;
        if (!list2) return list1;
        let cur1 = list1.head
        let cur2 = list2.head
        while (cur1 && cur2) {
            let next1 = cur1.next
            let next2 = cur2.next

            cur1.next = cur2

            if (!next1) {
                list1.tail = list2.tail || cur2
                return list1
            }

            cur2.next = next1

            cur1 = next1
            cur2 = next2
        }
        // if(cur2){
        //     list1.tail.next =  cur2
        //     list1.tail = list2.tail
        // }


        return list1
    }
    removeDuplicate(){
        if(!this.head) return null
        let cur = this.head
        while(cur!==null){
          let runner = cur
          while(runner.next){
              if (cur.value === runner.next.value){
                runner.next = runner.next.next
              }else{
                runner = runner.next
              }
          }
         cur =  cur.next
        }
    }
    print() {
        let cur = this.head
        let ans = ""
        while (cur) {
            ans += cur.value + " => "
            cur = cur.next
        }
        console.log(ans + "null")
    }
}

let list1 = new singlyLinkedList()
let list2 = new singlyLinkedList()



list1.append(10)
list1.append(20)
list1.append(30)
list1.append(40)
list1.append(50)
list1.append(60)

console.log("middle",list1.middle())
console.log("middle", list1.middle())

list1.print()

list2.append(1)
list2.append(2)
list2.append(2)
list2.append(2)
list2.append(5)

// list2.removeDuplicate()


// list2.print()








