
/** Quick Sort algorithm
 * QuickSortLike Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 

    Always pick the first element as a pivot.
    Always pick the last element as a pivot (implemented below)
    Pick a random element as a pivot.
    Pick median as the pivot.
The key process in quickSort is a partition(). 
The target of partitions is, given an array and
 an element x of an array as the pivot, put x at its correct position 
 in a sorted array and put all smaller 
elements (smaller than x) before x, and put all greater elements (greater than x) after x. 
All this should be done in linear time.
 */
let arrQuick = [-3, 4, 7, 8, 2, 3, 1, 93, 25, 46, 72, 3, 4, 1, -1, 4, 6, 49];
let countQuick =  0;
function quickSort(array) {
    if (array.length <= 1) {
        // recursion begins
        return array
    }
    let pivotIndex = Math.floor(array.length / 2); // pick pivot as median
    let pivot = array[pivotIndex] // pick the index 
    let less = [];
    let greater = [];  
    for (let i = 0; i< array.length; i++) {
        countQuick++;
       if ( i === pivotIndex) continue // if index is equal to median then skip it
       if (array[i] < pivot) { // if number is less then median
        less.push(array[i]);
       } else {
        greater.push(array[i]);
       }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]; // return functions for less and greater arrays
}
console.log('Filtered array = ',quickSort(arrQuick));
console.log('Count of iterations = ',countQuick);
