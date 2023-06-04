import styled from "styled-components";

const AboutWrapper = styled.section`
    .inner-section {
        width: 400px;
    }

    .about-image {
        
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
                <div className="about-image">

                </div>
            </div>
        </AboutWrapper>
    );
}

export default About;