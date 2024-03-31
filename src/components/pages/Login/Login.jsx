import { getAuth,signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Login = () => {
    const emailRef = useRef(null);
    const auth = getAuth(app);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // make user //
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(e.message))
        e.target.password.value = '';
        e.target.email.value = '';
    }


    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert("Please provide an valid email")
            return
        }
        sendPasswordResetEmail(auth, email)
            .then(result => console.log(result))
            .catch(error => console.log(error.message))
    }
    return (
        <div className="flex flex-col justify-center items-center my-20">
            <form onSubmit={handleSubmit} className="flex justify-center flex-col w-2/4 bg-slate-600 p-5 rounded-xl gap-5">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="h-14 rounded-xl px-4"
                    ref={emailRef}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="h-14 rounded-xl px-4"
                />
                <a href="#" onClick={handleForgetPassword} className="text-blue-500 underline">Forget Password</a>
                <input type="submit" value="Submit" className="bg-lime-500 text-white font-bold py-2" />
            </form>
            <h1 className="my-5 text-xl font-bold">New User <Link to={'/signup'} className="text-blue-500">Regester</Link></h1>
        </div>
    )
}
export default Login;