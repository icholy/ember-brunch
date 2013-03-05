sysPath = require 'path'

# See docs at http://brunch.readthedocs.org/en/latest/config.html.

exports.config = 

  files: 
    
    javascripts: 
      defaultExtension: 'js',
      joinTo: 
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
        'test/javascripts/test.js': /^test[\\/](?!vendor)/
        'test/javascripts/test-vendor.js': /^test[\\/](?=vendor)/
        'test/javascripts/test-vendor-sinon.js': /^test[\\/](?=vendor)/

      order: 
        # Files in `vendor` directories are compiled before other files
        # even if they aren't specified in order.before.
        before: [
          'vendor/scripts/console-helper.js'
          'vendor/scripts/jquery-1.9.0.min.js'
          'vendor/scripts/handlebars-1.0.rc.2.js'
          'vendor/scripts/ember-latest.js'
          'vendor/scripts/ember-data-latest.js'
          ]
        after: [
          'test/vendor/scripts/test-helper.js'
        ]

    stylesheets:
      defaultExtension: 'css'
      joinTo: 
        'stylesheets/app.css': /^(app|vendor)/
        'test/stylesheets/test.css': /^test/

    templates:
      precompile: true
      root: 'templates'
      defaultExtension: 'hbs'
      joinTo: 'javascripts/app.js' : /^app/

  modules:
    addSourceURLs: true

  # allow _ prefixed templates so partials work
  conventions:
    ignored: (path) ->
      startsWith = (string, substring) ->
        string.indexOf(substring, 0) is 0
      sep = sysPath.sep
      if path.indexOf("app#{sep}templates#{sep}") is 0
        false
      else
        startsWith sysPath.basename(path), '_'

  server:
    port: 3333
    base: '/'
    run: no

