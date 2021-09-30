import { Schema } from "inspector";

export {};

type Translations<K extends string> = Record<string, Record<K, string>>;

// Helper method, just to derive the correct type for the translationSchema
function withKeys<K extends string>() {
  function translationSchema<S extends Translations<K>>(schema: S): S {
    return schema;
  }
  return { translationSchema };
}

type ExtractParamsFromMessage<Msg extends string> =
  Msg extends `${string}{{${infer Param}}${infer Rest}`
    ? Param | ExtractParamsFromMessage<Rest>
    : never;

type MessageForKey<Key extends string, T extends Translations<Key>> = T[string][Key];

type ExtractParamsFromKey<
  Key extends string,
  T extends Translations<Key>
> = ExtractParamsFromMessage<MessageForKey<Key, T>>;
type Params<Key extends string, Schema extends Translations<Key>> = Record<
  ExtractParamsFromKey<Key, Schema>,
  string | number | boolean
>;

type TranslateFn<T extends Translations<string>> = <
  K extends keyof T[keyof T] & string
>(
  key: K,
  params: Params<K, T>
) => string;

// Usage

type TranslationKeys = "hello.world" | "my.greeting";
const translations = withKeys<TranslationKeys>().translationSchema({
    de: {
        "hello.world": "Hallo Welt",
        "my.greeting": "Hallo {{you}}, ich bin {{me}}, {{him}}!",
    },
    en: {
        "hello.world": "Hello World",
        "my.greeting": "Hello {{you}}, my name is {{me}}",
    },
} as const);


const t: TranslateFn<typeof translations> = (key, params) => {
    return translations["de"][key]
};

t("hello.world", {
  him: "him",
  you: "your",
  me: "me",
});
