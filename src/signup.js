import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { createUserDocument  } from './firebase'
import { Link, useHistory } from "react-router-dom"
import { firestore } from './firebase'
import firebase from "./firebase"
// import { useFirestoreDocData } from 'reactfire'
// import { collection, query, where } from "firebase/firestore";
// import { getDatabase, ref, onValue} from "firebase/database";
// import { getAuth } from "firebase/auth";



var usersDB = firestore.collection("users")
var userID = ""
var tutorials = [];
var isTrue = true;

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const hometownRef = useRef()
    // const [hometown, setHometown] = useState("")
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    // const [username, setUsername] = useState("");
    // const [name, setName] = useState("");
    // const [business, setBusiness] = useState(false);


    async function handleSubmit(e) {

        e.preventDefault() 

        

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match bit')
          }

          
         try {
            setError('')
            setLoading(true)
            const { user } = await signup(emailRef.current.value, passwordRef.current.value)
            
            console.log(emailRef.current.value);
            
            console.log(hometownRef.current.value)  
            userID = await createUserDocument(user, hometownRef.current.value) 
            console.log(getUserID())
            // USERID CONSTANT HAS UNIQUE UID FOR FIRESTORE. 
            // TODO: now try to print out teh hometown given the uid  
            // var poo = "poo"
            history.push("/dashboard") 
        } catch {
              setError('SARANG U DUMB: Failed to create an account')
          }

          setLoading(false)
    }


    
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className = "text-center mb-4">Sign up!</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id ="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type = "email" ref = {emailRef} required />
                        </Form.Group>
                        <Form.Group id ="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type = "password" ref = {passwordRef} required />
                        </Form.Group>
                        <Form.Group id ="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type = "password-confirm" ref = {passwordConfirmRef} required />
                        </Form.Group>
                        <Form.Group id ="hometown">
                            <Form.Label>Hometown</Form.Label>
                            <Form.Control type = "hometown" ref = {hometownRef} required />
                        </Form.Group>
                        <Button disabled = {loading} className= "w-100" type="submit">Sign uppp</Button> 
                    </Form>
                </Card.Body>
            </Card>
            <div className= "w-100 text-center mt-2">
                Already have an account? Log In neck <Link to="/login">Login</Link>
            </div>
        </>
    )
}

 export function getUserID() {
    return userID;
}
export function getTutorials(userIDsa) {
    return tutorials[tutorials.length - 1];
    // if (isTrue && undefined === getHometown(userIDsa)) {
    //     // abc = getHometown(userIDsa)
    //     // console.log(abc)
    //     isTrue = false;
    //     getTutorials(userIDsa)

    // } else {
    // return tutorials[tutorials.length - 1]
    // }
}
    
 export function getHometown(userIDs) {
        var ret = "";
        console.log("lol")
        // console.log(userIDs)
        // const records = await usersDB.get()
        // console.log("after records")
        // records.then((item => {
        //     item.forEach(e => {
        //                 if (userIDs === e.id) {
        //                     console.log("inside if block")
        //                     ret = (e.get('hometown'))
        //                     // count = count + 1;
        //                     console.log("end of if " + ret)
        //                 }
        //             })
        //         })
        // )

        console.log("lol")
        console.log(userIDs)

        // try {
        // var records = await usersDB.get()
        // // await new Promise(resolve => { setTimeout(resolve, 10000); });
        // console.log("after records")
        //     records.forEach(e => {
        //                 if (userIDs === e.id) {
        //                     console.log("inside if block")
        //                     ret = (e.get('hometown'))
        //                     // count = count + 1;
        //                     console.log("end of if " + ret)
        //                 }
        //             })
        //             console.log("end of try")
                    
        //         } catch(err) {
        //             console.log("Error getting dcouments", err);
        //         }
        //             console.log("end of the method" + ret)
            
                
        


    // const snapshot = await usersDB.get();
    // console.log("shun")
    // snapshot.forEach(doc => {
    //     console.log(doc.id, '=>', doc.data())
    // })
    // await new Promise(resolve => { setTimeout(resolve, 10000); });

    
    // usersDB.get().then((item) => {
    //     item.forEach(e => {
    //         if (userIDs === e.id) {
    //             console.log("inside if block")
    //             ret = (e.get('hometown'))
    //             // count = count + 1;
    //             console.log("end of if " + ret)
    //         }
    //     })
    // })
    // console.log("end of return " + ret)
    // return ret;
    
    usersDB.get().then(function(snapshot) {
        
        snapshot.forEach(function(childSnapshot) {
            // console.log(childSnapshot)
            var id = childSnapshot.id;
            // console.log(id)
            // console.log(userIDs)
            // console.log(childSnapshot.data());
            // console.log(childSnapshot.data()['hometown']); //THIS HAS HOMETOWN
            if (userIDs === id) {
                console.log("inside if")
                tutorials.push(childSnapshot.data()['hometown'])
                // return "" + (childSnapshot.data()['hometown']);
            } 
            // var data = childSnapshot.data();

            // tutorials.push({id: id, hometown: data.hometown});
            // console.log(tutorials);
        }); 
        console.log(tutorials[tutorials.length - 1])
        // return tutorials[tutorials.length - 1]
    });


    
 }
