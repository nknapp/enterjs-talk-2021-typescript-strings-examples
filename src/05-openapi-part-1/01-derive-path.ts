import {WikipediaApi} from "src/05-openapi-part-1/00-wikimedia";

type Spec = typeof WikipediaApi;
type Paths = keyof Spec["paths"];

async function fetchFromApi(path: Paths): Promise<void> {
  /* ... */
}

fetchFromApi("/data/lists/");

//-- fetchFromApi("/wrong/path");




async function fetchFromApi2(path: Paths, params: Record<string, string>): Promise<void> {
    /* ... */
}

fetchFromApi2("/data/i18n/{type}", {
    typo: 'abc'
})
