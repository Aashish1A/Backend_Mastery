const http =require("http");

// Create web server
const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.setHeader("Content_Type", "text/html");
        res.write("<h1>Welcome to Home Page. I am Aashish Kumar creator of this page.<h1/>");
        res.end();
    }

    if(req.url === "/source-code"){
        res.setHeader("Content_Type", "text/plain");
        res.write("Source code is available just for 249. You can check it out. The source code help all the developers.");
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🔥 Listening on PORT ${PORT}`);
})