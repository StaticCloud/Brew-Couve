import styled from 'styled-components';
import coffee from '../assets/img/coffee.jpg'
import Button from '../components/Button'

const HomeWrapper = styled.section`
    height: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0px 30px;

    h1 {
        font-size: 2.5rem;
        font-weight: bolder;
        display: inline-block;
    }

    h2 {
        font-size: 1rem;
    }

    .promo-wrapper {
        display: flex;
        flex-direction: column;
        background-color: black;
        padding: 30px;
    }

    .coffee {
        width: 500px;
        height: 300px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${coffee});
        filter: grayscale(100%);
    }
`;

function Home() {
    return (
        <HomeWrapper>
            <div className="promo-wrapper">
                <h2>FUEL YOUR DAY</h2>
                <h1>THE VANCOUVER WAY</h1>
                <div className="promo-details">
                    <p>We are a totally real coffee shop located in Vancouver, WA.</p>
                    <Button text="LEARN MORE"/>
                </div>
            </div>
            <div className="coffee">

            </div>
        </HomeWrapper>
    );
}

export default Home;