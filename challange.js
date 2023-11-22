
const numbers = [45, 20, 55, 37, 99, 21];

// Simulate a dice roll (random number between 1 and 6)
const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll result:", diceRoll);

let found = false;

// Complete the loop condition based on the dice roll
for (let i = 0; i < /* Your code here: Use diceRoll for the loop condition */; i++) {
    if (numbers[i] > 50) {
        console.log("First number greater than 50:", numbers[i]);
        found = true;
        break;
    }
}

if (!found) {
    console.log("No number greater than 50 found in the dice roll checks");
}


// =====================================================
// EXTRA Challange
const numbers = [45, 20, 55, 37, 99, 21];

// Simulate a dice roll (random number between 1 and 6)
const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll result:", diceRoll);

// Your code here:
// 1. Check if diceRoll is odd or even
// 2. If odd, write a for loop to iterate from the start of the array up to the diceRoll number
// 3. If even, write a for loop to iterate from the end of the array backwards, for diceRoll steps
// 4. In each loop, check if the current number is less than 30
// 5. If you find such a number, print it and exit the loop
// 6. If you complete the loop without finding such a number, print a message indicating that
