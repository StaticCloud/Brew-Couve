import styled from "styled-components";
import vancouver from "../assets/img/vancouver.jpg"
import community from "../assets/img/community.jpg"
import americano from "../assets/img/americano.jpg"
import group from "../assets/img/group.jpg"

const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .container {
        display: flex;
        flex-wrap: wrap-reverse;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
    }

    .inner-section {
        width: 400px;
        padding: 30px;
    }

    .inner-section h1 {
        font-size: 2.5rem;
    }

    .about {
        background-image: url(${vancouver});
    }

    .community {
        background-image: url(${community});
    }

    .americano {
        background-image: url(${americano});
    }

    .group {
        background-image: url(${group});
    }

    .image {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 500px;
        height: 300px;
        clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
    }
`;

function About() {
    return (
        <AboutWrapper>
            <div className="container">
                <div className="inner-section">
                    <h1>WHO WE ARE</h1>
                    <p>At Brew Couve, we are passionate about two things: coffee and community. Nestled in the heart of the vibrant city of Vancouver, our coffee shop is a haven for coffee enthusiasts, locals, and visitors alike. We strive to provide an exceptional coffee experience that goes beyond just a great cup of joe.</p>
                </div>
                <div className="about image"></div>
            </div>
            <div className="container">
                <div className="inner-section">
                    <h1>OUR STORY</h1>
                    <p>Brew Couve was born out of a shared love for coffee and a desire to create a space where people can come together, connect, and enjoy the perfect brew. Our founders envisioned a coffee shop that would become a cornerstone of the community—a place where friendships are forged, ideas are exchanged, and memories are made.</p>
                </div>
                <div className="community image"></div>
            </div>
            <div className="container">
                <div className="inner-section">
                    <h1>THE COFFEE</h1>
                    <p>We take our coffee seriously. That's why we work closely with local roasters and source only the finest beans from around the world. Our skilled baristas are passionate about their craft and dedicated to brewing each cup to perfection. Whether you prefer a classic espresso, a velvety latte, or a pour-over that brings out the nuanced flavors, we have something for every coffee lover.</p>
                </div>
                <div className="americano image"></div>
            </div>
            <div className="container">
                <div className="inner-section">
                    <h1>JOIN US</h1>
                    <p>We invite you to step into Brew Couve and experience the rich flavors, warm ambiance, and genuine hospitality that define our coffee shop. Whether you're a coffee aficionado or simply looking for a place to unwind, we guarantee you'll find a welcoming atmosphere and a delicious cup of coffee waiting for you.</p>
                </div>
                <div className="group image"></div>
            </div>
        </AboutWrapper>
    );
}

export default About;