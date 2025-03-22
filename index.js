// console.log(`Hello Js World!`);

// window.alert("Hello Js World!");
// window.confirm("Are you welcoming me to js world?");

//##################################################################################

// document.getElementById('id1').textContent = "Hello Js World!";
// document.getElementById('idP').textContent = "Welcome to Js World!";


                        // Variables are containers for storing data values.
                                // In JavaScript, we have 3 types of variables:

                                                    // var is function scoped
                                                    // let is block scoped
                                                    // const is block scoped

// var a = 10;
// let b = 20;
// const c = 30;

// console.log(`this is a var decalred variable ${a}`);
// console.log(`this is a let decalred variable ${b}`);
// console.log(`this is a const decalred variable ${c}`);

// // we make example of calculation using variables

// let x = 10;
// let y = 20;
// let z = 30;

// console.log(`the value of x is ${x}`);
// console.log(`the value of y is ${y}`);
// console.log(`the value of z is ${z}`);
// console.log(`the sum of x, y, z is ${x + y + z}`);

//################################################################################################
// DATA TYPES IN JAVASCRIPT
  // IN JAVASCRIPT DATATYPES ARE DESCRIBED AS THE TYPE OF DATA THAT CAN BE STORED IN A VARIABLE.
    // IN JAVASCRIPT THERE ARE TWO TYPES OF DATATYPES
          // PRIMITIVE DATATYPES
            // NON-PRIMITIVE DATATYPES
    // PRIMITIVE DATATYPES: ARE THE DATA TYPES THAT ARE NOT OBJECTS AND HAVE NO METHODS OR PROPERTIES.
    //EXAMPLES OF PRIMITIVE DATATYPES ARE:
          // STRING
          // NUMBER
          // BOOLEAN
          // UNDEFINED
          // NULL
          // SYMBOL
          // BIGINT
    // NON-PRIMITIVE DATATYPES: ARE THE DATA TYPES THAT ARE OBJECTS AND HAVE METHODS AND PROPERTIES.
    //EXAMPLES OF NON-PRIMITIVE DATATYPES ARE:
          // OBJECT
          // ARRAY
          // FUNCTION
    // CODE EXAMPLE:
//     let name = "John";
//     let age = 30;
//     let isStudent = true;

// console.log(`these data types are primitive data types in javascript`);
//     console.log(`the name is ${name}`);
//     console.log(`the age is ${age}`);
//     console.log(`the isStudent is ${isStudent}`);

//#######################################################################################################

// Arthemetic Operators in JavaScript
    // Arthemetic operators are used to perform arthemetic operations on numbers.
    // Operands are the values on which operators operate.(example of operands are [values, variables, constants, expressions, etc.])
                                                          //operators are symbols that perform operations on operands. (example of operators are [+, -, *, /, %, ++, --, etc.])
    //Example of arthemetic operators in javascript using variables

    // let students = 30;

    // //students = students + 1;
    // //students = students - 1;
    // //students =  students * 2;
    // //students = students / 2;
    // //students = students % 2;
    // students = students ** 2;
    // console.log(`the number of students is ${students}`);


/* Operator presedence in JavaScript
    1. Paranthesis ()
    2. Exponentiation **
    3. Multiplication * & Division / & Modulus %
    4. Addition + & Subtraction -
*/

// ########################################################################################################################################



// How to accept user input in JavaScript
    //1 Easy way  is Window prompt
    //2 Hard way is using HTML form



    // let userName;

    // userName = window.prompt("What is your name?");

    // console.log(`Hello ${userName}`);

//     let userName;

// document.getElementById('myBtn').onclick = function(){
//     userName = document.getElementById('myInpt').value;
//     document.getElementById('myh1').textContent = `Hello ${userName}`;
// }

//#####################3#########################################################################################################################################

 // Type Conversion in JavaScript
   // Type conversion is the process of converting one data type to another.
   //( Strings  , Numbers , Booleans )



//    let age = window.prompt("How old are you?");

//   age = Number(age);

//    age += 1;

//    console.log(`You are ${age} years old`);

// CONSTANT VARIABLES IN JAVASCRIPT
    // CONSTANT VARIABLES ARE VARIABLES THAT CANNOT BE CHANGED.





    // radius = window.prompt("Enter the radius of a circle");
    // radius = Number(radius);

    document.getElementById("mySubmit").addEventListener("click", function () {
        let radius = parseFloat(document.getElementById("myText").value);
        let popup = document.getElementById("popup");
        let overlay = document.getElementById("overlay");
        let message = document.getElementById("myH3");

        if (!isNaN(radius) && radius > 0) {
            let circumference = 2 * Math.PI * radius;
            message.textContent = "Circumference: " + circumference.toFixed(2);
        } else {
            message.textContent = "Please enter a valid positive number.";
        }

        // Show popup
        popup.style.display = "block";
        overlay.style.display = "block";
    });

    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    });