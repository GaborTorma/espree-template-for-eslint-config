"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEspreeTemplate = void 0;
function useEspreeTemplate(anftuConfig) {
    var _a, _b, _c;
    for (const config of anftuConfig) {
        if (((_a = config === null || config === void 0 ? void 0 : config.files) === null || _a === void 0 ? void 0 : _a[0]) === '**/*.vue' && ((_c = (_b = config === null || config === void 0 ? void 0 : config.languageOptions) === null || _b === void 0 ? void 0 : _b.parserOptions) === null || _c === void 0 ? void 0 : _c.parser)) {
            const tsParser = config.languageOptions.parserOptions.parser;
            if (tsParser) {
                config.languageOptions.parserOptions.parser = {
                    'js': tsParser,
                    'ts': tsParser,
                    '<template>': 'espree',
                };
            }
        }
    }
    return anftuConfig;
}
exports.useEspreeTemplate = useEspreeTemplate;
//# sourceMappingURL=index.js.map