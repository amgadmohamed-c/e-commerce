 module.exports = {
     async logger(req, res, next) {
         console.log(`request started at ${new Date().toLocaleString()}`);
         console.log(`Request IP: ${req.ip}`);
         console.log(`Request URL: ${req.originalUrl}`);
         console.log(`Request Method: ${req.method}`);
         console.log(`Request Headers: ${JSON.stringify(req.headers)}`);
         console.log("/////////////////////////////////////") ;
         next();
     }
 }
