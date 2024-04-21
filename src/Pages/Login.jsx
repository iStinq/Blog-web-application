import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const Login = (props) => {
    let navigate = useNavigate();
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
        props.setIsAuth(true);
        navigate("/");
    }

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign In with Google Account</button>
        </div>
    )
}