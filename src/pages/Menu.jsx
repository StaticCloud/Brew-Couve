import styled from "styled-components";
import menuImage from '../assets/img/waterfront.jpg';

const MenuWrapper = styled.section`
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