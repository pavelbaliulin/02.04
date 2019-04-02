// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const USERS = [];
// // const mass = require("massage")
// app.use(express.static("./public"));
// app.use(bodyParser.urlencoded({}));
// app.use(bodyParser.json());

// app.get("/join", (req, res) => {
//     const nameNewUser = req.query.name;
//     const user = USERS.find(({ name }) => name === nameNewUser);
// const newuser1 = prompt('user Name = ', 1000);
//     if (!nameNewUser || user) {
//         res.status(401);
//         res.send(`Name: "${nameNewUser}"alredy exist`);
//     } else {
//         USERS.push({
//             name: nameNewUser,
//             connect: null
//         });

//         res.send("Connected");
//     }
// });

// app.get("/connect", (req, res) => {
//     const nameNewUser = req.query.name;
//     const user = USERS.find(({ name }) => name === nameNewUser);
//     if (user) {
//         user.connect = res;
//     } else {
//         res.status(404);
//         res.send("User not found");
//     }
// });

// app.post("/message", (req, res) => {
//     const nameNewUser = req.query.name;
//     const body = req.body.message;
//     const user = USERS.find(({ name }) => name === nameNewUser);
//     if (body && user) {
//         USERS.forEach(user => {
//             if (user.connect) {
//                 user.connect.send(
//                     JSON.stringify({
//                         body: body,
//                         autor: user.name
//                     })
//                 );
//                 user.connect = null;
//             }
//         });
//         res.send("");
//     } else {
//         res.status(500);
//         res.send("Error");
//     }
// });

// app.get("/diagnostic", (req, res) => {
//     res.send("ok");
// });
// app.listen(3000, () => {
//     console.log("app run on port:3000");
// });

// setTimeout("/",(req) => {
//     console.log(mass)

//     res.send
// }, 1000);

// app.get("*", (req, res, next) => {
//     console.log(req);
//     res.sendFile(`${__dirname}/public/index.html`);
// });
//             const get = up1;
// const post = up2;

// function up {
//     if (app.get("/1") {

//             console.log(up1);
//         }
//         if (app.post("/2") {
//                 console.log("/2")
//                 return (app);
//         }
// }
//             };
// app.get("/1", (req, res, next) => {
//     console.log(req.path);
//     next();
// });