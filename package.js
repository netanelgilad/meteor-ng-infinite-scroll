Package.describe({
  name: 'netanelgilad:ng-infinite-scroll',
  version: '1.2.0',
  // Brief, one-line summary of the package.
  summary: 'Infinite Scrolling for AngularJS',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/netanelgilad/meteor-ng-infinite-scroll',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.1');
  api.use('angularjs:angular@1.3.15', 'client');
  api.addFiles('ng-infinite-scroll.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:ng-infinite-scroll');
  api.addFiles('ng-infinite-scroll-tests.js');
});
