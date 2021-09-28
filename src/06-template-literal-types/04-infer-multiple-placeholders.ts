// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// With recursion, we can define a type that can be *any* placeholder
// in the string type
type ExtractParams<T> = T extends `${string}{${infer Param}}${infer Rest}`
  ? Param | ExtractParams<Rest>
  : never;

const param1: ExtractParams<"Hello {you}, my name is {me}?"> = "me";

// The following types are all equivalent
type Step1 = ExtractParams<"Hello {you}, my name is {me}?">
type Step2 = 'you' | ExtractParams<", my name is {me}?">
type Step3 = 'you' | 'me' | ExtractParams<"?">
type Step4 = 'you' | 'me' | never
type Step5 = 'you' | 'me'

