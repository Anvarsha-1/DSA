class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)

        if (!this.root) {
            this.root = newNode
            return
        }

        let queue = [this.root]

        while (queue.length) {
            let current = queue.shift()

            if (!current.left) {
                current.left = newNode
                return
            }
            else {
                queue.push(current.left)
            }

            if (!current.right) {
                current.right = newNode
                return
            }
            else {
                queue.push(current.right)
            }
        }
    }
    countNodes(node = this.root) {
        if (!node) return 0
        return 1 + this.countNodes(node.left) + this.countNodes(node.right)
    }
    height(node = this.root) {
        if (!node) return 0
        return 1 + Math.max(this.height(node.left), this.height(node.right))
    }
    maxValue(node = this.root) {
        if (!node) return -Infinity
        return Math.max(node.val, this.maxValue(node.left), this.maxValue(node.right))
    }
    minValue(node = this.root) {
        if (!node) return Infinity
        return Math.min(node.val, this.minValue(node.left), this.minValue(node.right))
    }
    search(target, node = this.root) {
        if (!node) return false
        if (node.val === target) return true

        return (
            this.search(node.left, target) ||
            this.search(node.right, target)
        )
    }
    inOrder(node = this.root) {
        if (!node) return

        this.inOrder(node.left)
        console.log(node.val)
        this.inOrder(node.right)
    }
    preOrder(node = this.root) {
        if (!node) return

        console.log(node.val)
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
    postOrder(node = this.root) {
        if (!node) return
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.val)
    }
    levelOrder(){
        if(!this.root) return

        let queue =  [this.root]

        while(queue.length){
            let current = queue.shift()
            console.log(current.val)

            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
    }
}

let tree = new BinaryTree()

tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.insert(50)
tree.insert(90)

console.log("height", tree.height())
console.log("count", tree.countNodes())
console.log("max value", tree.maxValue())
console.log("min value", tree.minValue())
console.log("search a value", tree.search(10))

console.log("level Order", tree.levelOrder())

// console.log("in")
// tree.inOrder()
// console.log("pre")
// tree.preOrder()
// console.log("post")
// tree.postOrder()