class Node {
    constructor(value){
       this.value = value
       this.left = null
       this.right = null
    }

}

class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value)
        if(this.root===null){
            this.root = node
            return
        }

        let queue = [this.root]

        while(queue.length>0){
        let cur = queue.shift()
            if(cur.left===null){
                cur.left = node
                return
            }else{
                queue.push(cur.left)
            }if(cur.right===null){
                cur.right = node
                return
            }else{
                queue.push(cur.right)
            }
        }
    }
    inOrder(node =  this.root){
        if(node!==null){
            this.inOrder(node.left)
            console.log(node.value)
            this.inOrder(node.right)
        }
    }
    levelOrder(){
        if(this.root===null){
            return
        }
        let queue = [this.root]

        while(queue.length>0){
            let cur = queue.shift()

            console.log(cur.value)

            if(cur.left) queue.push(cur.left)
            if(cur.right)  queue.push(cur.right)
        }
    }
    delete(value){
        if(this.root===null) return

        let queue = [this.root]
        let target = null
        let last = null
        let parentOfLast = null

        while(queue.length>0){
            let node = queue.shift()

            if(node.value===value){
                target = node
            }

            if(node.left){
                parentOfLast = node
                queue.push(node.left)
            }
            if(node.right){
                parentOfLast = node
                queue.push(node.value)
            }
            last = node
        }

        if(!target) return 

        target.value = last.value

        if(parentOfLast.right===last){
           parentOfLast.right = null
        }else{
            parentOfLast.left = null
        }

    }
}

let tree = new BinaryTree()


tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.insert(50)

tree.delete(20)

tree.levelOrder()