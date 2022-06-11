const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port, "0.0.0.0", (err) => {
  if (err) console.log("Error in server setup");
  console.log(`App listening on port ${port}`);
});
