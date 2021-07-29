// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// When we combine "infer" with template literal types, we can infer a part
// of the string of the generic type.
type ExtractParam<T> = T extends `${string}{${infer Param}}${string}`
  ? Param
  : never;

const param: ExtractParam<"Hello {name}, how are you?"> = "name";


