const http = require('http');

// "createServer" function accept the request and gives us a response in server side backend.
const server = http.createServer((req, res) => {
  // We can reach headers url and other parameters inside of req by destructring
  const { headers, url, method } = req;
  console.log(headers, url, method);
  // We are ending our request by using end() function. if we aren't, request will hanging on continuously and there will be no response.
  res.end();
});

const PORT = 5000;
// Listen function always listens port in our config file since we don't have config file we created PORT variable and tested how function works
server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
