import { useCustomTranslation } from "src/03-react-i18next/06-useCustomTranslation";

// This component uses the custom hook. This can be enforced using eslint
export const ComponentWithCustomHook: React.FC = () => {
  const { t } = useCustomTranslation();

  return <div>{t("my.greeting", { you: "Max", me: "Nils" })}</div>;
};
