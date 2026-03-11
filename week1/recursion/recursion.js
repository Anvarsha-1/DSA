// print number to 1 to 10

function printNumber(n){
    if(n===11)return
    // console.log(n)
   printNumber(n+1)

}
printNumber(1)

//print number 10 to 1

function printNum(n) {
    if (n === 0) return
    // console.log(n)
    printNum(n -1)

}
printNum(10)

//sum of first n number

function sumOfnNumbers(n){
    if(n===0)return 0
   return sumOfnNumbers(n-1) + n
}

sumOfnNumbers(10)

//factorial of number eg:-n*(n-1)*n(n-2)*....n*(n-n) !5= 5*4*3*2*1 =120

function factorial(n){
    if(n==1)return 1
   return factorial(n-1) * n
}

factorial(5)

//reverse a string

function reverse(str, i = str.length - 1) {
    if (i < 0) return ""
    return str[i] + reverse(str, i - 1)
}

reverse("hello")

//fibonacci sequence

function fib(n){
    if(n<=1) return n
    return fib(n-1) + fib(n-2)
}

fib(4)

//count the length of digit 

function count(n){
    if(n===0) return 0
    return 1 + count(Math.floor(n/10))
}

count(10)


//sum of array number

function sumOfArray(arr,i=0){
    if(i===arr.length)return 0
    return arr[i] + sumOfArray(arr,i+1)
}

sumOfArray([1,2,3,4])

//check the string is palindrome

function palindrome(str,i=0,j=str.length-1){
   if (i >= j) return true
   if(str[i]!==str[j]) return false
   return palindrome(str,i+1,j-1)
}
palindrome("mom")

//power of a number

function power(a,b){
    if(b===0) return 1
    return a * power(a,b-1)
}

power(2,4)

//check if the array is sorted

function checkSrt(arr,i=0){
     if(i===arr.length) return true
     if(arr[i]>arr[i+1])return false
     return checkSrt(arr,i+1)
}

checkSrt([1, 5, 3])

//count the frequency of target using recursion

function freqTarget(arr,target,i=0){
    if(i===arr.length) return 0
    let count = 0
    if(target===arr[i]) count++
    return count + freqTarget(arr,target,i+1)
}
freqTarget([1,2,3,4,1,1,1],1)


//reverse a String

function reverseStr(str,i=0){
  if(i===str.length)return ""
  return reverseStr(str,i+1) +str[i]
}
reverseStr("hello")


//given a sorted array and target return index if target present in array else return -1 (Binary search)
//or if target is not preset you should return closest value to target

function BinarySearch(arr,target,left=0,right=arr.length-1){
    // if(left>right)return -1
    if(left>right) return left>=0 && left!==arr.length ? left : right

    let middle = Math.floor((left+right)/2)
    if(arr[middle]===target) return middle

    if(arr[middle]>target){
        return BinarySearch(arr,target,left,middle-1)
    }else{
        return BinarySearch(arr,target,middle+1,right)
    }
}
let arr = [1,2,3,4,5,6,7,8]
BinarySearch(arr,0)

//multiply all array of element 

function multiply(arr,i=0){
   if(i===arr.length)return 1
   return arr[i]*multiply(arr,i+1)
}
multiply([1,2,3,4])

//Remove all "a" character recursively

function removeChar(char,i=0){
  if(i===char.length)return ""
    if(char[i].toLowerCase()==="a") return removeChar(char,i+1)
    return  char[i] + removeChar(char,i+1) 
}
removeChar("Anvarsha")


