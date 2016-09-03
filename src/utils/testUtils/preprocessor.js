const tsc = require('typescript');

const config = {
    noImplicitAny: true,
    target: tsc.ScriptTarget.ES5,
    module: tsc.ModuleKind.CommonJS,
    jsx: tsc.JsxEmit.React,
    sourceMap: true
};

module.exports = {
    process(src, path) {
        if (path.endsWith('.ts') || path.endsWith('.tsx')) {
            return tsc.transpile(
                src,
                config,
                path,
                []
            );
        }
        return src;
    }
};
