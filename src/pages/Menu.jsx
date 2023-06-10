import styled from "styled-components";
import menuImage from '../assets/img/waterfront.jpg';
import menu from '../menu/primary-menu';
import Button from "../components/Button"
import { useState } from "react";

const MenuWrapper = styled.section`
    display: flex
    justify-content: center;

    .menu-wrapper {
        display: grid;
        margin: 0 auto;
        justify-items: center;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: minmax(auto, 50px);
        max-width: 1330px;
        padding: 0 20px;
    }

    .menu-item {
        aspect-ratio: 1;
        position: relative;
        width: 300px;
        height: 200px;
        padding: 20px 0;
    }

    .clickable:hover {
        cursor: pointer;
    }

    .menu-item-image {
        width: 100%;
        height: 100%;
        background-image: url(${menuImage});
        background-size: cover;
        background-position: center;
        clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
    }

    h1 {
        padding-top: 50px;
        font-size: 3rem;
        text-align: center;
    }

    h2 {
        display: inline-block;
        background-color: white;
        color: black;
        padding: 10px 20px;
        margin: 20px;
        clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
        position: absolute;
        bottom: -10px;
        left: -30px;
    }

    .back-button-wrapper {
        display: table;
        margin: 20px auto;
    }
`;

function Menu() {

    const [currentMenu, setCurrentMenu] = useState(menu);

    return (
        <MenuWrapper>
            <h1>MENU</h1>
            <div className="menu-wrapper">
                {currentMenu.options.map((item, i) => {
                    return (
                        <div className={`menu-item ${currentMenu.primary == true ? "clickable" : "" }`} key={i} onClick={item.menu ? () => setCurrentMenu(item.menu) : () => {}}>
                            <div className="menu-item-image" style={{backgroundImage: `url(${item.image})`}}>

                            </div>
                            <h2>{item.name}</h2>
                        </div>
                    );
                })}
            </div>
            {currentMenu.primary === false &&
                <div className="back-button-wrapper" onClick={() => setCurrentMenu(menu)}>
                    <Button text="GO BACK"></Button>
                </div>
            }
        </MenuWrapper>
    );
}

export default Menu;