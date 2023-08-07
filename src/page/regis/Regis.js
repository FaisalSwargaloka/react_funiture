import "./regis.css"
import React from 'react';
import { FcGoogle } from "react-icons/fc"
import firebase from '../../fireBase/FireBase';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import DOMPurify from "dompurify";


const Regis = ({ handleLogin }) => {

    const navigate = useNavigate()

    const signInWithGooglePopup = () => {
        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider)
            .then((result) => {
                localStorage.setItem('user', JSON.stringify(result.user))
                navigate("/dashboard")
                handleLogin(result.user)
            })
            .catch(() => {
            });
    };

    const handlerGoogleRegister = (e) => {
        e.preventDefault()
        const email = DOMPurify.sanitize(e.target.email.value)
        const password = DOMPurify.sanitize(e.target.password.value)
        const currentPassword = DOMPurify.sanitize(e.target.currentPassword.value)

        if (!email || !password || !currentPassword) {
            return alert("silahkan lengkapi data")
        }
        if (password !== currentPassword) {
            return alert("password tidak cocok")
        }
        if (password.length < 6) {
            return alert("password tidak boleh kurang dari 6 karakter!")
        }

        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                localStorage.setItem('user', JSON.stringify(result.user))
                navigate("/dashboard")
                handleLogin(result.user)
            })
            .catch(() => {
                console.log("errorr")
            })
    }


    return (
        <div className="regis-bg">
            <motion.div className="container-regis"
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <div className="text-regis">
                    <h1>Selamat Datang di Bcom Funiture</h1>
                    <p>Register to create your first account and start Shoping</p>
                </div>
                <form className="form-regis" onSubmit={handlerGoogleRegister}>
                    <section className="section-regis">
                        <label className="label-regis" htmlFor="Email">Email</label>
                        <input className="input-regis" type="email" id="email" />
                    </section>

                    <section className="section-regis">
                        <label className="label-regis" htmlFor="Password">Password</label>
                        <input className="input-regis" type="password" id="password" />
                    </section>

                    <section className="section-regis">
                        <label className="label-regis" htmlFor="currentPassword">Cureent Password</label>
                        <input className="input-regis" type="Password" id="currentPassword" />
                    </section>

                    <section className="section-regis">
                        <button className="btn-regis-account" type="submit">Create</button>
                    </section>

                    <div className="text-down-2">
                        <h5>-- Or Sign In With --</h5>
                        <div className="google-regis">
                            <button
                                className="btn-goggle-2"
                                type="button"
                                onAbort={signInWithGooglePopup}
                            ><span><FcGoogle size={27} /></span> Google</button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

export default Regis;