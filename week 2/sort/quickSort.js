function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return
    let pivot = arr[right];

    let i = left
    for (let j = left; j < arr.length - 1; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]]

    quickSort(arr, left, i - 1)
    quickSort(arr, i + 1, right)

    return arr
}

let arr = [3,4,6,8,1,39,2]

console.log("OUTPUT",quickSort(arr))