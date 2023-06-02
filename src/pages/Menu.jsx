import styled from "styled-components";
import menuImage from '../assets/img/waterfront.jpg';

const MenuWrapper = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${menuImage});
    background-size: cover;
    background-position: center;
    height: 100%;
`;

function Menu() {
    return (
        <MenuWrapper>
            <h1>Hello world!</h1>
        </MenuWrapper>
    );
}

export default Menu;