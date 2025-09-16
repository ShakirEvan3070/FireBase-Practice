import { GoogleAuthProvider} from "firebase/auth";
import { signInWithPopup,signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import { useState } from "react";
const Login = () => {
    const[user,setUser]= useState(null);
    const provider = new GoogleAuthProvider();


    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch((error)=>{
            console.log('error',error);
            setUser(null);
        })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{ 
            console.log("Sign Out Done");
            setUser(null);
        })
        .catch((error)=>{
            console.log('error',error);
        })
    }
    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Login With Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user? 
                <button onClick={handleSignOut}>Sign Out</button>:
                 <button onClick={handleGoogleSignIn}>Login With Google</button>

            }
            {
                user && <div>
                    <h3>Name: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;