'use strict';

const resolve = require('path').resolve;
const nunjucks = require('nunjucks');

module.exports = function () {
	this.plugin('nunjucks', {}, function * (file, opts) {
		opts = Object.assign({base: '.', data: {}, dataPath: ''}, opts);

		// configure base directory
		nunjucks.configure(opts.base, opts);

		let ctx;
		// check for a dataPath first, else resort to `options.data`
		if (opts.dataPath) {
			const str = yield this.$.read(resolve(this.root, opts.dataPath), 'utf8');
			ctx = JSON.parse(str);
		} else {
			ctx = opts.data;
		}

		try {
			file.data = nunjucks.renderString(file.data.toString(), ctx);
		} catch (err) {
			return this.emit('plugin_error', {
				plugin: 'fly-nunjucks-render',
				error: err.message
			});
		}
	});
};
