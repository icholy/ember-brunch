express = require 'express'

exports.startServer = (port, path, callback = (->)) ->

    server = express.createServer()

    server.configure ->
        server.use express.static path
        server.set 'views', path
        server.set 'view options', layout: no
        server.register '.html', compile: (str, options) -> 
            (locals) -> str

    server.get '/', (req, res) ->
        res.render 'index.html'

    server.listen parseInt port, 10
    server.on 'listening', callback
