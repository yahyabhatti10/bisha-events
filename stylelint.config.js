module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-config-tailwindcss" // Optional, if you want additional Tailwind linting rules
    ],
    rules: {
      "at-rule-no-unknown": [
        true,
        {
          ignoreAtRules: ["tailwind", "apply", "layer"]
        }
      ]
    }
  };
  