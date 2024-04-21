import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export const NavBar = (props) => {
    let navigate = useNavigate();

    const logOut = () => {
        signOut(auth);
        props.setIsAuth(false);
        navigate("/login");
    }

    return <div>
        <Link to="/">Home</Link>
        {props.isAuth && <Link to="/createpost">Create Post</Link>}
        {!props.isAuth ? <Link to="/login">Login</Link>: <button onClick={logOut}>Log Out</button>}
    </div>
}