// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// String literal types can be combined with union-types. Variables
// of this type can contain any of the specified strings.
type ValidRoute = "/" | "/login" | "/details/{title}/{revision}";
const route1: ValidRoute = "/";
const route2: ValidRoute = "/login";

function navigateTo(route: ValidRoute): void {
  /* ... */
}

navigateTo("/login");
//-- navigateTo("/wrong/path");
