


//Add node to the end 

    class Node2 {
        constructor(value) {
            this.value = value
            this.next = null
        }
    }

    class linkedList {
        constructor(value) {
            this.head = null
        }
        addToFirst(value) {
            let node = new Node2(value)
            if (this.head === null) {
                this.head = node
            } else {
                node.next = this.head
                this.head = node
            }
        }
        insertAtLast(value) {
            let newNode = new Node2(value)
            if (this.head === null) {
                this.head = newNode
                return
            } else {
                let current = this.head
                while (current.next !== null) {
                    current = current.next
                }
                current.next = newNode
            }
        }

        deleteValue(value){
            if(this.head===null)return 

            if(this.head.value===value){
                this.head = this.head.next
                return;
            }
            let current = this.head
            
            while(current.next!==null && current.next.value!==value){
                current = current.next;
                console.log(current)
            }
            if(current.next===null){
                console.log("No value found")
                return ;
            }

            current.next = current.next.next;
        }

        reverse(){
            let current = this.head
            let prev = null

            while(current!==null){
                let next = current.next
                current.next = prev
                prev = current
                current = next
            }
            this.head = prev
        }

        insertAfter(x,value){
            if(this.head===null){
                return
            }
            let current = this.head
            while(current!==null){
                if(current.value===x){
                    let newNode = new Node2(value)

                    newNode.next = current.next
                    current.next = newNode
                    return
                }
                current = current.next
            }
            console.log("Value not found")
        }

        removeDuplicate(){
            let current = this.head
            while(current!==null && current.next!==null){
                if(current.value===current.next.value){
                    current.next=current.next.next
                }else{
                    current = current.next
                }
            }
        }
        print() {
            let cur = this.head
            let result = []
            while (cur) {
                result.push(cur.value)
                cur = cur.next
            }
            console.log(result.join("->"))
        }
    }
    
 

let node = new linkedList()
node.insertAtLast(10)

node.insertAtLast(11)

node.insertAtLast(12)

node.insertAtLast(13)
node.deleteValue(13)


node.print()
