// Create web server
// Create a web server that listens on port 3000 and serves the following pages:

// Home page: When a user visits http://localhost:3000/, it should display a welcome message in <h1> tag.
// Comments page: When a user visits http://localhost:3000/comments, it should display the following message in <h1> tag: Comments page
// Profile page: When a user visits http://localhost:3000/profile, it should display the following message in <h1> tag: Profile page
// Any other page: When a user visits any other page, it should display the following message in <h1> tag: Page not found
// Note: You can use the http module to create a web server.

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (pathName === '/') {
        res.write('<h1>Welcome to home page</h1>');
        res.end();
    } else if (pathName === '/comments') {
        res.write('<h1>Comments page</h1>');
        res.end();
    } else if (pathName === '/profile') {
        res.write('<h1>Profile page</h1>');
        res.end();
    } else {
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running at port 3000');
});
// Output
// When you run the above code, you will see the following output:

// Server is running at port 3000
// Now open http://localhost:3000/ in your browser, you will see the following output:

// Welcome to home page
// Open http://localhost:3000/comments in your browser, you will see the following output:

// Comments page
// Open http://localhost:3000/profile in your browser, you will see the following output:

// Profile page
// Open http://localhost:3000/anyotherpage in your browser, you will see the following output:

// Page not found
// Explanation: In the above code, we create a web server that listens on port 3000. We use the http
