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

console.log(numarray)
highestNum(numarray)

function highestNum(numarray){
let max=numarray[0]
for (let j=0;j<numarray.length;j++){
   if(max < numarray[j]){
max = numarray[j]
   }
    }
console.log(max)
}