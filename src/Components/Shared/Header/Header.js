import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Navbar className='header-bg py-4' expand="lg">


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='text-decoration-none header-link'
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Skin Care
                        </NavLink>
                        <NavLink className='text-decoration-none ms-4 header-link'
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Body & Hand
                        </NavLink>
                        <NavLink className='text-decoration-none ms-4 header-link'
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Hair
                        </NavLink>
                        <NavLink className='text-decoration-none ms-4 header-link'
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Fragrance
                        </NavLink>
                        <NavLink className='text-decoration-none ms-4 header-link'
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink className='text-decoration-none ms-4 header-link'
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Kits & Travel
                        </NavLink>
                        <NavLink className='text-decoration-none ms-4 header-link'
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Gifts
                        </NavLink>
                        <NavLink className='text-decoration-none ms-4 header-link'
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Read
                        </NavLink>
                        <NavLink className='text-decoration-none ms-4 header-link'
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Stores
                        </NavLink>

                        <Link><BsSearch className='search' /></Link>
                    </Nav>
                    <Nav className='me-5'>
                        <NavLink className='text-decoration-none header-link'
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Login
                        </NavLink>
                        <NavLink className='text-decoration-none ms-4 header-link'
                            to="/faq"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Cart
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Header;