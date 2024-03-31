import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,updateProfile } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
    const [loginError, setLoginError] = useState(null);
    const [loginSuccess, setLoginSuccess] = useState(null);
    const [showPassword, setShowPassword] = useState(true);
    const showPasswordField = () => {
        setShowPassword(!showPassword)
    }
    const auth = getAuth(app);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const tarmsAndCondition = e.target.tarms.checked;
        setLoginError("");
        setLoginSuccess("");
        if (!tarmsAndCondition) {
            alert("please accept our tarms and conditions");
            return
        }
        // make user //
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateProfile(user, {
                    displayName: name
                })
                setLoginSuccess("Your have successfully submited");
                sendEmailVerification(user)
                .then(() => alert("Please verify your email"))
            })
            .catch(error => setLoginError("This email address already exist!"))
        e.target.password.value = '';
        e.target.email.value = '';
    }
    return (
        <div className="flex flex-col justify-center items-center my-20">
            <form onSubmit={handleSubmit} className="flex justify-center flex-col w-2/4 bg-slate-600 p-5 rounded-xl gap-5">
                <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="h-14 rounded-xl px-4"
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="h-14 rounded-xl px-4"
                />
                <input
                    type={showPassword ? "password": "text"}
                    name="password"
                    placeholder="Password"
                    className="h-14 rounded-xl px-4"
                />
                <input type="checkbox" name="tarms"/>
                <span className="bg-orange-500 p-4 rounded-xl cursor-pointer text-center" onClick={showPasswordField}>{showPassword ? "show": "hidden"}</span>
                <input type="submit" value="Sign Up" className="bg-lime-500 text-white font-bold py-2" />
            </form>
            <h1 className={`${loginError ? "text-red-700" : "text-green-500"}`}>{loginError ? loginError : loginSuccess}</h1>
            <h1 className="text-xl font-semibold my-5">Already have an acount <Link to={'/login'} className="text-blue-500">Login</Link> </h1>
        </div>
    )
}
export default SignUp;