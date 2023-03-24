// Get the input box and all the buttons
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// Create an empty string to hold the user's input
let string = "";

// Convert the buttons NodeList into an Array so we can loop through it
let arr = Array.from(buttons);

// Loop through each button and add a click event listener
arr.forEach(button => {
    button.addEventListener('click', (e) =>{

        // Check if the clicked button is the equals sign
        if(e.target.innerHTML == '='){
            // Evaluate the user's input string and display the result in the input box
            string = eval(string);
            input.value = string;
        }

        // Check if the clicked button is the All Clear (AC) button
        else if(e.target.innerHTML == 'AC'){
            // Clear the input string and update the input box
            string = "";
            input.value = string;
        }

        // Check if the clicked button is the Delete (DEL) button
        else if(e.target.innerHTML == 'DEL'){
            // Remove the last character from the input string and update the input box
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        // Otherwise, it must be a number or operator button
        else{
            // Add the clicked button's text to the input string and update the input box
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
