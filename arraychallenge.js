// Write a function that is given an array and each time the value is "food" it should console log "yummy". 
// If "food" was not present in the array console log "I'm hungry" once.

// function alwaysHungry(arr) {
//     var foodCount = 0;
//     for(var i=0; i<arr.length;){
//         if(arr[i] == "food"){
//             console.log("yummy");
//             foodCount++;
//         }
//         i += 1;
//     }
//     if(foodCount == 0){
//         console.log("I'm Hungry")
//     }
// }
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for(var i=0; i<arr.length; i++){
//         if(arr[i] > cutoff){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


// Given an array of numbers return a count of how many of the numbers are larger than the average.

// function betterThanAverage(arr) {
//     var sum = 0;
//     for(var i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     var avg = sum / arr.length;
//     var count = 0
//     // count how many values are greated than the average
//     for(var i=0; i<arr.length; i++){
//         if(arr[i] > avg){
//             count++;
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4


// Write a function that will reverse the values an array and return them.

// function reverse(arr) {
//     var left = 0; 
//     var right = arr.length - 1;
//     while(left < right){
//         var temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     return arr;
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Write a function that will return an array of Fibonacci numbers up to a given length n. 
// Fibonacci numbers are calculated by adding the last two values in the sequence together. 
// So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var i;
//     var fibArr = [0, 1];
//     for(i = 2; i <=10; i++){
//         fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
//     }
//     return fibArr;
// }

// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



// function changeAlgo(cents){
//     var quarters = 0
//     var dimes = 0
//     var nickles = 0
//     var pennies = 0 
//     var total = cents
//     while(total > 0){
//         if(Math.floor(total/25)>=1){
//             quarters = Math.floor(total/25)
//             total -= Math.floor(total/25) * 25
//         }
//         if(Math.floor(total/10)>=1){
//             quarters = Math.floor(total/10)
//             total -= Math.floor(total/10) * 10
//         }
//         if(Math.floor(total/5)>=1){
//             quarters = Math.floor(total/5)
//             total -= Math.floor(total/5) * 5
//         }
//         if(Math.floor(total/1)>1){
//             quarters = Math.floor(total/1)
//             total -= Math.floor(total/1) * 1
//         }
//     }
//     return quarters
// }

// changeAlgo(34)
