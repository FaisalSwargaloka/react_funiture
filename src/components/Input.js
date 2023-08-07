import { useState } from "react";
import "./input.css"
import { BsArrowReturnRight } from "react-icons/bs"
import React from 'react';
import { motion } from "framer-motion";
import DOMPurify from "dompurify";

const Input = () => {
    const [formData, setFormData] = useState({
        fulname: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const sanitazedValue = DOMPurify.sanitize(value)
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: sanitazedValue,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullname: '',
            email: '',
            message: '',
        });
    };

    return (
        <>
            <motion.div className="container-form"
                animate={{ x: -10 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="btn-input" type="submit">Submit Request <BsArrowReturnRight /></button>
                </form>
            </motion.div>
        </>
    );
}

export default Input;