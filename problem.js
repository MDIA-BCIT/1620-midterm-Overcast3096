/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

// database is the "correct" password, entered is what the user enters
function checkUserPassword(database, entered) {
    // Checks password 
    if (database === entered) {
        console.log("Access Granted!");
    } else {
        // Special cases 
        if (entered === "forgot") {
            console.log("Here is a hint");
            return;
        };
    
        if (entered === "reset") {
            console.log("Let's reset your account");
            return;
        };

        // Passwords that fails all checks
        console.log("Access Denied!");
        return;
    };

    // Code here runs ONLY IF check succeeds - the above else statement is a catch-all as it returns no matter what
    if (database === "forgot" || database === "reset") {
        console.log("This password you set should not be used because it glitches the system");
    };

    if (database.length < 5) {
        console.log("Your password is too short!");
    };
    return;
};

console.log("--- Basic Tests ---");
checkUserPassword("password", "password");
checkUserPassword("password", "123");
checkUserPassword("password", "forgot");
checkUserPassword("password", "reset");

console.log("--- Challenge Tests ---");
checkUserPassword("reset", "reset");
checkUserPassword("forgot", "forgot");
checkUserPassword("abc", "abc");
