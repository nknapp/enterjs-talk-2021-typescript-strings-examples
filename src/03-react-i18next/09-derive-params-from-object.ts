// export {} is required to clarify to the compiler, that this is a es6-module
export {};

// Advanced. You should go on to the template-literal examples first.
// This code specifies a default translation table using "as const"...
const translationsDe = {
  "hello.world": "Hallo Welt",
  "my.greeting": "Hallo {{you}}, ich bin {{me}}!",
} as const;

// ... and derives a schema from that.
type DefaultTranslationSchema = typeof translationsDe;
type Key = keyof DefaultTranslationSchema;

// We also define a type that derives placeholder names from the message ...
type ParamsFromMessage<T extends string> =
  T extends `${infer _Start}{{${infer Param}}}${infer Rest}`
    ? Param | ParamsFromMessage<Rest>
    : never;

// ... and a type that derives placeholder names from the key.
type ParamsFromKey<T extends Key> = ParamsFromMessage<
  DefaultTranslationSchema[T]
>;

// We use the placeholder names as key of a params-object
type ParamsObjectForKey<T extends Key> = Record<
  ParamsFromKey<T>,
  string | number
>;

// This function allows only a valid key as first parameter. The second
// parameter is the params-object for placeholders of the key's message.
function translate<T extends Key>(
  key: T,
  value: ParamsObjectForKey<T>
): string {
  return translationsDe[key];
}

translate("my.greeting", { me: "Nils", you: "Max" });
//-- translate("abc", {});
//-- translate("my.greeting", { i: "Nils", you: "Max" });

// ----------------------------------------------------------------------
// ---------------------- The edge of the possible ----------------------
// ----------------------------------------------------------------------

// The next step would be to make sure that message in other languages contain the
// same placeholders as the default language.

// This is an attempt to define a template literal type that contains the
// same placeholders as another type.
type StringWithSamePlaceholders<T extends string> =
  T extends `${infer _Start}{{${infer Param}}}${infer Rest}`
    ? `${string}{{${Param}}}${string}` & StringWithSamePlaceholders<Rest>
    : string;

// It makes sure that all placeholders are in the string, but it cannot ensure
// that there are no other placeholders. (Ensuring that a string contains {{me}}
// and {{you}} but not {{him}} is something that I think cannot be done with
// TypeScript in 2021)
const stringWithSamePlaceholders: StringWithSamePlaceholders<"Hello {{you}}, my name is {{me}}"> =
    "Hello {{you}}, my name is {{me}}. Look there is {{him}}";

// Anyway, we can use the type to define a general schema for other languages
type TranslationSchema = {
  [T in Key]: StringWithSamePlaceholders<DefaultTranslationSchema[T]>;
};

const translationsEn: TranslationSchema = {
  "hello.world": "Hello World",
  "my.greeting": "Hello {{you}}, my name is {{me}}"
};
