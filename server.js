const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const targetUrl = 'https://api.openai.com'; // OpenAI API endpoint
const openai_key = process.env.OPENAI_KEY
app.use('/', proxy(targetUrl, {
  proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
    // Modify the request headers if necessary
   // proxyReqOpts.headers['Authorization'] = 'Bearer '+openai_key;
    return proxyReqOpts;
  },
}));
const port = 7860;
app.listen(port, () => {
  console.log(`Reverse proxy server listening on port ${port}`);
});
