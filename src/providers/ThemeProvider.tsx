import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Theme, type IThemeContext } from "../types/theme.ts";

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.DARK);

  useEffect(() => {
    const rootElem = document.getElementById("root")!;
    if (currentTheme == Theme.LIGHT) {
      rootElem.style.backgroundColor = "white";
      rootElem.style.color = "black";
    } else {
      rootElem.style.backgroundColor = "black";
      rootElem.style.color = "white";
    }
  }, [currentTheme]);

  const changeTheme = () => {
    setCurrentTheme((prevState) => {
      if (prevState == Theme.DARK) {
        return Theme.LIGHT;
      } else {
        return Theme.DARK;
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
