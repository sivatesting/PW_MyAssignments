let numarray = []
let totalnumbers = prompt('Enter total numbers of an array')


for (let i=1;i<=totalnumbers;i++){

    let inputNumber = parseInt(prompt(`Enter number ${i}`))
    numarray.push(inputNumber)

if(i==totalnumbers)
 
{
    console.log("Entered all the numbers")
    break;
 }   

}

mostFrequent(numarray)

function mostFrequent(numarray) {
 
    let maxCount = 0
    let maxOccuringNumber;
    for (let i = 0; i < numarray.length; i++) {
        let count = 0
        for (let j = 0; j < numarray.length; j++) {
            if (numarray[i] == numarray[j])
                count++;
        }
 
        if (count > maxCount) {
            maxCount = count;
            maxOccuringNumber = numarray[i];
        }
    }
 
    console.log(`Maximum occuring number ${maxOccuringNumber} and count is ${maxCount}` )
}