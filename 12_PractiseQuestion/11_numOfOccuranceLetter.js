// Write a JavaScript function to get the number of occurrences of each letter in specified string
function OccuCheck(str){
    const occurance = {}

    str.split("").forEach(function (letter){
        if(occurance.hasOwnProperty(letter) === false){
            occurance[letter] = 1;
        }
        else
        {
            occurance[letter]++;
        }
        
    });
    return occurance

}
console.log(OccuCheck("Shivkant"))
console.log(OccuCheck("Notebook"))
console.log(OccuCheck("eehdbcsjjkkwjx"))
console.log(OccuCheck("harsh"))