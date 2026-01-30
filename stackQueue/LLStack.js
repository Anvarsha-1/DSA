class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stackLL{
    constructor(){
        this.head = null
    }

    push(x){
        let node  = new Node(x)
        if(!this.head){
            this.head = node
            return
        }
        node.next = this.head
        this.head = node
    }
    pop(){
        if(!this.head) return null
        let h = this.head.value
        this.head = this.head.next
        return h
    }
}

let stack = new stackLL()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()
console.log(stack)