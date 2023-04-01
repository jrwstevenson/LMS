// https://prettier.io/docs/en/options.html
/** @type {import('prettier').RequiredOptions} */
module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  printWidth: 100,
  semi: false,
  singleQuote: false,
  trailingComma: "all",
  overrides: [
    {
      files: "Routes.*",
      options: {
        printWidth: 999,
      },
    },
  ],
}
