class Node {
    constructor(value) {
        this.value = value;
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let node = new Node(value)

        if (this.root === null) {
            this.root = node
            return
        }

        let current = this.root

        while (true) {
            if (value === current.value) return // duplicate ignored

            if (value < current.value) {
                if (!current.left) {
                    current.left = node
                    return
                } current = current.left
            } else {
                if (!current.right) {
                    current.right = node
                    return
                }
                current = current.right
            }
        }
    }
    inOrder(node = this.root) {
        if (!node) return
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
    }
    preOrder(node = this.root) {
        if (!node) return
        console.log(node.value)
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
    postOrder(node = this.root) {
        if (!node) return
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value)
    }
    levelOrder() {
        if (!this.root) return
        let queue = [this.root]

        while (queue.length > 0) {
            let node = queue.shift()
            console.log(node.value)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    Search(value) {
        let current = this.root

        while (current) {

            if (current.value === value) return true

            if (value > current.value) {

                current = current.right
            } else {

                current = current.left
            }
        } return false
    }
    delete(value, node = this.root) {
        if (!node) return null

        if (value < node.value) {
            node.left = this.delete(value, node.left)
        } else if (value > node.value) {
            node.right = this.delete(value, node.right)
        } else {
            if (!node.left && !node.right) return null

            if (!node.left) return node.right
            if (!node.right) return node.left

            let successor = this.minValue(node.right)
            node.value = successor.value
            node.right = this.delete(successor.value, node.right)
        }
        return node

    }
    minValue(node) {
        if (!node) return
        while (node.left) {
            node = node.left
        }
        return node
    }
    BalancedCheck() {
        function check(node) {
            if (!node) return 0 

            let left = check(node.left) 
            if (left === -1) return -1

            let right = check(node.right) 
            if (right === -1) return -1

            if (Math.abs(left - right) > 1) return -1  

            return Math.max(left, right) + 1  
        }
        return check(this.root) !== -1;
    }
}


let BST = new BinarySearchTree()

BST.insert(50)
BST.insert(40)
BST.insert(70)
BST.insert(30)
BST.insert(20)
BST.insert(10)


console.log(BST.BalancedCheck())

BST.levelOrder()
