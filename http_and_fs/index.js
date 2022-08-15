//  http Module - Routing and Serve a Page
import http from "http";
import fs from "fs";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, "OK", { "Content-Type": "text/html" });
// res.end("<h1>Home Page</h1>");
// if (req.url === '/') {
//  res.end("<h1>Home Page</h1>");
// }
// else if (req.url === '/about') {
//  res.end("<h1>About Page</h1>");
// } else {
//  res.end("<h1>404 Page Not Found!!</h1>");
// }

//   if (req.url === "/") {
//     fs.readFile("./public/home.html", (error, data) => {
//       if (error) throw error;
//       res.end(data);
//     });
//   } else if (req.url === "/about") {
//     fs.readFile("./public/about.html", (error, data) => {
//       if (error) throw error;
//       res.end(data);
//     });
//   } else {
//     res.end("<h1>404 Page Not Found!!</h1>");
//   }
// });

// const PORT = process.env.PORT || 3000;
// const HOST = "localhost";

// server.listen(PORT, HOST, () => {
//   console.log("Server Running at http://localhost:8000");
// });

// const server = http.createServer((req, res) => {
//   if (req.url === "/about") {
//     fs.readFile("./public/about.html", "utf-8", (error, data) => {
//       if (error) throw error;
//       res.end(data);
//     });
//   } else if (req.url === "/contact") {
//     fs.readFile("./public/contact.html", "utf-8", (error, data) => {
//       if (error) throw error;
//       res.end(data);
//     });
//   } else
//     fs.readFile("./public/home.html", "utf-8", (error, data) => {
//       if (error) throw error;
//       res.end(data);
//     });
// });
// const PORT = process.env.PORT || 3000;
// const HOST = process.env.HOST || "localhost";
// server.listen(PORT, HOST, () => {
//   console.log("Server Running at http://localhost:3000");
// });
