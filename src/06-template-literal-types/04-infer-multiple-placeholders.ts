// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// With recursion, we can define a type that can be *any* placeholder
// in the string type
type ExtractParams<T> = T extends `${string}{${infer Param}}${infer Rest}`
  ? Param | ExtractParams<Rest>
  : never;

const param1: ExtractParams<"Hello {you}, my name is {me}?"> = "me";
