
import "bootstrap/dist/css/bootstrap.min.css"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Signup from "./signup.js"
import Login from "./Login.js"
import Dashboard from "./Dashboard.js"

// // import firebase-functions from ""

// // The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
// const functions = require('firebase-functions');

// // The Firebase Admin SDK to access Firestore.
// const admin = require('firebase-admin');
// admin.initializeApp();

// // query the firestore
// // firestore in collection user in the documentid 
// // Take the text parameter passed to this HTTP endpoint and insert it into 
// // Firestore under the path /messages/:documentId/original
// exports.addMessage = functions.https.onRequest(async (req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push the new message into Firestore using the Firebase Admin SDK.
//   const writeResult = await admin.firestore().collection('messages').add({original: original});
//   // Send back a message that we've successfully written the message
//   res.json({result: `Message with ID: ${writeResult.id} added.`});
// });

const Routing = () => {
  return(
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="./signup" component={Signup} />
        <Route exact path="./Login" component={Login} />
        <Route exact path="./Dashboard" component={Dashboard} />
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
