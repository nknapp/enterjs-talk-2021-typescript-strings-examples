// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// If the object is readonly ("as const") the values are also narrowed down
// to string literal types.
const zipCodes = {
  "64283": "Darmstadt",
  "10117": "Berlin",
} as const;

type ZipCodeToCity = typeof zipCodes;

type Zip = keyof ZipCodeToCity;
type City = ZipCodeToCity[Zip];

const city1: City = "Berlin";
//-- const city2: City = "Germany"
