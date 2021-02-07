import { BreakPoints, Colors } from "./types";
import { DefaultTheme } from "styled-components";

const getApplicationTheme = (): Colors => {
  let isDark: boolean = false;
  return {
    unifarmPrimary: isDark ? "#314e52" : "#19456b",
    unifarmSecondary: isDark ? "#eb596e" : "#af0069",
    unifarmClassic: isDark ? "#eb596e" : "#af0069",
    unifarmSuccess: isDark ? "#eb596e" : "#af0069",
    unifarmInfo: isDark ? "#eb596e" : "#af0069",
    unifarmDisabled: isDark ? "#eb596e" : "#af0069",
  };
};

const breakpoints: BreakPoints = {
  xl: 1920,
  lg: 1280,
  md: 990,
  sm: 767,
  xs: 360,
};

const theme: DefaultTheme = {
  colors: getApplicationTheme(),
  breakpoints,
};

export default theme;
