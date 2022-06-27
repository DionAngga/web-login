// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";
 
// init express
const app = express();
 
// use express json
app.use(express.json());
 
// use cors
app.use(cors());
 
// use router
app.use(Router);

// app.use(cookieParser());


// const accessTokens = [
//   "6d7f3f6e-269c-4e1b-abf8-9a0add479511",
//   "110546ae-627f-48d4-9cf8-fd8850e0ac7f",
//   "04b90260-3cb3-4553-a1c1-ecca1f83a381"
// ];
// const firewall = (req, res, next) => {
//   const authorized = accessTokens.includes(req.accessToken);
//   if(!authorized) return res.status(403).send('Forbidden');
//   next();
// };


// // attaching to route group
// app.use('/api',
//   expressAccessToken, // attaching accessToken to request
//   firewall, // firewall middleware that handles uses req.accessToken
//   (req, res) => res.status(200).send({message: 'api route'}));


// // attaching to dedicated method, route
// app.get('/restricted-route',
//   expressAccessToken, // attaching accessToken to request
//   firewall, // firewall middleware that handles uses req.accessToken
//   (req, res) => res.send('Welcome to restricted page'));

 
const PORT = 5000
app.listen(PORT, () => console.log('Server running at http://localhost:5000'));