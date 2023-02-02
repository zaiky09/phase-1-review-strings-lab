// Write your code in this file!

const currentUser = "Grace Hopper" ;

//let welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
//Above is an example of concatenation

//Below is using interpolation
let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

//.toUpperCase used to change sentence case
let excitedWelcomeMessage = welcomeMessage.toUpperCase();

//let shortGreeting = "Welcome, ";

//Below we use .slice() to get first initial of Grace
let shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;

