Package.describe({
  name: 'xwilders:c3js',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'C3.js Charts for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/xwilders/meteor-c3js.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('d3js:d3@3.4.13', 'client');

  api.add_files('c3/c3.js', 'client');
  api.add_files('c3/c3.css', 'client');
});
