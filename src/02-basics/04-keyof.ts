// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// "keyof" can be used to create a union type containing all possible keys of an interface.
interface ColorMap {
  "red": string;
  "green": string;
}

type ColorKey = keyof ColorMap;

function getColor(key: ColorKey): string {
  return "mock";
}

getColor("green");
getColor("red");
//-- getColor("other key");
