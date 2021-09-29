import { WikipediaApi } from "src/05-openapi-part-1/00-wikimedia";

// In this example, we show how to derive path-parameters from the path string.
type Spec = typeof WikipediaApi;
type Paths = keyof Spec["paths"];

// This is what we have done in 06-template-literal-types
type ExtractPathParam<Path extends string> =
  Path extends `${string}{${infer Param}}${infer Rest}`
    ? Param | ExtractPathParam<Rest>
    : never;

// Define an object-type based on the extracted params
type Params<Path extends string> = Record<
  ExtractPathParam<Path>,
  string | number
>;

const params: Params<"/data/citation/{format}/{query}"> = {
  query: 1,
  format: "test",
};

// Create a function that has a valid path as first parameter. The form of the
// params-object is determined by the used path. "T" is derived by the compiler
function fetchFromApi<T extends Paths>(path: T, params: Params<T>) {
  /* ... */
}

fetchFromApi("/data/citation/{format}/{query}", {
  query: 1,
  format: "test",
});

//-- fetchFromApi("/page/lint/{title}/{revision}", {
//--     title: "Some title",
//--     revisin: 2
//-- })
