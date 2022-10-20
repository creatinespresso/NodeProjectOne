const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {
   const url = request.url;
   const method =request.method;
        if (url === '/'){ 
            //establish regular page
            response.setHeader('Content-Type', 'text/html');
            response.write('<html>');
            response.write('<head><title>Hello to my first Route</title></head>')
            response.write('<body>');
            response.write('<h1>Welcome to my Simple and ugly Page!</h1>');
            response.write('<p> If you read this, task number two has been sucssfully executed.</p>');
            response.write('<p> Please add a new User.</p>');
                // Form redirecting to create-user submit the new Username
                response.write('<form action="/create-users" method="POST">'); 
                response.write('<label for="uname">User Name:</label>');
                response.write('<input type="text" id="uname" name="message">');
                response.write('<button type="submit">Submit</button>');
                response.write('</form>');
            response.write('</body>');
            response.write('</html');
            response.end();
            //establish /users page
    }  
    // Task two
    if (url === '/users'){
            response.setHeader('Content-Type', 'text/html');
                response.write('<html>');
                response.write('<head><title>List of Users</title></head>')
                response.write('<body>');
                response.write('<h1>Thees Users are listed:</h1>');
                response.write('<p><ul><li>Admin</li><li>Max</li><li>Lena</li></ul></p>');
                response.write('</body>');
                response.write('</html');
                response.end();
                // establish /create-users page
        }
       // Action wheen Form is submitted
    if (url === '/create-users' && method === 'POST') {
            const body = [];
                //Eventlisterner on data stream
              request.on('data', (chunk) => {
              console.log(chunk);
              body.push(chunk);              
                });
           
            request.on('end', () => {
                const parsedBody = Buffer.concat(body).toString('utf-8');
                const message = parsedBody.split('=')[1];
               
                console.log(message);
                response.setHeader('Content-Type', 'text/html');
                response.write('<html>');
                response.write('<head><title>New User has been created</title></head>')
                response.write('<body>');
                response.write('<h1>This new user has been created:</h1>');
                response.write(`<p>User: ${message}</p>`);
                response.write('<br>');
                response.write(' <a href="/">Back to start</a> ');
                response.write('</body>');
                response.write('</html');
                return response.end();
            });      
        }          
     });
    
    server.listen(3000);