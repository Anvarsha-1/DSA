class Node{
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
        let node = new Node(value);

        if(this.root===null){
            this.root = node
            return
        }

        let current = this.root

        while(true){
            if(value<current.value){
                if(!current.left){
                  current.left = node
                  return
                }current = current.left
            }else{
                if(!current.right){
                    current.right = node
                    return
                }current = current.right
            }
        }
    }
    inOrder(node = this.root){
        if(!node) return
            this.inOrder(node.left)
            console.log(node.value)
            this.inOrder(node.right) 
    }
    levelOrder(){
        if(!this.root) return 

        let queue = [this.root]

        while(queue.length>0){
            let node = queue.shift()

           console.log(node.value)
            
           if(node.left) queue.push(node.left)
           if(node.right) queue.push(node.right)
        }
    }
    search(value ,node=this.root){
        if(!node) return false
        
        if(value===node.value) return true
        if(value<node.value){
            return this.search(value,node.left)
        }else{
           return this.search(value,node.right)
        }
    }
    delete(value,node = this.root){
        if(!node) return 

        if(node.value<value){
            node.left = this.delete(value,node.left)
        }else if(node.value>value){
            node.right = this.delete(value,node.right)
        }else{
            if(!node.right && !node.left) return null

            if(!node.right) return node.left
            if(!node.left) return node.right

            let successor = this.minValue(node.right)
            node.value = successor.value
            node.right = this.delete(successor.value,node.right)
            
        }return node
    }
    remove(value){
        return this.root = this.delete(value)
    }
}

let BST = new BinaryTree()

BST.insert(100)
BST.insert(110)
BST.insert(120)
BST.insert(130)
BST.insert(140)

console.log(BST.remove(100))


BST.levelOrder()