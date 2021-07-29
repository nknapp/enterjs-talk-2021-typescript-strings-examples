// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// String literal types can only contain a single string
type Literal = "literal";

const l: Literal = "literal";

//-- const wrong: Literal = "abc";
