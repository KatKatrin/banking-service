const headersMiddleware = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, PATCH, OPTIONS, DELETE, GET');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
};

export default headersMiddleware;
