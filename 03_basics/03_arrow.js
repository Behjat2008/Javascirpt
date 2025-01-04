const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this.username);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "behjat"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "behjat"
//     console.log(this.username);
// }
 
const chai =  () => {
        let username = "behjat"
        console.log(this);
    }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                               //1st method
// }

// const addTwo = (num1, num2) =>  num1 + num2          // 2nd method

// const addTwo = (num1, num2) =>  (num1 + num2)   

const addTwo = (num1, num2) =>  ({username: "behjat"}) 


console.log(addTwo(3, 4));


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()