const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.get("/ping", (req, res) => res.send("pong"));

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.use(router);

server.listen(port, "0.0.0.0", (err) => {
  if (err) console.log("Error in server setup");
  console.log(`App listening on port ${port}`);
});
