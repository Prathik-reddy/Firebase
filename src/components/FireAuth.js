import React,{useState,useEffect} from 'react'
import {auth} from "../firebase";

const FireAuth = () => {
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [user, setuser] = useState("");

    let create = async ()=> {
        let res = await auth.createUserWithEmailAndPassword(email,pass);
        console.log(res);
    }

    useEffect(() => {
        let unsub = auth.onAuthStateChanged((user) =>
        setuser(user))
        return ()=> {
            unsub();
        }
    }, [])
    let logout = async()=> {
        await auth.signOut();
    }
    let signIn = async()=> {
        await auth.signInWithEmailAndPassword(email,pass);
    }
    return (
        <>
        {
            user==null?
            <div>
                <label htmlFor="email">Email : </label>
                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <label htmlFor="pass">Password : </label>
                <input type="password" value = {pass} onChange={(e)=>setpass(e.target.value)}/>
                <button onClick={signIn}>SignIn</button>
            </div>:
            <>
            <div>
                <p>{user.email}:{user.uid}</p>
                <button onClick = {logout}>Logout</button>
            </div>
            </>
        }
        </>
    )
}

export default FireAuth
