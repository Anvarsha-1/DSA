let str = "arun tis in 13th week"

let arr = str.split(" ")
let largest  = 0
let second = 0
for(let i=0;i<arr.length;i++){
    if(largest<arr[i].length){
        second = largest
        largest = arr[i]
    }else if(second!==largest && arr[i].length>second){
        second =  arr[i]
    }
}
console.log(second)