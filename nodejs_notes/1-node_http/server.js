const http = require('http');

const people = [
  { id: 1, name: 'John Doe', age: 23 },
  { id: 2, name: 'Jane Doe', age: 25 },
];
// "createServer" function accept the request and gives us a response in server side backend.
const server = http.createServer((req, res) => {
  // We can reach headers url and other parameters inside of req by destructring
  const { headers, url, method } = req;
  // We can set header some parameters by setHeader function
  // res.setHeader('Content-Type', 'application/json');
  // This header parameter is not usual but no harm to know
  // res.setHeader('X-Powered-By', 'Node.js');

  // Here if we were using express we could just send data to body as req.body.email
  let body = [];

  // In here we just added data to body by using event methods
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      // We have set our default response as 404 Not Found and response to null
      let status = 404;
      let response = {
        isSuccess: false,
        data: null,
      };
      // Only if the request has been made to correct url, response will return the people array inside of response.
      if (method === 'GET' && url === '/people') {
        status = 200;
        response.isSuccess = true;
        response.data = people;
      } else if (method === 'POST' && url === '/people') {
        // Here we parse the coming body and destructure some keys with their values and push it to our people array
        const { id, name, age } = JSON.parse(body);
        if (!id || !name || !age) {
          status = 400;
        } else {
          people.push({ id, name, age });
          // and changed status code 201 as created
          status = 201;
          response.isSuccess = true;
          response.data = people;
        }
      }
      // and as a short form we can use writeHead func
      res.writeHead(status, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js',
      });
      // We are ending our request by using end() function. if we aren't, request will hanging on continuously and there will be no response. Also if you return only one data you can return it inside of end func.
      res.end(JSON.stringify(response));
    });

  // with write() if you want to output as a html element you should set Content-Type as text/html inside of header and you can use setHeader func as above.
  // res.write('<h1>Hello</h1>');
  // res.write('<h1>Hello World</h1>');
});

const PORT = 5000;
// Listen function always listens port in our config file since we don't have config file we created PORT variable and tested how function works
server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
