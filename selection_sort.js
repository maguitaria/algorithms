/** Selection sort algorithm
 * Follow the below steps to solve the problem:
Находим минимальное число в массиве, и от него сравниваем другие числа. Таким образом выстраивается восходящий массив.
    Initialize minimum value(min_idx) to location 0.
    Traverse the array to find the minimum element in the array.
    While traversing if any element smaller than min_idx is found then swap both values.
    Then, increment min_idx to point to the next element.
    Repeat until the array is sorted.
 */
let arrSort = [ -3, 4, 7, 8, 2, 3, 1, 93, 25, 46, 72, 3, 4, 1, -1, 4, 6, 49];
let countSort = 0;
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i; // set the minimum value

        //create an inner array to find the min number
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[indexMin]) { // если текущий элемент итерации меньше чем дефолт значение, значит это минимум
                indexMin = j;
            }
            countSort++; 
        }
        let tmp = array[i]; // variable to replace the minimum value
        array[i] = array[indexMin];
        array[indexMin] = tmp; 
    }
    return array;
} 
console.log(selectionSort(arrSort));
console.log('length of array = ', arrSort.length)
console.log('count = ', countSort); // O(n*n)