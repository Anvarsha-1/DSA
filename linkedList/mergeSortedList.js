class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    InsertAtLast(value){
        let node = new Node(value)

        if(this.head===null){
            this.head = node;
            this.tail = node;
            return
        }
        this.tail.next = node;
        node.prev = this.tail;

        this.tail = this.tail.next
    }
    print(){
        let res = ""
        let cur = this.head;
        while(cur){
            res+=cur.value+"<=>"
            cur = cur.next
        }
        return console.log(res+"null")
    }
}


function mergeTwoSortedList(list1,list2){
    if(!list1) return list2
    if(!list2) return list1

    let a = list1.head;
    let b = list2.head;

    let dummy = new Node(0);
    let tail = dummy;

    while(a&&b){
        if(a.value<=b.value){
           tail.next = a
           a.prev = tail;
           a=a.next
        }else{
           tail.next = b
           b.prev = tail;
           b = b.next
        }
        tail = tail.next
    } 
    
    if(a){
      tail.next = a 
      a.prev = tail
    }if(b){
        tail.next = b;
        b.prev = tail
    }
    let mergeSort = new DoubleLinkedList()

    mergeSort.head = dummy.next;
    mergeSort.head.prev = null;
    let cur = mergeSort.head

    while(cur.next){
        cur = cur.next
    }

    mergeSort.tail = cur
  
    return mergeSort
}

let list1 = new DoubleLinkedList();
let list2 = new DoubleLinkedList();


list1.InsertAtLast(10)
list1.InsertAtLast(30)
list1.InsertAtLast(50)
list1.InsertAtLast(70)
list1.InsertAtLast(90)


list2.InsertAtLast(20)
list2.InsertAtLast(40)
list2.InsertAtLast(60)
list2.InsertAtLast(80)
list2.InsertAtLast(100)


mergeTwoSortedList(list1,list2).print()
list1.print()


