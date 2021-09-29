// export {} is required to clarify to the compiler, that this is a es6-module

export {};

// We can use "typeof" to derive an interface (and its keys) from an actual object
// The value-type of the interface is "string"
const zipCodes = {
  "64283": "Darmstadt",
  "10117": "Berlin",
};

type ZipCodeToCity = typeof zipCodes;

type Zip = keyof ZipCodeToCity;

const zip1: Zip = "10117";
//-- const wrong: Zip = "12345";

