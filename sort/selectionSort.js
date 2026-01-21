function quickSort(arr,left=0,right=arr.length-1){
    if(left>=right) return
    let pivot = arr[right];

    let  i = left
    for(let j=left ; j<arr.length-1;j++){
        if(arr[j]<pivot){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++
        }
    }
    [arr[i],arr[right]] = [arr[right],arr[i]]

    quickSort(arr,left,i-1)
    quickSort(arr,i+1,right)

    return arr
}



console.log(quickSort(arr))

let arr = [7, 3, 2, 1, 8, 9, 4]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]

    } return arr
}

console.log(selectionSort(arr))