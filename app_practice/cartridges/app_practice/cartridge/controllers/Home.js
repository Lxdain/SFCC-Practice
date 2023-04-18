'use strict'

const server = require('server');

server.extend(module.superModule);

server.append('Show', function(req, res, next) {
    res.setViewData({ test: 'danilo ovde' });
    next();
});

module.exports = server.exports();