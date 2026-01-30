class Node {
    constructor(key, value, next = null) {
        this.key = key
        this.value = value
        this.next = next
    }
}

class HashTable {
    constructor(loadFactorLimit = 0.7, initialCapacity = 10) {
        this.capacity = initialCapacity
        this.bucket = Array.from({ length: this.capacity }, () => null)
        this.size = 0
        this.loadFactorLimit = loadFactorLimit
    }

    _resize() {
        this.capacity *= 2
        let oldBucket = this.bucket
        this.bucket = Array.from({ length: this.capacity }, () => null)
        this.size = 0
        for (let head of oldBucket) {
            let node = head
            while (node) {
                this.set(head.key, head.value)
                node = node.next
            }
        }
    }

    _loadLimitReached() {
        return (this.size / this.capacity) > this.loadFactorLimit
    }

    _hash(key) {
        let hash = 0
        for (let char of key) {
            hash = (hash * 31 + char.charCodeAt(0)) | 0
        } return Math.abs(hash) % this.capacity
    }

    set(key, value) {
        let index = this._hash(key)
        let head = this.bucket[index]

        while (head) {
            if (head.key === key) {
                head.value = value
                return
            }
            head = head.next
        }

        let newNode = new Node(key, value, this.bucket[index])
        this.bucket[index] = newNode
        this.size++

        if (this._loadLimitReached()) {
            this._resize()
        }

    }
    print() {
        return console.log(this.bucket)
    }

}

let hash = new HashTable()

hash.set("k1", 1)
hash.set("k2", 2)
hash.set("k3", 3)
hash.set("k4", 4)
hash.set("k5", 5)
hash.set("k6", 6)
hash.set("k7", 7)
hash.set("k8", 8)
hash.set("k9", 9)
hash.set("k10", 10)

hash.print()