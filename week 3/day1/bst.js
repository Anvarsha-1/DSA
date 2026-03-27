class Node {
    constructor(value) {
        this.val = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return
        }
        let current = this.root

        while (current) {
            if (value === current.val) return
            if (value < current.val) {
                if (!current.left) {
                    current.left = newNode
                    return
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = newNode
                    return
                }
                current = current.right
            }
        }
    }
    search(target) {
        if (!this.root) return false

        let current = this.root

        while (current) {
            if (current.val === target) return true
            if (target < current.val) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return false
    }
    delete(val, node = this.root) {
        if (!node) return null
        if (val < node.val) {
            node.left = this.delete(val, node.left)
        } else if (val > node.val) {
            node.right = this.delete(val, node.right)
        } else {
            if (!node.left) return node.right
            if (!node.right) return node.left

            let minVal = this.findMin(node.right)
            node.val = minVal.val

            node.right = this.delete(minVal.val, node.right)
        }
        return node
    }
    closestValue(target) {
        let current = this.root
        let closest = current.val

        while (current) {
            if (Math.abs(target - current.val) < Math.abs(target - closest)) {
                closest = current.val
            }
            if (target < current.val) {
                current = current.left
            } else if (target > current.val) {
                current = current.right
            } else {
                return current.val
            }
        }
        return closest
    }
    findMin(node) {
        while (node.left) {
            node = node.left
        }
        return node
    }
    deleteRoot(val) {
        this.root = this.delete(val, this.root)
    }
    isValidBST(node = this.root,min=-Infinity,max =Infinity){
        if(!node)return true

        if(node.val<=min || node.val>=max){
            return false
        }

        return (
            this.isValidBST(node.left,min,node.val) &&
            this.isValidBST(node.right, node.val, max) 
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
    levelOrder() {
        if (!this.root) return
        let queue = [this.root]

        while (queue.length) {
            let current = queue.shift()
            console.log(current.val)

            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
    }
}

let BST = new BinarySearchTree()

BST.insert(10)
BST.insert(40)
BST.insert(30)
BST.insert(20)
BST.insert(70)
BST.insert(80)




// BST.preOrder()
// BST.inOrder()
// BST.postOrder()
// BST.levelOrder()
// console.log(BST.search(90))
// BST.deleteRoot(10)
// BST.levelOrder()

console.log(BST.isValidBST())