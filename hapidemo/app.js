/**
 * Created by chaoj on 5/24/2017.
 */
'use strict'

const Hapi = require('hapi');
const routes = require('./controller/index.js');
const server  = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
server.route(routes);

