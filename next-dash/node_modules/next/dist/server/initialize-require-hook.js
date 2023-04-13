"use strict";
var _requireHook = require("../build/webpack/require-hook");
(0, _requireHook).loadRequireHook();
const isPrebundled = true;
if (isPrebundled) {
    (0, _requireHook).overrideBuiltInReactPackages();
}

//# sourceMappingURL=initialize-require-hook.js.map