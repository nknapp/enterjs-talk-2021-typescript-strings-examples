// If "T" is a Promise, PromisedResult will be the type it resolves to
type PromisedResult<T> = T extends Promise<infer Result> ? Result : never;

const x: PromisedResult<Promise<number>> = 123;

// --------------------------
// ---- Different example ---
// --------------------------

// This type infers the first parameter of a function
type Param<F> = F extends (input: infer X) => void ? X : never;

function y(input: "abc"): void {}

type ParamY = Param<typeof y>;
const t: ParamY = "abc";

export {};
