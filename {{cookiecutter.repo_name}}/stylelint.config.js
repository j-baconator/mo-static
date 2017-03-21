module.exports = {
  "extends": "stylelint-config-suitcss",
  "ignoreFiles": [
    "node_modules"
  ],
  "rules": {
    "indentation": null,
    "max-empty-lines": 2,
    "string-quotes": "single",
    "property-no-vendor-prefix": true,
    "at-rule-empty-line-before": [ "always", {
      ignore: ["after-comment", "blockless-after-same-name-blockless"]
    } ],
    "rule-empty-line-before":  [ "always-multi-line", {
      except: ["first-nested"],
      ignore: ["after-comment"]
    } ]
  }
}
