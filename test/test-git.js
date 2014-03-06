/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator git', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('yeogurt:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files and folders you expect to exist here.
            '.gitignore'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            cssOption: 'SCSS',
            ieSupport: true,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            useDashboard: true,
            extras: ['htaccess', 'useBootstrap', 'useFontAwesome', 'ieIcons', 'adobeXdomain', 'appleIcon']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
