const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("/database/database.json"); // Đảm bảo `db.json` có trong thư mục
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
