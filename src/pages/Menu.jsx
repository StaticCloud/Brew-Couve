import styled from "styled-components";
import menuImage from '../assets/img/waterfront.jpg';

const MenuWrapper = styled.section`
    .menu-wrapper {
        display: grid;
        margin: 0 auto;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: minmax(auto, 50px);
        max-width: 1330px;
    }

    .menu-item {
        aspect-ratio: 1;
        position: relative;
        padding: 20px;
        width: 300px;
        height: 300px;
    }

    .menu-item-image {
        width: 100%;
        height: 100%;
        background-image: url(${menuImage});
        background-size: cover;
        background-position: center;
        clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
    }

    h2 {
        display: inline-block;
        background-color: white;
        color: black;
        padding: 10px 20px;
        margin: 20px;
        clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
        position: absolute;
        bottom: -5px;
        left: -5px;
    }
`;

function Menu() {
    return (
        <MenuWrapper>
            <div className="menu-wrapper">
                <div className="menu-item">
                    <div className="menu-item-image">

                    </div>
                    <h2>MENU ITEM</h2>
                </div>
                <div className="menu-item">
                    <div className="menu-item-image">

                    </div>
                    <h2>MENU ITEM</h2>
                </div>
                <div className="menu-item">
                    <div className="menu-item-image">

                    </div>
                    <h2>MENU ITEM</h2>
                </div>
                <div className="menu-item">
                    <div className="menu-item-image">

                    </div>
                    <h2>MENU ITEM</h2>
                </div>
            </div>
        </MenuWrapper>
    );
}

export default Menu;