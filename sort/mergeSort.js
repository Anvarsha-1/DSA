let arr = [8,6,3,1,5,4,2,9,7]

function mergeSort(arr){
   if(arr.length<=1) return arr;

   let mid =  arr.length >> 1;

   let left = mergeSort(arr.slice(0,mid))
   let right = mergeSort(arr.slice(mid))

   let i = 0
   let j = 0
   let res = []
   while(i<left.length && j<right.length){
    if(left[i]<=right[j]){
        res.push(left[i])
        i++
    }else{
        res.push(right[j])
        j++
    }
   }return res.concat(left.splice(i),right.splice(j))

}

console.log(mergeSort(arr))