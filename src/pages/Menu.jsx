import styled from "styled-components";
import menuImage from '../assets/img/waterfront.jpg';
import menu from '../menu/primary-menu';

const MenuWrapper = styled.section`
    display: flex
    justify-content: center;

    .menu-wrapper {
        display: grid;
        margin: 0 auto;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
`;

function Menu() {
    return (
        <MenuWrapper>
            <h1>MENU</h1>
            <div className="menu-wrapper">
                {menu.map((item, i) => {
                    return (
                        <div className="menu-item" key={i}>
                            <div className="menu-item-image" style={{backgroundImage: `url(${item.image})`}}>

                            </div>
                            <h2>{item.category}</h2>
                        </div>
                    );
                })}
            </div>
        </MenuWrapper>
    );
}

export default Menu;