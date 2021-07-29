import {TOptions} from "i18next";
import {TranslationSchema} from "src/03-react-i18next/04-translation-schema";
import {useTranslation} from "react-i18next";

// In one project, we used re-exported the "useTranslation"-hook with
// a different typing to make sure that only the correct translation-keys
// could be used as input.
export interface TFunction {
  (key: keyof TranslationSchema, options?: TOptions | string): string;
}

type UseTranslationResponse = { t: TFunction };


export const useCustomTranslation: () => UseTranslationResponse = useTranslation
