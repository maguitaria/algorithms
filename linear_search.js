/* How Linear Search Works?

    Step 1: First, read the search element (Target element) in the array.
    Step 2: Set an integer i = 0 and repeat steps 3 to 4 till i reaches the end of the array.
    Step 3: Match the key with arr[i].
    Step 4: If the key matches, return the index. Otherwise, increment i by 1.*/
    
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let count = 0;
function linearSearch(arr,item) {
    for (let i = 0; i < arr.length; i++) {
     count ++ // count the number of iterations
        if (arr[i] === item) {
            return i;
        } 
    }
    return null
}
/* Time complexity: O(N)
Auxiliary Space: O(1) */

