import styled from "styled-components";

const Header = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    height: 50px;
    background-color: black;

    .hamburger-wrapper {
        position: relative;
        display: block;
        width: 20px;
        height: 20px;
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

    input[type="checkbox"] {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
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
        height: 30vh;
    }

    .menu {
        display: flex;
        position: fixed;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        top: 0;
        right: 0;
        padding-top: 50px;
        width: 100vw;
        height: 0vh;
        list-style: none;
        transition: 0.2s;
        background-color: black;
        z-index: -1;
    }

    .menu li {
        display: inline-block;
        position: relative;
    }

    .menu li:hover {
        cursor: pointer;
    }

    .menu li:before {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        background-color: white;
        transition: 0.2s;
    }

    .menu li:hover:before {
        width: 100%;
    }

`

function HeaderComponent() {
    return (
        <Header>
            <h1>BREW COUVE</h1>
            
            <div className="hamburger-wrapper">
                <input type="checkbox"/>
                <div className="hamburger"/>
                <ul className="menu">
                    <li>
                        <p>Home</p>
                    </li>
                    <li>
                       <p>Menu</p>
                    </li>
                    <li>
                        <p>About</p>
                    </li>
                    <li>
                        <p>Contact</p>
                    </li>
                </ul>
            </div>
        </Header>
    );
}

export default HeaderComponent;