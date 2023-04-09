/**!SECTION
 * Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. 
 * The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 
 Алгоритм поиска (в упорядоченном массиве)
 1. Получить центральный элемент массива
 2. От середины откидываем одну из половин массива 
 3. Если элемент меньше середины, то идем вниз. Если больше,идем вверх.
Binary Search Algorithm: The basic steps to perform Binary Search are:

    Sort the array in ascending order.
    Set the low index to the first element of the array and the high index to the last element.
    Set the middle index to the average of the low and high indices.
    If the element at the middle index is the target element, return the middle index.
    If the target element is less than the element at the middle index, set the high index to the middle index – 1.
    If the target element is greater than the element at the middle index, set the low index to the middle index + 1.
    Repeat steps 3 - 6 until the element is found or it is clear that the element is not present in the array.
     

Binary Search Algorithm can be implemented in the following two ways

    Iterative Method
    Recursive Method

*/
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let countBin = 0;
function binarySearch(array,item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1; // if no element was found
    while (found === false && start <= end) {
      countBin++;
        middle = Math.floor((start + end)/2);
        if( array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position; // if element is not present in the array
}
console.log(binarySearch(array, 19));
console.log(countBin);


 // Binary search using recursive method
 let countBinRecursive = 0;
 function recursiveBinarySearch(array,item,start,end) {
     let middle = Math.floor((start + end) / 2); 
     countBinRecursive ++;
     if (item === array[middle]) {
        return middle
     } 
     if (item < array[middle]) {
        return recursiveBinarySearch(array,item, start, middle - 1); //repeat the function till middle  
     }
     if (item > array[middle]) {
        return recursiveBinarySearch(array,item, middle + 1, end); //repeat the function from the next item after middle  
     }
 }
 console.log(recursiveBinarySearch(array, 12 , 0 , array.length));
 console.log('Iteration number = ',countBinRecursive)