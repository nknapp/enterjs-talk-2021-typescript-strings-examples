import { WikipediaApi } from "src/05-openapi-part-1/00-wikimedia";

// In addition to the path, we can also derive valid methods for this path
// (i.e. roughly the properties of the path object)
type Spec = typeof WikipediaApi;
type Paths = keyof Spec["paths"];
type ValidMethod = "get" | "post" | "put" | "patch" | "options" | "head";
type Methods<Path extends Paths> = keyof Spec["paths"][Path] & ValidMethod;

async function fetchFromApiWithMethod<T extends Paths>(
  path: T,
  method: Methods<T>
): Promise<void> {}

fetchFromApiWithMethod("/data/citation/{format}/{query}", "get");
