//Create a function that, given a string, returns all of that string’s contents, but without blanks. 
//Examples:
//removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
//removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
function removeBlanks(str) {
    let newStr = ''
    for(let i=0;i<str.length;i++){
        if(str[i] !=' '){ //a space must be placed here other wise it will not be recognized
            newStr += str[i]
        }
    }
    return newStr
}
//console.log(removeBlanks("Pl ayTha tF u nkyM usi c "))
//console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))







//Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
//Examples:
//getDigits("abc8c0d1ngd0j0!8") => 801008
//getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
function getDigits(str){
    let passStr=''
    for(let char in str) {
        if(!isNaN(str[char])){
            console.log(str[char])
        }
    }
    //console.log(Number(passStr))
}
// getDigits("abc8c0d1ngd0j0!8")
// getDigits("0s1a3y5w7h9a2t4?6!8?0") // producing an extra value? not sure where from though



//Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
//acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
//acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acro(str) {
    let wordsArr=str.split(' ')
    let acronymStr =''
    for(let word in wordsArr) {
        if(wordsArr[word].length>0){ //remove undefined
            console.log(wordsArr[word][0].toUpperCase()) //unsure if vertical formatting is okay, but the basic function works
        }
    }
}
// acro(" there's no free lunch - gotta pay yer way. ")
// acro("Live from New York, it's Saturday Night!")





//Create a function that, given a string, returns the number of non-space characters found in the string. 
//Examples:
//countNonSpaces("Honey pie, you are driving me crazy") => 29
//countNonSpaces("Hello world !") => 11
function countNonSpaces(str) {
    let counter=0
    for(let char in str) {
        if(str[char] != '') {
        counter++}
    }
    return counter
}
// console.log(countNonSpaces("Honey pie, you are driving me crazy"))
// console.log(countNonSpaces("Hello world !"))










//Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
//Examples:
//removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
//removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
function removeShorterStrings(arr,len){
    let newStrings =[]
    let nextIndex = 0
    for(let value in arr){
        if(arr[value].length >= len){
            console.log(arr[value])
        }
    }

}
removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)