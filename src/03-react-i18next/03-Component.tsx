import { useTranslation } from "react-i18next";

// When everything is set up, we can use translations like this:
export const Component: React.FC = () => {
  const { t } = useTranslation();

  return <div>{t("1212323", { you: "Max", me: "Nils" })}</div>;
};
