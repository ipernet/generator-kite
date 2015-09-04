'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
	init: function () {
		var cb = this.async();

		this.sourceRoot(path.join(__dirname, 'templates', 'dist'));

        this.directory('css');
        this.directory('img');
        this.directory('js');

        this.expandFiles('*', {
            cwd: this.sourceRoot(),
            dot: true
        }).forEach(function (el) {
            this.copy(el);
        }, this);

        cb();
	}
});
