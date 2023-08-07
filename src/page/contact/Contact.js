import "./contact.css"
import bgContact from "../../asset/contact/image-contact.jpg"
import Input from "../../components/Input";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import React from 'react';
import { motion } from "framer-motion";


const Contact = () => {

    const containerMotion = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemMotion = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        }
    }
    return (
        <>
            <div className="container-contact">
                <section className="section-left">
                    <img className="image-contact" src={bgContact} alt="" />
                </section>
                <motion.section className="section-right"
                    variants={containerMotion}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="text-contact-heading" variants={itemMotion}>
                        <h1>Contact</h1>
                        <p>Selamat datang di halaman kontak Bcom Funiture! Kami senang mendengar dari Anda dan siap membantu dengan pertanyaan, masukan, atau bantuan apa pun yang Anda butuhkan. Silakan pilih salah satu cara di bawah ini untuk menghubungi tim kami:
                        </p>
                    </motion.div>
                    <div className="contact">
                        <motion.div className="text-aboutContact" variants={itemMotion}>
                            <h1>Tentang Contact</h1>
                            <ul>
                                <li>Senin-Jumat: 08:00 - 20:00 WIB</li>
                                <li>Sabtu-Minggu: 09:00 - 17:00 WIB</li>
                                <li className="data">xxx@gmail.com</li>
                                <li className="data">0000-0000-0000</li>
                                <li className="data">1111-1111-1111</li>
                            </ul>
                            <div className="sosmed">
                                <div className="icon-sosmed"><BsGithub size={36} /></div>
                                <div className="icon-sosmed"><BsInstagram size={36} /></div>
                                <div className="icon-sosmed"><BsTwitter size={36} /></div>
                            </div>
                        </motion.div>
                        <div className="contact-form">
                            <h1>Contact Form</h1>
                            <Input />
                        </div>
                    </div>
                </motion.section>
            </div>
        </>
    );
}

export default Contact;