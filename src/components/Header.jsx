import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = styled.header`
    display: flex;
    position: fixed;
    align-content: center;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background-color: black;

    /* draw a blank square over header to prevent nav links from displaying */
    .hamburger-wrapper:before {
        content: '';
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: black;
        z-index: 0;
    }

    .hamburger-wrapper {
        position: relative;
        display: block;
        width: 20px;
        height: 20px;
        z-index: -1;
    }

    .hamburger,
    .hamburger:before,
    .hamburger:after {
        content: '';
        height: 2px;
        width: 100%;
        background-color: white;
        transition: 0.2s;
    }

    .hamburger {
        top: 50%;
    }

    .hamburger,
    .hamburger:before,
    .hamburger:after {
        position: absolute;
    }

    .hamburger:before {
        top: -8px;
    }

    .hamburger:after {
        top: 8px;
    }

    label {
        position: absolute;
        opacity: 0;
    }

    input[type="checkbox"] {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
    }

    .menu {
        display: flex;
        position: fixed;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        top: 0;
        bottom: 0;
        left: 0;
        padding-top: 50px;
        width: 100vw;
        height: 0vh;
        list-style: none;
        transition: 0.4s;
        background-color: black;
        z-index: -1;
    }

    input[type="checkbox"]:hover {
        cursor: pointer;
    }

    input[type="checkbox"]:checked ~ .hamburger {
        background: transparent;
    }

    input[type="checkbox"]:checked ~ .hamburger:before {
        transform: rotate(-45deg);
        top: 0;
    }

    input[type="checkbox"]:checked ~ .hamburger:after {
        transform: rotate(45deg);
        top: 0;
    }

    input[type="checkbox"]:checked ~ .menu {
        height: 100vh;
    }

    input[type="checkbox"]:checked ~ .menu a {
        top: -30px;
    }

    .desktop-nav {
        display: none;
    }

    .menu a {
        display: inline-flex;
        position: relative;
        top: -95px;
        z-index: -2;
        transition: 0.4s;
        font-size: 2rem;
    }

    .menu a {
        top: -95px;
    }

    .menu a:hover {
        cursor: pointer;
    }

    .menu a:before,
    .desktop-nav a:before {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        background-color: white;
        transition: 0.4s;
    }

    .menu a:hover:before,
    .desktop-nav a:hover:before {
        width: 100%;
    }

    @media screen and (min-width: 1024px) {
        .hamburger-wrapper {
            display: none;
        }

        .desktop-nav {
            display: flex;
        }

        .desktop-nav a {
            margin: 0 0 0 30px;
            font-size: 1.3rem;
            display: inline-flex;
            position: relative;
        }
    }
`

function HeaderComponent() {

    const [checked, setChecked] = useState(false)

    return (
        <Header>
            <h1>BREW COUVE</h1>

            <div className="hamburger-wrapper">
                <label htmlFor="hamburger">Hamburger</label>
                <input name="hamburger" type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                <div className="hamburger" />
                <nav className="menu" onClick={() => setChecked(!checked)}>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
            <nav className="desktop-nav">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </Header>
    );
}

export default HeaderComponent;