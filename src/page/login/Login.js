import "./login.css"
import React from 'react';
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom"
import firebase from "../../fireBase/FireBase"
import { motion } from "framer-motion";
import DOMPurify from "dompurify";

const Login = ({ handleLogin }) => {

    const navigate = useNavigate()

    const signInWithGooglePopup = () => {
        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider)
            .then((result) => {
                localStorage.setItem('user', JSON.stringify(result.user))
                handleLogin(result.user)
                navigate("/dashboard")
            })
            .catch(() => {
                console.log('Failed to log in with Google:');
            });
    };

    const handlerSignWithEmailPassword = (e) => {
        e.preventDefault()
        const email = DOMPurify.sanitize(e.target.email.value)
        const password = DOMPurify.sanitize(e.target.password.value)

        const auth = firebase.auth()
        auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                localStorage.setItem('user', JSON.stringify(result.user))
                handleLogin(result.user)
                navigate("/dashboard")
            })
            .catch(() => {
                alert("Password yang ada masukkan salah")
            })
    }

    return (
        <div className="login-bg">
            <motion.div className="container-login"
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <div className="text-login">
                    <h1>Welcone In Bcom Funiture</h1>
                    <p>Login now and start shoping</p>
                </div>
                <form className="form-login" onSubmit={handlerSignWithEmailPassword}>
                    <section className="section-login">
                        <label className="label-login" htmlFor="Email">Email</label>
                        <input className="input-login" type="email" id="email" />
                    </section>

                    <section className="section-login">
                        <label className="label-login" htmlFor="Password">Password</label>
                        <input className="input-login" type="password" id="password" />
                    </section>

                    <section className="section-login">
                        <button className="btn-login-account" type="submit">Sign In</button>
                    </section>

                    <div className="text-down">
                        <h5>-- Or Sign In With --</h5>
                        <div className="google-login">
                            <button
                                className="btn-goggle"
                                type="button"
                                onClick={signInWithGooglePopup}
                            ><span><FcGoogle size={27} /></span> Google</button>
                        </div>
                        <div className="regis-now">Dont have account? <Link to="/signup">Regis now</Link></div>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

export default Login;