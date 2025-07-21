// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default withNuxt([
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
  },
  prettierConfig
])
