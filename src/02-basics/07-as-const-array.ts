// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// In this case, "as const" is used with an array.
// "typeof colors[number]" becomes a union type containing all array items.
// This is useful if you need to iterate all values of a union type
const colors = ["red", "green", "blue"] as const;
type Color = typeof colors[number];

const v1: Color = "red";
const v2: Color = "green";
//-- const v3: Color = "three";

for (const color of colors) {
    createImage(color, `${color}.png`)
}

function createImage(color: Color, path: string) {
    // ...
}
