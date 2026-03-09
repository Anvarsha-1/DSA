class HashTable{
    constructor(size=7){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let hash = 0
        for( let char of key){
            hash+= char.charCodeAt(0);
        }
        return hash%this.size
    }

    set(key,val){
        let index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }

        for(let pair of this.table[index]){
            if(pair[0]===key){
               pair[1]=val
               return
            }
        }
       return this.table[index].push([key,val])
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket) return null;
        
      
        for( let pair of bucket){
            if(pair[0]===key){
                return pair[1]
            }
        }
    }
    print(){
        return console.log(this.table)
    }
}

let hash = new HashTable()

hash.set("name","anvarsha")
hash.set("job", "web developer")
hash.set("place", "parakode")
hash.set("age", "21")
hash.set("", "anvarsha")

console.log(hash.get("age"))
hash.print()

