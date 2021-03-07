/* Find the Longest Word in a StringPassed
Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWordLength(str) {
    let max = 0;
    str = str.split(' ');
    for (let i = 0; i < str.length; i++)
        max = str[i].length > max ? str[i].length : max;
    return max;
}

//Solution 2
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}


findLongestWordLength("The quick brown fox jumped over the lazy dog");


