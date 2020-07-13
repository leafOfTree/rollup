define(['require', 'https://unpkg.com/foo'], function (require, foo) { 'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex : { 'default': ex }; }

	var foo__default = _interopDefault(foo);

	function _interopNamespace(e) {
		if (e && e.__esModule) { return e; } else {
			var n = {};
			if (e) {
				Object.keys(e).forEach(function (k) {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				});
			}
			n['default'] = e;
			return n;
		}
	}

	assert.equal(foo__default['default'], 42);

	new Promise(function (resolve, reject) { require(['https://unpkg.com/foo'], function (m) { resolve(_interopNamespace(m)); }, reject) }).then(({ default: foo }) => assert.equal(foo, 42));

});
