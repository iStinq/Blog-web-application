import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase-config";
import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";

export const Home = (props) => {
    const [postList, setPostList] = useState([]);
    const [user] = useAuthState(auth);
    const postsCollectionRef = collection(db, "posts");


    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        setPostList(postList.filter((post) => post.id !== id));
    }

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id : doc.id})));
        }
        getPosts();
    }, [deletePost])

    return <div>
        The user logged in is : {user?.displayName}
        <div>
            {postList.map((post) => {
                return (
                <div>
                    <div><h1>{post.title}</h1></div>
                    <div>{post.postText}</div>
                    <div><h3>@{post.author.name}</h3></div>
                    {props.isAuth && post.author.id === user.uid && (<button onClick={() => deletePost(post.id)}>X</button>)}
                </div>
                )
            })}
        </div>
    </div>
}