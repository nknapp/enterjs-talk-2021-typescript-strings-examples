
// If you define an interface for the translations, the compiler will check
// table is complete and correct. Try removing a key from the "en"-table.
export interface TranslationSchema {
  "hello.world": string;
  "my.greeting": string;
}

export const en: TranslationSchema = {
  "hello.world": "Hello world",
  "my.greeting": "Hello {{you}}, my name is {{me}}!",
};

export const de: TranslationSchema = {
  "hello.world": "Hallo Welt",
  "my.greeting": "Hallo {{you}}, ich heiße {{me}}!",
};
