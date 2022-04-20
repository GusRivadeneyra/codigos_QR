/* eslint-disable indent */
/* eslint-disable no-undef */
const http = require('http');
const createError = require('http-errors');
const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const debug = require('debug')('codigosqr:server');
const app = express();

const { qrCodes } = require('../server/data');




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '..', 'public/')));

app.use('/api', (req, res) => {
	console.log(`Request for /api`)
	const resolve = () => {
		console.log(`...Responding for /api`)
		return res.send(qrCodes)
	}
	setTimeout(resolve, 1000)

});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});


const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);


const server = http.createServer(app);


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);



/**
 * Utils
 */

function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}


function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	debug('Listening on ' + bind);
	console.log(`Listening on ${bind}`)
}