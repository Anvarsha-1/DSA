class stack{
    constructor(){
        this.data = []
    }
    push(x){
        this.data.push(x)
    }
    pop(){
        if(this.isEmpty()) return null;
        return this.data.pop()
    }

    peek(){
        return this.isEmpty() ? null : this.data[this.data.length-1]
    }
    isEmpty(){
        return this.data.length===0
    }

    display(){
        if(this.data.length===0) return null
        return console.log("Stack:", this.data)
    }
}

let st = new stack()

st.push(10)
st.push(20)
st.push(30)


st.display()

