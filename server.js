import express from "express";

const port = 3000;
const server = express();
server.use(express.json());

server.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
