const http = require('http');
const url = require('url');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  GET: {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCSS,
    '/success': jsonHandler.successJSON,
    '/badRequest': jsonHandler.badRequestJSON,
    '/unauthorized': jsonHandler.unauthorizedJSON,
    '/forbidden': jsonHandler.fordbiddenJSON,
    '/internal': jsonHandler.internalJSON,
    '/notImplemented': jsonHandler.notImplementedJSON,
    notFound: jsonHandler.notFound,
  },
  HEAD: {
    '/success': jsonHandler.successXML,
    '/badRequest': jsonHandler.badRequestXML,
    '/unauthorized': jsonHandler.unauthorizedXML,
    '/forbidden': jsonHandler.fordbiddenXML,
    '/internal': jsonHandler.internalXML,
    '/notImplemented': jsonHandler.notImplementedXML,
    notFound: jsonHandler.notFoundMeta,
  },
};
const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  console.dir(parsedUrl.pathname);
  console.dir(request.method);

  // very rudamentary
  if (urlStruct[request.method][parsedUrl.pathname]) {
    urlStruct[request.method][parsedUrl.pathname](request, response);
  } else {
    urlStruct[request.method].notFound(request, response);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
