//EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
//.reduce is a method that adds all elements within an array together
const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5]));

//MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]). You are given a target value to search. If found in the array return its index, otherwise return -1. You may assume no duplicate exists in the array.
//
function searchIt(array1, target){
    for(i=0;i<array1.length;i+=1){
        if(target==array1[i]){
            return i;
        } 
    }
    return -1;
}

function leastCoins(coinSizes, amount){
    //sort coin sizes from greatest to least
    coinSizes.sort();
    coinSizes.reverse();
    coinsNeeded = 0;
    for(coin=0;coin<coinSizes.length;i+=1){
        var divisions = Math.floor(amount/coin);
        coinsNeeded += divisions;
        var remainder = amount% coin;
        amount = remainder; 
    }
    if(amount == 0){
        return coinsNeeded;
    }else{
        return -1;
    }

}
