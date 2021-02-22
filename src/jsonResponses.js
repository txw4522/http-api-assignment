

// SENDS BACK FULL RESPONSES FOR GET REQUESTS
const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  // everything in HTTP has to be sent back as TEXT
  response.end();
  // get request gets
  // head request is getting back the information in the headers
};

// SENDS BACK HEADER RESPONSES FOR HEAD REQUESTS
const respondJSONMeta = (request, response, status) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  response.writeHead(status, headers);
  response.end();
  // you are not allowed to send back information that is not contained within the headers
  // in a head request
};

const successJSON = (request, response) => {
  const responseJSON = {
    message: 'This is a successful response',
  };
  return respondJSON(request, response, 200, responseJSON);
};

const successXML = () => {
  var xmlHTTP = new XMLHttpRequest();
  xmlHTTP.open("POST","response");
  var xml = "<?xml version'1.0'?><message>This is a successful response</message></query>";
  xmlHTTP.send(xml);
};

const badRequestJSON = (request, response) => {
  const responseJSON = {
    message: 'Missing valid query paramter set to true',
    id: "badRequest"
  };
  return respondJSON(request, response, 400, responseJSON);
};

const badRequestXML = () => {

};

const unauthorizedJSON = (request, response) => {
  const responseJSON = {
    message: 'Missing loggedIn queryParamter set to yes',
    id: 'unauthorized'
  };
  return respondJSON(request, response, 401, responseJSON);
};

const unauthorizedXML = () => {

};

const fordbiddenJSON = (request, response) => {
  const responseJSON = {
    message: 'You do not have access to this content.',
    id: 'forbidden'
  };
  return respondJSON(request, response, 403, responseJSON);
};

const forbiddenXML = () => {

};

const internalJSON = (request, response) => {
  const responseJSON = {
    message: 'Internal Server Error. Something went wrong',
    id: 'internalError'
  };
  return respondJSON(request, response, 500, responseJSON);
};

const internalXML = () => {
  
};

const notImplementedJSON = (request, response) => {
  const responseJSON = {
    message: 'A get request for this page has not been implemented yet. Check again for updated content.',
    id: 'notImplemented'
  };
  return respondJSON(request, response, 501, responseJSON);
};

const notImplementedXML = () => {

};
// SEND BACK 404
const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found!',
    id: 'notFound',
  };
  return respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => respondJSONMeta(request, response, 404);

module.exports = {
  successJSON,
  successXML,
  badRequestJSON,
  badRequestXML,
  unauthorizedJSON,
  unauthorizedXML,
  fordbiddenJSON,
  forbiddenXML,
  internalJSON,
  internalXML,
  notImplementedJSON,
  notImplementedXML,
  notFound,
  notFoundMeta,
};
