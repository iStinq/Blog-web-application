import { useState } from "react";
import { db, auth } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
    const [user] = useAuthState(auth);
    const [title, setTitle] = useState();
    const [postText, setPostText] = useState();
    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {title, postText, author : {name : user?.displayName, id : user?.uid}});
        navigate("/");
    }

    return <div>
        <div className="container">
            <h1>Create a post</h1>
            <div className="inputGp">
                <label>Title:</label>
                <input type="text" placeholder="Title..." onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <br />
            <div className="inputGp">
                <textarea cols="30" rows="10" placeholder="Post..." onChange={(event) => setPostText(event.target.value)}></textarea>
            </div>
            <button onClick={createPost}>Submit your post</button>
        </div>
    </div>
}