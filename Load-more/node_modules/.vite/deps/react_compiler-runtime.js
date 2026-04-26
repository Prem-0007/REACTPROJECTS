import { n as __commonJSMin, t as require_react } from "./react-DW0Z4HR0.js";
//#region node_modules/react/cjs/react-compiler-runtime.development.js
/**
* @license React
* react-compiler-runtime.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_compiler_runtime_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		var ReactSharedInternals = require_react().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		exports.c = function(size) {
			var dispatcher = ReactSharedInternals.H;
			null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
			return dispatcher.useMemoCache(size);
		};
	})();
}));
//#endregion
//#region node_modules/react/compiler-runtime.js
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_compiler_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_compiler_runtime_development();
}));
//#endregion
export default require_compiler_runtime();

//# sourceMappingURL=react_compiler-runtime.js.map