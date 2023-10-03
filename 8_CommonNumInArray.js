//If given two arrays, write a program to find common numbers in them add them to a new array
//, and return them. If nothing is common, return an empty array

let arr1 =[]
let arr2=[]
let outputArray =[]
let totalnumbers1 = prompt('Enter total numbers of an array 1')


for (let i=1;i<=totalnumbers1;i++){

    let inputNumber = parseInt(prompt(`Enter number ${i}`))
    arr1.push(inputNumber)

if(i==totalnumbers1)
 
{
    console.log("Entered all the numbers")
    break;
 }   

}


let totalnumbers2 = prompt('Enter total numbers of an array 2') 

for (let i=1;i<=totalnumbers2;i++){

    let inputNumber = parseInt(prompt(`Enter number ${i}`))
    arr2.push(inputNumber)

if(i==totalnumbers2)
 
{
    console.log("Entered all the numbers")
    break;
 }   

}

console.log(arr1)
console.log(arr2)

for(i=0;i<arr1.length;i++){
    for(j=0;j<arr2.length;j++) {
        if(arr1[i]==arr2[j]){
            outputArray.push(arr1[i])
        }
    }
}


console.log(outputArray)