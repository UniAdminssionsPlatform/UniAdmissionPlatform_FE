const { createProxyMiddleware } = require('http-proxy-middleware');
import * as helmet from 'helmet';

const { REACT_APP_API_URL } = process.env;
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `${REACT_APP_API_URL}`,
      changeOrigin: true
    })
  );
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", 'data:', 'blob:'],
        fontSrc: ["'self'", 'https:', 'data:'],
        scriptSrcElem: ["'self'", 'https:', 'https://*.cloudflare.com'],
        styleSrc: ["'self'", 'https:', 'unsafe-inline'],
        connectSrc: ["'self'", 'data', 'https://*.cloudflare.com']
      }
    })
  );
  app.use(helmet.contentSecurityPolicy());
  app.use(helmet.crossOriginEmbedderPolicy());
  app.use(helmet.crossOriginOpenerPolicy());
  app.use(helmet.crossOriginResourcePolicy());
  app.use(helmet.dnsPrefetchControl());
  app.use(helmet.expectCt());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.originAgentCluster());
  app.use(helmet.permittedCrossDomainPolicies());
  app.use(helmet.referrerPolicy());
  app.use(helmet.xssFilter());
};
