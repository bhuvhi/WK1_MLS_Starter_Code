// Part 1 Exercises (use Copilot inline suggestions)

// Exercise 1: Comment-Driven Development
// Function to calculate the factorial of a number


// Exercise 2: Array Operations
const numList = [1, 2, 3, 4, 5];

// Filter even numbers
const evenNumbers = numList.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]


// Exercise 3: Function from Signature
// Type this on a new line and press Enter:
function reverseString(str) {
  return str.split('').reverse().join('');
}


// Exercise 4: Process User Data
const processUserData = (users = []) => {
  if (!Array.isArray(users)) {
    throw new TypeError("processUserData: 'users' must be an array.");
  }

  return users
    .filter((user) => {
      if (!user || typeof user !== "object") return false;

      const { age } = user;
      return Number.isFinite(age) && age >= 18;
    })
    .map((user) => {
      const { name, email } = user;

      if (typeof name !== "string" || !name.trim()) {
        throw new TypeError("processUserData: each adult user must have a valid 'name'.");
      }
      if (typeof email !== "string" || !email.includes("@")) {
        throw new TypeError("processUserData: each adult user must have a valid 'email'.");
      }

      return { name: name.trim(), email: email.trim() };
    });
};

// ...existing code...

 

