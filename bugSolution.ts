function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Iterate over the array
for (let name of user) {
  console.log(greeter(name));
}

// Solution 2: Join the array elements into a single string
let userName = user.join(" ");
console.log(greeter(userName)); // Output: Hello, Jane Doe

// Solution 3: Modify the function signature to accept an array of strings
function greeter2(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeter2(user)); //Output: Hello, Jane Doe