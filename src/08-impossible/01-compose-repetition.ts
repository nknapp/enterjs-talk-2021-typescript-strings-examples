// export {} is required to clarify to the compiler, that this is a es6-module
export {};


type ABC = 'A' | 'B' | 'C' | ''

// It is not possible to use recursion when composing strings.
//-- type OnlyABCs = `${ABC}${OnlyABCs}`
