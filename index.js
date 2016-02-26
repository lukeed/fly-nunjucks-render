'use strict';

var fs = require('fs');
var path = require('path');
var nunjucks = require('nunjucks');
var assign = require('object-assign');

var defaults = {
  data: {},
  dataPath: null,
  watch: false
};

module.exports = function () {
  var self = this;
  self.filter('nunjucks', function (source, options) {
    options = assign({}, defaults, options || {});
    return self.defer(compile.bind(self))(options);
  });
};

function compile(options, cb) {
  var self = this;

  var env = nunjucks.configure(options);

  // check for a dataPath first, else resort to `options.data`
  var data = options.dataPath ? getData(options.dataPath) : options.data;

  return self.unwrap(function (files) {
    env.render(files, data, function (err, buf) {
      if (err) {
        return self.emit('plugin_error', {
          plugin: 'fly-nunjucks',
          error: err.message
        });
      }
      cb(null, buf.toString());
    });
  })
}
