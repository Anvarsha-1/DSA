function mergeSort(arr){
    if(arr.length<=1) return arr

    let middle = Math.floor(arr.length/2)

    let left = mergeSort(arr.slice(0,middle))
    let right =  mergeSort(arr.slice(middle))
    
    let i=0,j=0,res=[];
   
    while(left.length>i && right.length>j){
    if(left[i]<=right[j]){
        res.push(left[i])
        i++
    }else{
        res.push(right[j])
        j++
    }
}
    return res.concat(left.splice(i),right.splice(j))

}

let arr = [3, 1, 8, 4, 1, 6]
console.log(mergeSort(arr))
