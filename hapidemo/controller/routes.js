/**
 * Created by chaoj on 5/24/2017.
 */


module.exports = [{
    method: 'GET',
    path:"/hello",
    handler: function (request, reply) {

        return reply('hello world');

    }
},
    {
        method: 'GET',
        path: '/hello/test/{user?}',
        handler: function (request, reply) {
            const user = request.params.user ? encodeURIComponent(request.params.user) : 'stranger';
            reply('Hello ' + user + '!');
        }
    }];