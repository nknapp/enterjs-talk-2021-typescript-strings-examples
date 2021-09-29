// We can use "infer" to extract part of the string
type Greeting<You extends string> = `Hello ${You}, my name is ${string}.`;

// infer the generic variable
type Extract<G> = G extends Greeting<infer Y> ? Y : never;

const max: Extract<"Hello Max, my name is Nils."> = "Max";
//-- const wrong: ExtractYou<"Hello Max, my name is Nils"> = "asdasd"

// --------------------------
// ---- Different example ---
// --------------------------

// This type infers the first parameter of a function
type Param<F> = F extends (input: infer X) => void ? X : never;

function y(input: "abc"): void {}

type ParamY = Param<typeof y>;
const t: ParamY = "abc";

export {};
