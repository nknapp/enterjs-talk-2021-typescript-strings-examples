// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// A template literal type works similar to es6 template literals
// Parts of the string can be fixed. Other parts variable
type Greeting = `Hello ${string}, my name is ${string}.`;

const greeting: Greeting = "Hello Max, my name is Nils.";

// Placeholders can also be numbers or string literals or unions
type Color = `${"dark-" | "light-" | ""}${"red" | "green" | "blue"}`;

const color: Color = "dark-blue"
