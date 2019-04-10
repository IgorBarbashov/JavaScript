"use strict";

function aclean(arr) {
    for (var i = 0; i < arr.length-1; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if ( isAnagram(arr[i], arr[j]) ) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

function isAnagram(firstWord, secondWord) {
    var firstSortedWord = firstWord.toLowerCase().split("").sort().join("");
    var secondSortedWord = secondWord.toLowerCase().split("").sort().join("");
    return (firstSortedWord === secondSortedWord);
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
