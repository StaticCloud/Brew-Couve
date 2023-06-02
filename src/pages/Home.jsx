import styled from 'styled-components';
import landingImage from '../assets/img/vancouver.jpg'

const HomeWrapper = styled.section`
    background-image: url(${landingImage});
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