let numarray = []
let totalnumbers = prompt('Enter total numbers of an array')
let revarray = []
for (let i=1;i<=totalnumbers;i++){
    let inputNumber = prompt(`Enter number ${i}`)   
    numarray.push(inputNumber)
if(i==totalnumbers)
 {
    console.log("Entered all the numbers")
    break;
 }   

}

for (let j=numarray.length-1;j>=0;j--){
        
        revarray.push(numarray[j])
    }

console.log(revarray)