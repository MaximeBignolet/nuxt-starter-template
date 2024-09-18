// eslint-disable-next-line import/namespace
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import _import from "eslint-plugin-import";
import promise from "eslint-plugin-promise";
import html from "eslint-plugin-html";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import jsonParser from "jsonc-eslint-parser";
import vueParser from "vue-eslint-parser";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [ {
  ignores: [
    `**/*.min.*`,
    `**/dist`,
    `**/public`,
    `**/yarn.lock`,
    `!**/.vscode`,
    `**/auto-imports.d.ts`,
    `src/presentation/components/svg`
  ]
}, ...fixupConfigRules(compat.extends(
  `plugin:vue/vue3-essential`,
  `plugin:vue/vue3-strongly-recommended`,
  `plugin:vue/vue3-recommended`,
  `plugin:import/recommended`,
  `plugin:import/typescript`,
  `plugin:@typescript-eslint/recommended`,
  `plugin:jsonc/recommended-with-jsonc`
)), {
  plugins: {
    import: fixupPluginRules(_import),
    promise,
    html,
    unicorn,
    "unused-imports": unusedImports
  },

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      document: `readonly`,
      navigator: `readonly`,
      window: `readonly`
    },

    ecmaVersion: `latest`,
    sourceType: `module`,

    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },

  rules: {
    "unused-imports/no-unused-imports": `error`,

    "unused-imports/no-unused-vars": [ `warn`, {
      vars: `all`,
      varsIgnorePattern: `^_`,
      args: `after-used`,
      argsIgnorePattern: `^_`
    } ],

    "no-unused-vars": `off`,
    "@typescript-eslint/no-unused-vars": `off`,
    "@typescript-eslint/no-explicit-any": `off`,

    "@/quotes": [ `error`, `backtick`, {
      avoidEscape: true,
      allowTemplateLiterals: false
    } ],

    "vue/max-attributes-per-line": [ `error`, {
      singleline: {
        max: 1
      },

      multiline: {
        max: 1
      }
    } ],

    "vue/html-self-closing": [ `error`, {
      html: {
        void: `never`,
        normal: `never`,
        component: `always`
      },

      svg: `always`,
      math: `always`
    } ],

    "vue/html-indent": [ `error`, 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: false,
      ignores: []
    } ],

    "vue/first-attribute-linebreak": `error`,
    "vue/html-closing-bracket-newline": `error`,
    "vue/html-closing-bracket-spacing": `error`,

    "vue/html-quotes": [ `error`, `double`, {
      avoidEscape: true
    } ],

    "vue/multiline-html-element-content-newline": [ `error`, {
      ignoreWhenEmpty: true,
      ignores: [ `VueComponent`, `pre`, `textarea` ],
      allowEmptyLines: false
    } ],

    "vue/require-default-prop": `off`,

    "vue/multi-word-component-names": [ `off`, {
      ignores: []
    } ],

    "vue/component-tags-order": [ `error`, {
      order: [ [ `template`, `script` ], `style` ]
    } ],

    "vue/no-v-html": `off`,
    "vue/attribute-hyphenation": [ `error`, `never` ],

    "vue/v-on-event-hyphenation": [ `error`, `never`, {
      autofix: true
    } ],

    "vue/block-lang": [ `error`, {
      template: {
        allowNoLang: true
      },

      script: {
        lang: [ `ts`, `tsx` ]
      },

      style: {
        lang: `css`
      }
    } ],

    "vue/block-tag-newline": [ `error`, {
      singleline: `always`,
      multiline: `always`,
      maxEmptyLines: 1
    } ],

    "vue/component-api-style": [ `error`, [ `script-setup` ] ],

    "vue/component-name-in-template-casing": [ `error`, `PascalCase`, {
      registeredComponentsOnly: false
    } ],

    "vue/custom-event-name-casing": `error`,

    "vue/define-macros-order": [ `error`, {
      order: [ `defineProps`, `defineEmits` ]
    } ],

    "vue/html-comment-content-newline": `error`,
    "vue/html-comment-content-spacing": `error`,
    "vue/html-comment-indent": [ `error`, 2 ],
    "vue/no-empty-component-block": `error`,
    "vue/no-multiple-objects-in-class": `error`,
    "vue/no-static-inline-styles": `off`,
    "vue/no-this-in-before-route-enter": `error`,
    "vue/no-unused-refs": `error`,
    "vue/no-useless-mustaches": `error`,
    "vue/no-useless-v-bind": `error`,
    "vue/no-v-text": `error`,
    "vue/padding-line-between-blocks": `error`,
    "vue/prefer-separate-static-class": `error`,
    "vue/prefer-true-attribute-shorthand": `error`,

    "vue/script-indent": [ `error`, 2, {
      baseIndent: 0,
      switchCase: 1
    } ],

    "vue/v-for-delimiter-style": `error`,
    "no-var": `warn`,
    "object-shorthand": `off`,

    "accessor-pairs": [ `warn`, {
      setWithoutGet: true,
      enforceForClassMembers: true
    } ],

    "array-bracket-spacing": [ `error`, `always` ],

    "array-callback-return": [ `error`, {
      allowImplicit: false,
      checkForEach: false
    } ],

    "arrow-spacing": [ `error`, {
      before: true,
      after: true
    } ],

    "block-spacing": [ `error`, `always` ],

    "brace-style": [ `error`, `1tbs`, {
      allowSingleLine: true
    } ],

    camelcase: [ `warn`, {
      allow: [ `^UNSAFE_` ],
      properties: `never`,
      ignoreGlobals: true
    } ],

    "comma-dangle": [ `error`, {
      arrays: `never`,
      objects: `never`,
      imports: `never`,
      exports: `never`,
      functions: `never`
    } ],

    "comma-spacing": [ `error`, {
      before: false,
      after: true
    } ],

    "comma-style": [ `error`, `last` ],

    "computed-property-spacing": [ `error`, `never`, {
      enforceForClassMembers: true
    } ],

    "constructor-super": `error`,
    curly: [ `error`, `multi-line` ],
    "default-case-last": `error`,
    "dot-location": [ `error`, `property` ],

    "dot-notation": [ `error`, {
      allowKeywords: true
    } ],

    "eol-last": `off`,

    eqeqeq: [ `error`, `always`, {
      null: `ignore`
    } ],

    "func-call-spacing": [ `error`, `never` ],

    "generator-star-spacing": [ `error`, {
      before: true,
      after: true
    } ],

    indent: [ `error`, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,

      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },

      FunctionExpression: {
        parameters: 1,
        body: 1
      },

      CallExpression: {
        arguments: 1
      },

      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,

      ignoredNodes: [
        `TemplateLiteral *`,
        `JSXElement`,
        `JSXElement > *`,
        `JSXAttribute`,
        `JSXIdentifier`,
        `JSXNamespacedName`,
        `JSXMemberExpression`,
        `JSXSpreadAttribute`,
        `JSXExpressionContainer`,
        `JSXOpeningElement`,
        `JSXClosingElement`,
        `JSXFragment`,
        `JSXOpeningFragment`,
        `JSXClosingFragment`,
        `JSXText`,
        `JSXEmptyExpression`,
        `JSXSpreadChild`
      ],

      offsetTernaryExpressions: true
    } ],

    "key-spacing": [ `error`, {
      beforeColon: false,
      afterColon: true
    } ],

    "keyword-spacing": [ `error`, {
      before: true,
      after: true
    } ],

    "lines-between-class-members": [ `error`, `always`, {
      exceptAfterSingleLine: true
    } ],

    "multiline-ternary": [ `error`, `always-multiline` ],

    "new-cap": [ `error`, {
      newIsCap: true,
      capIsNew: false,
      properties: true
    } ],

    "new-parens": `error`,
    "no-array-constructor": `error`,
    "no-async-promise-executor": `error`,
    "no-caller": `error`,
    "no-case-declarations": `error`,
    "no-class-assign": `error`,
    "no-compare-neg-zero": `error`,
    "no-cond-assign": `error`,
    "no-const-assign": `error`,

    "no-constant-condition": [ `error`, {
      checkLoops: false
    } ],

    "no-control-regex": `error`,
    "no-debugger": `warn`,
    "no-delete-var": `error`,
    "no-dupe-args": `error`,
    "no-dupe-class-members": `error`,
    "no-dupe-keys": `error`,
    "no-duplicate-case": `error`,
    "no-useless-backreference": `error`,

    "no-empty": [ `error`, {
      allowEmptyCatch: true
    } ],

    "no-empty-character-class": `error`,
    "no-empty-pattern": `error`,
    "no-eval": `error`,
    "no-ex-assign": `error`,
    "no-extend-native": `error`,
    "no-extra-bind": `error`,
    "no-extra-boolean-cast": `error`,
    "no-extra-parens": [ `error`, `functions` ],
    "no-fallthrough": `error`,
    "no-floating-decimal": `error`,
    "no-func-assign": `error`,
    "no-global-assign": `error`,
    "no-implied-eval": `error`,
    "no-import-assign": `error`,
    "no-invalid-regexp": `error`,
    "no-irregular-whitespace": `error`,
    "no-iterator": `error`,

    "no-labels": [ `error`, {
      allowLoop: false,
      allowSwitch: false
    } ],

    "no-lone-blocks": `error`,
    "no-loss-of-precision": `error`,
    "no-misleading-character-class": `error`,
    "no-prototype-builtins": `error`,
    "no-useless-catch": `error`,

    "no-mixed-operators": [ `error`, {
      groups: [
        [ `==`, `!=`, `===`, `!==`, `>`, `>=`, `<`, `<=` ],
        [ `&&`, `||` ],
        [ `in`, `instanceof` ]
      ],

      allowSamePrecedence: true
    } ],

    "no-mixed-spaces-and-tabs": `error`,
    "no-multi-spaces": `error`,
    "no-multi-str": `error`,

    "no-multiple-empty-lines": [ `error`, {
      max: 1,
      maxEOF: 0
    } ],

    "no-new": `error`,
    "no-new-func": `error`,
    "no-new-object": `error`,
    "no-new-symbol": `error`,
    "no-new-wrappers": `error`,
    "no-obj-calls": `error`,
    "no-octal": `error`,
    "no-octal-escape": `error`,
    "no-proto": `error`,

    "no-redeclare": [ `error`, {
      builtinGlobals: false
    } ],

    "no-regex-spaces": `error`,
    "no-return-assign": [ `error`, `except-parens` ],

    "no-self-assign": [ `error`, {
      props: true
    } ],

    "no-self-compare": `error`,
    "no-sequences": `error`,
    "no-shadow-restricted-names": `error`,
    "no-sparse-arrays": `error`,
    "no-tabs": `error`,
    "no-template-curly-in-string": `error`,
    "no-this-before-super": `error`,
    "no-throw-literal": `error`,
    "no-trailing-spaces": `error`,
    "no-undef": `error`,
    "no-undef-init": `error`,
    "no-unexpected-multiline": `error`,
    "no-unmodified-loop-condition": `error`,

    "no-unneeded-ternary": [ `error`, {
      defaultAssignment: false
    } ],

    "no-unreachable": `error`,
    "no-unreachable-loop": `error`,
    "no-unsafe-finally": `error`,
    "no-unsafe-negation": `error`,

    "no-unused-expressions": [ `error`, {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true
    } ],

    "no-use-before-define": [ `error`, {
      functions: false,
      classes: false,
      variables: false
    } ],

    "no-useless-call": `error`,
    "no-useless-computed-key": `error`,
    "no-useless-constructor": `error`,
    "no-useless-escape": `error`,
    "no-useless-rename": `error`,
    "no-useless-return": `error`,
    "no-void": `error`,
    "no-whitespace-before-property": `error`,
    "no-with": `error`,

    "object-curly-newline": [ `error`, {
      multiline: true,
      consistent: true
    } ],

    "object-curly-spacing": [ `error`, `always` ],

    "object-property-newline": [ `error`, {
      allowMultiplePropertiesPerLine: true
    } ],

    "one-var": [ `error`, {
      initialized: `never`
    } ],

    "operator-linebreak": [ `error`, `after`, {
      overrides: {
        "?": `before`,
        ":": `before`,
        "|>": `before`
      }
    } ],

    "padded-blocks": [ `error`, {
      blocks: `never`,
      switches: `never`,
      classes: `never`
    } ],

    "prefer-const": [ `error`, {
      destructuring: `all`
    } ],

    "prefer-promise-reject-errors": `error`,

    "prefer-regex-literals": [ `error`, {
      disallowRedundantWrapping: true
    } ],

    "quote-props": [ `error`, `as-needed` ],
    "rest-spread-spacing": [ `error`, `never` ],
    semi: [ `error`, `always` ],

    "semi-spacing": [ `error`, {
      before: false,
      after: true
    } ],

    "space-before-blocks": [ `error`, `always` ],

    "space-before-function-paren": [ `error`, {
      anonymous: `always`,
      named: `never`,
      asyncArrow: `always`
    } ],

    "space-in-parens": [ `error`, `never` ],
    "space-infix-ops": `error`,

    "space-unary-ops": [ `error`, {
      words: true,
      nonwords: false
    } ],

    "spaced-comment": [ `error`, `always`, {
      line: {
        markers: [ `*package`, `!`, `/`, `,`, `=` ]
      },

      block: {
        balanced: true,
        markers: [ `*package`, `!`, `,`, `:`, `::`, `flow-include` ],
        exceptions: [ `*` ]
      }
    } ],

    "symbol-description": `error`,
    "template-curly-spacing": [ `error`, `never` ],
    "template-tag-spacing": [ `error`, `never` ],
    "unicode-bom": [ `error`, `never` ],

    "use-isnan": [ `error`, {
      enforceForSwitchCase: true,
      enforceForIndexOf: true
    } ],

    "valid-typeof": [ `error`, {
      requireStringLiterals: true
    } ],

    "wrap-iife": [ `error`, `any`, {
      functionPrototypeMethods: true
    } ],

    "yield-star-spacing": [ `error`, `both` ],
    yoda: [ `error`, `never` ],
    "import/export": `error`,
    "import/first": `error`,

    "import/no-absolute-path": [ `error`, {
      esmodule: true,
      commonjs: true,
      amd: false
    } ],

    "import/no-duplicates": `error`,
    "import/no-named-default": `error`,
    "import/no-unresolved": `off`,
    "promise/param-names": `error`
  }
}, {
  files: [ `**/*.vue` ],

  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: `@typescript-eslint/parser`
    }
  },
  rules: {
    indent: `off`,
    "no-undef": `off`
  }
}, {
  files: [ `**/*.json`, `**/*.json5` ],
  languageOptions: {
    parser: jsonParser
  },
  rules: {
    "jsonc/quotes": [ `error`, `double` ],
    "jsonc/quote-props": [ `error`, `always` ],
    "jsonc/comma-dangle": [ `error`, `never` ]
  }
}, {
  files: [ `**/package.json` ],

  languageOptions: {
    parser: jsonParser
  },

  rules: {
    "jsonc/sort-keys": [ `error`, {
      pathPattern: `^$`,

      order: [
        `name`,
        `type`,
        `version`,
        `private`,
        `packageManager`,
        `description`,
        `keywords`,
        `license`,
        `author`,
        `repository`,
        `funding`,
        `main`,
        `module`,
        `types`,
        `unpkg`,
        `jsdelivr`,
        `exports`,
        `files`,
        `bin`,
        `sideEffects`,
        `scripts`,
        `peerDependencies`,
        `peerDependenciesMeta`,
        `dependencies`,
        `optionalDependencies`,
        `devDependencies`,
        `husky`,
        `lint-staged`,
        `eslintConfig`
      ]
    }, {
      pathPattern: `^(?:dev|peer|optional|bundled)?[Dd]ependencies$`,

      order: {
        type: `asc`
      }
    } ]
  }
}, {
  files: [ `**/*.d.ts` ],

  rules: {
    "import/no-duplicates": `off`
  }
}, {
  files: [ `**/*.js` ],

  rules: {
    "@typescript-eslint/no-var-requires": `off`
  }
} ];
