import markdown from "@eslint/markdown";

export default [
  {
    files: ["**/*.md"],
    plugins: {
      markdown,
    },
    language: "markdown/commonmark",
    rules: {
      "markdown/heading-increment": "off",
      "markdown/no-duplicate-headings": "off",
      "markdown/no-html": "off",
      "markdown/fenced-code-language": "error",
      "markdown/no-empty-links": "warn",
      "markdown/no-invalid-label-refs": "error",
      "markdown/no-missing-label-refs": "error",
    },
  },
];
