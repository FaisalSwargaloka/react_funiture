import { Link, NavLink } from "react-router-dom";
import "../components/navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { useEffect } from "react";
import { BsCart2 } from 'react-icons/bs';
import React from 'react';
import { Dropdown, Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useCart } from "./CartContext";


const NavigationBar = ({ isLoggedIn, handleLogout }) => {

    const { cartItems } = useCart();


    const totalItemsInCart = Array.isArray(cartItems)
        ? cartItems.reduce((total, item) => total + item.quantity, 0)
        : 0;

    useEffect(() => {

    }, [isLoggedIn])

    return (
        <>
            <Navbar expand="lg" fixed="top" >
                <Container fluid>
                    <Navbar.Brand href="/">BCOM FUNITURE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto mx-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className="NavLink" activeclassname="active" to="/">HOME</NavLink>
                            <NavLink className="NavLink" activeclassname="active" to="/product">PRODUCT</NavLink>
                            <NavLink className="NavLink" activeclassname="active" to="/about">ABOUT</NavLink>
                            <NavLink className="NavLink" activeclassname="active" to="/contact">CONTACT</NavLink>
                            <NavLink className="NavLink" activeclassname="active" to="/cart">
                                <BsCart2 size={22} />
                                <span className="span-cart">{totalItemsInCart}</span>
                            </NavLink>
                        </Nav>
                        {
                            isLoggedIn ? (
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="user-dropdown" className=" mt-4 mb-4 mx-4 bg-transparent border-0">
                                        <FaUserCircle size={30} color="black" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as="div">
                                            <Link className="link-profile" to="/dashboard">Profile</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ) : (
                                <Link to="/login">
                                    <Button className="btn-login-nav">Login</Button>
                                </Link>
                            )
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
