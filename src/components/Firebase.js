import React,{useState,useEffect} from 'react'
import { database } from '../firebase';
const Firebase = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");

    let createUser = async() => {
        let res = await database.users.add({
            name,age
        });
        // let res = await database.users.doc('11111').set({name,age})//creates a specified id
        console.log(res);
    }
    useEffect(async() => {
        let uid = "U0oHmojteyz23C722ukO";
        // let data = await database.users.doc(uid).get(); // for specific document data
        // console.log(data.data());
        // let data = await database.users.orderBy('createdAt','desc').get(); // for sorted data
        let data = await database.users.get();// for all data
        data.forEach((obj)=>console.log(obj.data()))
    }, [])

    let updateUser = async() => {
        await database.users.doc("U0oHmojteyz23C722ukO").update({name,age});
    }
    let deleteUser = async() => {
        let uid = "XnWRtgVR3FXzyrGWIOcN";
        await database.users.doc(uid).delete();
    }
    return (
        <div>
            <label htmlFor="name">Name : </label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="age">Age : </label>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <button onClick={createUser}>Create</button>
            <button onClick={updateUser}>Update</button>
            <button onClick={deleteUser}>Delete</button>
        </div>
    )
}

export default Firebase
