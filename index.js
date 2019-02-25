const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const { optionsCors } = require('./config/cors');
const routes = require('./routes/index');

const dev = process.env.NODE_ENV !== 'production';

const app = express();

if (!dev) {
   /* Helmet helps secure our app by setting various HTTP headers */
   app.use(helmet());
   /* Compression gives us gzip compression */
   app.use(compression());
}

if (dev) {
   // Logger middleware
   app.use(morgan('tiny'));
}

// cors helps for our app headers normalize
app.use(cors(optionsCors));

// express middleware for json body parser
app.use(express.json());

app.use(express.static('static'));

app.use('/', routes);

app.use((err, req, res, next) => {
   const { status = 500, message } = err;
   res.status(status).json({
      error: {
         message,
         unControl: true,
      },
      success: null,
   });
});

app.listen(3001, () => console.log('App is listening on port 3001'));
