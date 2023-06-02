import styled from 'styled-components';
import landingImage from '../assets/img/vancouver.jpg'

const HomeWrapper = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${landingImage});
    background-size: cover;
    background-position: center;
    height: 100%;
`;

function Home() {
    return (
        <HomeWrapper>
            <h1>Hello world!</h1>
        </HomeWrapper>
    );
}

export default Home;