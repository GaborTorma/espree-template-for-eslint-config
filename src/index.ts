import type { ConfigItem } from '@antfu/eslint-config'

export function useEspreeTemplate(anftuConfig: ConfigItem[]) {
  for (const config of anftuConfig) {
    if (config?.files?.[0] === '**/*.vue' && config?.languageOptions?.parserOptions?.parser) {
      const tsParser = config.languageOptions.parserOptions.parser
      if (tsParser) {
        config.languageOptions.parserOptions.parser = {
          'js': tsParser,
          'ts': tsParser,
          '<template>': 'espree',
        }
      }
    }
  }
  return anftuConfig
}
