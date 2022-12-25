import { useEffect, useState } from "react";
import { Theme } from "../../types";

export const ChangeThemeButton = () => {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const handleChangeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return <button onClick={handleChangeTheme}>Change theme</button>;
};
