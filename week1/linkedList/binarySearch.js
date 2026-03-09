let array = [2,3,4,5,6,7,8,9]

function BinarySearch(array,target,left=0,right=array.length-1){
    if(left>right) return false

    let middle = Math.floor((left+right)/2)

    if(array[middle]===target) return true

    if(array[middle]>target){
       return BinarySearch(array,target,left,middle-1) 
    }else{
       return BinarySearch(array,target,middle+1,right)
    }
}

console.log(BinarySearch(array,7))