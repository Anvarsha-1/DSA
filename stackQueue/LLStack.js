class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class StackLL{
    constructor(){
        this.top = null
    }

    push(x){
        let node = new Node(x)
        node.next =  this.top;
        this.top =  node
        
    }

    pop(){
        if(!this.top) return null;
        let v  = this.top.value
        this.top =  this.top.next;
        return v
    }

    peek(){
        return this.top ? this.top.value : null
    }

    isEmpty(){
        return this.top===null
    }
}

let stack = new StackLL()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)



console.log(stack.peek())