import { useEffect } from "react";
import theme from "../../tailwind.theme";

export const useBreakPoint = () => {
  const { innerWidth, innerHeight } = window;

  const screensArray = Object.values(theme.screens);

  function parseWidth() {
    const que = innerWidth == parseInt(screensArray[0] ? "sm" : "lg");
    console.log(que);
    return que;
  }

  useEffect(() => {
    parseWidth();
  }, [innerWidth]);
  // if (innerWidth <= parseInt(screensArray[0])) {
  //   return "sm";
  // }

  // if (innerWidth <= parseInt(screensArray[1])) {
  //   return ["md"];
  // }

  // if (innerWidth <= parseInt(screensArray)[2]) {
  //   return ["lg"];
  // }

  // if (innerWidth <= parseInt(screensArray)[3]) {
  //   return ["xl"];
  // }
};
