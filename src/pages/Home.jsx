import styled from 'styled-components';
import coffee from '../assets/img/coffee.jpg'

const HomeWrapper = styled.section`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${coffee});
    background-size: cover;
    background-position: center;
    height: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: flex-start;
    align-items: center;
    clip-path: polygon(0 9%, 100% 6%, 100% 87%, 0 75%);
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
`;

function Home() {
    return (
        <HomeWrapper>
            <div className="promo-wrapper">
                <h2>FUEL YOUR DAY</h2>
                <h1>THE VANCOUVER WAY</h1>
                <div className="promo-details">
                    <p>We are a totally real coffee shop located in Vancouver, WA.</p>
                    <button>
                        LEARN MORE
                    </button>
                </div>
            </div>
        </HomeWrapper>
    );
}

export default Home;