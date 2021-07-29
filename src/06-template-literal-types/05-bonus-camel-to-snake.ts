// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// Bonus: Convert camel case to snake case, using the Lowercase<t> primitive ...
type CamelToSnakeCase<T> = T extends `${infer Start}${infer Word}${infer Rest}`
  ? Word extends Capitalize<Word>
    ? `${Start}_${Lowercase<Word>}${CamelToSnakeCase<Rest>}`
    : `${Rest}`
  : T;

const x: CamelToSnakeCase<"aBcDe"> = "a_bc_de";

// ... and vice versa using Capitalize<T>
type SnakeToCamelCase<T> = T extends `${infer Front}_${infer Back}`
  ? `${Front}${Capitalize<SnakeToCamelCase<Back>>}`
  : T;

const camel: SnakeToCamelCase<"my_little_secret"> = "myLittleSecret";

// Convert an object with snake-case keys to an object with camel-case keys
type ToCamelCaseObject<T extends Record<string, unknown>> = {
  [key in keyof T as SnakeToCamelCase<key>]: T[key];
};

// A function that converts keys of the input object to camel-case
function snakeToCamelCase<T extends Record<string, number>>(
  snakeObject: T
): ToCamelCaseObject<T> {
  throw new Error("to be implemented");
}

const fortyTwo = snakeToCamelCase({ my_little_secret: 42 }).myLittleSecret;
//-- const wrong = snakeToCamelCase({ my_little_secret: 42 }).my_little_secret;

