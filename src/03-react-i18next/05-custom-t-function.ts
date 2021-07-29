import { TranslationSchema } from "src/03-react-i18next/04-translation-schema";

// Use keyof in a custom function and the compiler will match the key against
// the TranslationSchema. You also get auto-completion, when calling the function
export function t(
  key: keyof TranslationSchema,
  options: Record<string, unknown>
): string {
  return "...";
}

t("my.greeting",{});
