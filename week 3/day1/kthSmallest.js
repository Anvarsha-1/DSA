// Find the kth smallest element in a BST.

class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return
        }
        let cur = this.root

        while (true) {
            if (cur.val > value) {
                if (!cur.left) {
                    cur.left = newNode
                    return
                } else {
                    cur = cur.left
                }
            } else {
                if (!cur.right) {
                    cur.right = newNode
                    return
                } else {
                    cur = cur.right
                }
            }
        }
    }
    KthSmallest(k) {
        let result = []

        const SortedTraversal = (node, result) => {
            if (!node) return
            SortedTraversal(node.left, result)
            result.push(node.val)
            SortedTraversal(node.right, result)
        }
        SortedTraversal(this.root, result)
        return result[k - 1]
    }
    kthsmallestUsingStack(k) {
        let stack = []
        let count = 0
        let current = this.root
        while (current !== null || stack.length > 0) {

            while (current !== null) {
                stack.push(current)
                current = current.left
            }

            current = stack.pop()

            count++

            if (count === k) {

                return current.val
            }

            current = current.right
        }
        return null
    }
    print() {
        if (this.root == null) return
        return console.log(this.root)
    }
    inOrder(node = this.root) {
        if (!node) return
        this.inOrder(node.left)
        console.log(node.val)
        this.inOrder(node.right)
    }
}


let b = new BST()

b.insert(10)
b.insert(20)
b.insert(30)
b.insert(5)
b.insert(4)
b.insert(2)

console.log(b.kthsmallestUsingStack(2))

