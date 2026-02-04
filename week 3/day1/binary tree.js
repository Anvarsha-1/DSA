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
    isEmpty(){
        return this.root===null
    }
    insert(value){
      const node = new Node(value)

      if(this.isEmpty()){
          this.root = node
          return
      }
      const queue = [this.root]

      while(queue.length>0){
        const cur = queue.shift()
        if(cur.left===null){
            cur.left = node
            return
        }else{
            queue.push(cur.left)
        }
        if(cur.right===null){
            cur.right = node
            return
        }else{
            queue.push(cur.right)
        }
      }
    }
    searchDFS(node,target){
      if(node === null) return false
      if(node.value === target) return true

      return (
        this.searchDFS(node.left,target) ||
        this.searchDFS(node.right,target)
      )
    }
    inOrder(node = this.root){
       if(node!==null){
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
       }
    }
    preOrder(node = this.root){
        if(node!==null){
            console.log(node.value)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
    postOrder(node = this.root){
       if(node!==null){
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value)
       }
    }
    levelOrder(){
        if(this.isEmpty())return
         const queue = [this.root]

         while(queue.length>0){
            const cur = queue.shift()
            console.log(cur.value)

            if(cur.left) queue.push(cur.left)
            if(cur.right) queue.push(cur.right)
         }
    }
}


let tree = new BinaryTree()

tree.insert(10)
tree.insert(20) 
tree.insert(30)
tree.insert(40)

console.log(tree.searchDFS(tree.root,40))

tree.inOrder()
