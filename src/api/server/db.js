const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const usersData = require('../users.json');
const usersLoginData = require('../usersLoginDetails.json');

server.use(middlewares);
server.use({ users: usersData, usersLoginDetails: usersLoginData });
server.listen(8002, function () {
	console.log('JSON Server is running');
});
