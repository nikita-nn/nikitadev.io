enum Theme {
  DARK,
  LIGHT,
}

interface IThemeContext {
  currentTheme: Theme;
  changeTheme: () => void;
}

export { Theme };
export type { IThemeContext };
