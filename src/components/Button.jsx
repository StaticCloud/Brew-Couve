import styled from "styled-components";

const ButtonWrapper = styled.button`
    background: none;
    border: none;
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    color: #131313;
    background-color: white;
    position: relative;
    margin-top: 20px;
    padding: 12px;
    border: 2px solid white;
  
    &:before {
        content: "";
        position: absolute;
        background-color: #131313;
        width: 0%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 0;
        transition: 0.4s;
    }
  
    &:after {
        content: "${props => props.buttonText}";
        position: absolute;
        color: white;
        left: 0;
        right: 0;
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
        transition: 0.4s;
    }
  
    &:hover {
        cursor: pointer;
    }
  
    &:hover:before {
        width: 100%;
    }
  
    &:hover:after {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
`;

function Button({ text }) {
    return (
        <ButtonWrapper buttonText={text}>
            {text}
        </ButtonWrapper>
    );
}

export default Button;