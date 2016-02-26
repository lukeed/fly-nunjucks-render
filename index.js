'use strict';

var fs = require('fs');
var path = require('path');
var nunjucks = require('nunjucks');
var assign = require('object-assign');

var defaults = {
	base: '.',
	data: {},
	dataPath: null
};

module.exports = function () {
	var self = this;

	self.filter('nunjucks', function (source, options) {
		options = assign({}, defaults, options || {});
		return self.defer(compile.bind(self))(source, options);
	});
};

function compile(src, opts, cb) {
	var self = this;

	// setup env
	nunjucks.configure(opts.base, opts);

	// check for a dataPath first, else resort to `options.data`
	var data = opts.dataPath ? getData(self.root, opts.dataPath) : opts.data;

	// render single file
	return nunjucks.renderString(src.toString(), data, function (err, buf) {
		if (err) {
			return self.emit('plugin_error', {
				plugin: 'fly-nunjucks-render',
				error: err.message
			});
		}
		cb(null, buf.toString());
	});
}

function getData(dir, file) {
	file = path.resolve(dir, file);
	return JSON.parse(fs.readFileSync(file, 'utf8'));
}
