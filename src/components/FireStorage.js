import React,{useState} from 'react'
import {storage} from "../firebase"
const FireStorage = () => {
    const [file, setFile] = useState("");

    const Upload = () => {
        const uploadTask = storage.ref(`/data/${file.name}`).put(file);
        uploadTask.on('state_changed',fn1,fn2,fn3);

        function fn1(snapshot) {
            let progress =(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(`Upload is ${progress} done.`);
        }
        function fn2(error) {
            console.log('error',error);
        }
        function fn3() {
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url);
            })
        }
    }
    return (
        <>
            <div>
                <label htmlFor="label">File</label>
                <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
                <button onClick={Upload}> Upload</button>
            </div>
        </>
    )
}

export default FireStorage
