/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  bracketSameLine: true,
  bracketSpacing: false,
  experimentalTernaries: true,
  tailwindFunctions: ["cva", "cn"],
  plugins: ["prettier-plugin-tailwindcss"],
};
export default config;
