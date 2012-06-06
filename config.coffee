fs   = require 'fs'
path = require 'path'

exports.config = 
  # See docs at http://brunch.readthedocs.org/en/latest/config.html.

  files: 
    javascripts: 
      defaultExtension: 'js',
      joinTo: 
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/

      order: 
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery-1.7.2.js',
          'vendor/scripts/ember-latest.js',
          'vendor/scripts/bootstrap.js'
          ]
    

    stylesheets: 
      defaultExtension: 'less'
      joinTo: 'stylesheets/app.css'
      order:
        before: ['vendor/styles/bootstrap.css']
    
  

  generators:
    model: (name)->
      fs.readFileSync(path.join(__dirname, 'generators', 'model.js')).toString().replace("\#{name}", name)
    view: (name)->
      fs.readFileSync(path.join(__dirname, 'generators', 'view.js')).toString().replace("\#{name}", name)
    controller: (name)->
      fs.readFileSync(path.join(__dirname, 'generators', 'controller.js')).toString().replace("\#{name}", name)