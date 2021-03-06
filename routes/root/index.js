const routes = require('express').Router();
const debug = require('../../debugger');
const route_debugger = new debug('Root/Misc Route'.green);

route_debugger.log('Loading \'root/misc\' API routes');

/**
 * [POST]
 * Replacement for: nothing, it's used by maryo
 * Description: tests the validity of this server by returning a predefined message
 */
routes.get('/isthisworking', async (req, res) => {
	return res.send('{"server": "account.nintendo.net"}');
});

module.exports = routes;
