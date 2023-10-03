let number = prompt(`Enter a number`)

//let number = 23

let divnumber = number/2
let flag
if (number==0 || number==1){
 console.log(`The number ${number} is not a prime number`)
}
else{
    let flag = true
    for(let i=2;i<=divnumber;i++){
        if(number % i==0){
            console.log(`The number ${number} is not prime number`)
            flag=false;      
            break;
        }

    }
    if (flag==true){
        console.log(`The number ${number} is prime number`)
    }

}

