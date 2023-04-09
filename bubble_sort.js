/**
 * Bubble sort algorithm сравниваем попарно лежащие элементы, самый большой элемент "всплывает" в конец массива.
 * Bubble Sort is the simplest sorting algorithm that works by 
 * repeatedly swapping the adjacent elements if they are in the wrong order. 
 * This algorithm is not suitable for large data sets 
 * as its average and worst-case time complexity is quite high.
 */
let arrBubble = [-3, 4, 7, 8, 2, 3, 1, 93, 25, 46, 72, 3, 4, 1, -1, 4, 6, 49];
let countBubble = 0;
/**
 * @param {Array} array
 * @return
 */
function bubbleSort(array)  {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                // if the next element is bigger then current => switch places
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            countBubble++;
        }
    }
    return array;
}
console.log(bubbleSort(arrBubble));
console.log('length of array = ', arrBubble.length)
console.log('count = ', countBubble); // O (n * n)