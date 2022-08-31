import resolveConfig from "tailwindcss/resolveConfig";
const tailwindConfig = require("./tailwind.config");

const config = resolveConfig(tailwindConfig);
const theme = config.theme;
export default theme;
