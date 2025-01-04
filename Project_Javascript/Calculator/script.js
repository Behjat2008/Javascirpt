// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');


// console.log(input)
// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         // if(e.target.innnerHTML == ) 
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }

//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
        
//     })
// })

// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let numberType = typeof input
// console.log(typeof numberType);

let string = "";
let hasNumber = false; // Track if a number has been entered
let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         // (e.target.innerHTML == )
//         if (!hasNumber && isNaN(buttonValue) && buttonValue !== 'AC' && buttonValue !== 'DEL') {
//             return; // Do nothing if the button is not a number and no number has been entered
//         }

//              if (e.target.innerHTML === '=') {
//             try {
//                 string = eval(string);
//                 input.value = string;
//             } catch (error) {
//                 input.value = "Error"; // Display an error message
//                 string = ""; // Reset string on error
//             }
//             } else if (e.target.innerHTML === 'AC') {
//             string = "";
//             input.value = string;
//                 } else if (e.target.innerHTML === 'DEL') {
//             string = string.substring(0, string.length - 1);
//             input.value = string;}
//             else{
//             string += e.target.innerHTML;
//             input.value = string;
//             }
//     });
// });

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.innerHTML; // Get the button value
        if (!hasNumber && isNaN(buttonValue) && buttonValue !== 'AC' && buttonValue !== 'DEL') {
            return; // Do nothing if the button is not a number and no number has been entered
        }

        if (buttonValue === '=') {
            try {
                string = eval(string);
                input.value = string;
                hasNumber = false; // Reset hasNumber after evaluation
            } catch (error) {
                input.value = "Error"; // Display an error message
                string = ""; // Reset string on error
                hasNumber = false; // Reset hasNumber on error
            }
        } else if (buttonValue === 'AC') {
            string = "";
            input.value = string;
            hasNumber = false; // Reset hasNumber on clear
        } else if (buttonValue === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
            if (string.length === 0) hasNumber = false; // Reset hasNumber if string is empty
        } else {
            if (!isNaN(buttonValue)) {
                hasNumber = true; // Set