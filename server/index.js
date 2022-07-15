import { createServer } from 'http'
import createError from 'http-errors'
import express, { json, urlencoded} from 'express'
import cookieParser from 'cookie-parser'
import Debug from 'debug'
import cors from 'cors'
import qrcode from 'qrcode'
import fs from 'fs'
import path from 'path'

const DEFAULT_PORT = '4000'
const app = express('require');
const debug = Debug('codigosqr:server')
app.use(cors())

const dataFile = path.resolve(path.resolve(), 'data.json');
const qrCodesJson = fs.readFileSync(dataFile, { encoding: "utf-8" });
let qrCodes = JSON.parse(qrCodesJson);

app.use((req, res, next) => {
  console.log('hola cerbero');
  console.log(req.url)
  return next();
})

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '..', 'public/')));

app.get('/api/codes', (req, res) => {
  console.log(`Request for /api`)
  const resolve = () => {
    console.log(`...Responding for /api`)
    return res.send(qrCodes)
  }
  setTimeout(resolve, 1000)

});

// trying
app.post('/api/create/newqr', async function(req, res){
  const { title, description, url } = req.body;

  if(!title) {
    res.status(400);
    return res.send(new Error('Title not received'));
  } else if (!description) {
    res.status(400);
    return res.send(new Error('description not received'));
  } else if (!url)
    return res.send(new Error('url not received'));
  

  let maxId = 1;
  for (const qr of qrCodes) {
    if (qr.id >= maxId) {
      maxId = qr.id + 1;
    }
  }

  qrCodes.push({
    id: maxId, 
    title,
    description,
    codeValue: url
  })

  fs.writeFileSync(dataFile, JSON.stringify(qrCodes));

  const imgData = await qrcode.toDataURL(url);
  res.send(({ imgData })); 
})

app.post('/api/create', (req, res) => {
  console.log(req.body)
  return res.send('puto')
})

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

// eslint-disable-next-line no-undef
const port = normalizePort(process.env.PORT || DEFAULT_PORT);
app.set('port', port);

const server = createServer(app);

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

