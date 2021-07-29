// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// We can use "typeof" to derive an interface (and its keys) from an actual object
// The value-type of the interface is "string"
const colors = {
  "red": "#FF0000",
  "green": "#00ff00"
}

type ColorMap = typeof colors;

const darkTheme: ColorMap = {
  "red": "#770000",
  "green": "#007700",
};

type ColorKey = keyof ColorMap;

function getColor(key: ColorKey): string {
  return colors[key];
}

getColor("green");
getColor("red");
//-- getColor("other key");
