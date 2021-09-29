// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// "keyof" can be used to create a union type containing all possible keys of an interface.
export interface Person {
  "name": string;
  age: number
}

const people: Person[] = [
  { name: "Max", age: 24},
  { name: "Nina", age: 22}
]

function sortBy<T>(entities: T[], property: string): T[] {
  return []
}

sortBy(people, "blurp")

function typedSortBy<T>(entities: T[], property: keyof T): T[] {
  return [] // TODO: implement
}

typedSortBy(people, "age")

