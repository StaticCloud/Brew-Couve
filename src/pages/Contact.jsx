import styled from "styled-components";
import Button from '../components/Button'
import CoffeeShop from '../assets/img/coffee-shop.jpg';

const ContactWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;

    form {
        display: inline-flex;
        flex-direction: column;
        width: 390px;
    }

    .address-and-hours,
    form {
        padding: 30px;
    }

    label {
        margin-top: 20px;
        margin-bottom: 5px;
    }

    input {
        border: 0;
    }

    input, textarea {
        padding: 10px;
    }

    input:focus {
        outline: none;
    }

    textarea {
        resize: none;
        width: auto;
    }

    h1 {
        font-size: 2.5rem;
    }

    .contact-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .contact-heading {
        padding: 0 10px;
        text-align: center;
    }

    .coffee-shop {
        height: 300px;
        width: 100%;
        background-image: url(${CoffeeShop});
        background-repeat: no-repeat;
        background-size: cover;
        clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
    }
`;

function Contact() {
    return (
        <ContactWrapper>
            <div className="contact-heading">
                <h1>WE WOULD LOVE TO HEAR FROM YOU</h1>
                <p>Whether you have a question, feedback, or simply want to chat about coffee, we're here to help.</p>
            </div>
            <div className="contact-content">
                <form>
                    <h1>CONTACT FORM</h1>

                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="subject">Subject:</label>
                    <input type="text" name="subject" id="subject" />

                    <label htmlFor="Message">Message:</label>
                    <textarea name="message" id="message" rows="10"></textarea>

                    <Button text="SUBMIT"></Button>
                </form>
                <div className="address-and-hours">
                    <h1>SWING BY OUR PLACE</h1>
                    <br />
                    <div className="coffee-shop"></div>
                    <br />
                    <h2>ADDRESS</h2>
                    <p>83192 Main Avenue</p>
                    <p>Vancouver, WA 98607</p>
                    <br />
                    <h2>HOURS</h2>
                    <p>Monday to Friday: 7:00 am - 7:00 pm</p>
                    <p>Saturday and Sunday: 8:00 am - 6:00 pm</p>
                </div>
            </div>
        </ContactWrapper>
    );
}

export default Contact;