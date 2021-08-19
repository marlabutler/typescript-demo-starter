function addNumbers(numOne: number, numTwo: number) {
    return numOne + numTwo;
}

//1 - Works
addNumbers(1,2);

//2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");

// Practice
// TypeScript function that concatenates two strings(firstName & lastName) and returns a fullName.


// Practice Function
// Follow these steps to create a TypeScript function:

// Create a function with a return type of boolean.

// The function takes in a string username and string password for it's password.

// Inside the function have a conditional that checks if the username is set to  and the password is .

// If both conditions are true, the function should return true.

// If one or both conditions are false the function should return false.

// OPTIONALS
                                    //1                             //2
function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string) {
    console.log(someString);
    return numOne + numTwo;
}

    //5
addNumbersWithOptional(1, 2); //3
addNumbersWithOptional(1, 2, "This is optional"); //4

// Practice
// Write a function that has three parameters: first, middle, last.

// The middle param should be optional and the first and last should be required strings.

// If a value is passed in for middle, concatenate the fullname and include the middle name.

// If a value is not passed in for middle, concatenate the fullname with just first and last.

function fullName(firstName: string, lastName: string, middleName?: string) {
    console.log(middleName);
    return firstName + lastName;
}