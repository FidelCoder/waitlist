import React, { useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import Countdown from './Countdown';
import HeaderImage from "../../assets/img/saco.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

axios.defaults.baseURL = 'http://localhost:5000';

export default function Header() {
  const [notification, setNotification] = useState(null);

  const subscribeEmail = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdwyxmsWHHMtTPpl7iSIEjh4ej2Q7ws616JsELRnciYIq_5xA/viewform?usp=sf_link', "_blank");
  };

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">We are WorldSACCO, a visionary financial platform.</h1>
          <HeaderP className="font13 semiBold">
          Unlock the future of finance with WorldSACCO. Join our exclusive waitlist and experience intelligent recommendations, seamless money management, and instant loans. Sign up now and take control of your financial future.
          </HeaderP>
          <BtnWrapper>
            <BigFullButton onClick={subscribeEmail} />
          </BtnWrapper>
          {notification && <p>{notification}</p>}
          
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Empower Your Financial Future with WorldSACCO: The Future of Finance Begins Here.</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>WorldSACCO Team</p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

const BigFullButton = ({ onClick }) => (
  <button 
    onClick={onClick}
    style={{
      fontSize: '2em',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      transition: 'all 0.2s ease-in-out',
    }}
    onMouseOver={({target}) => target.style.backgroundColor = '#0056b3'}
    onMouseOut={({target}) => target.style.backgroundColor = '#007BFF'}
  >
    Join Waitlist
  </button>
);

const Wrapper = styled.section`
  padding-top: 20px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const HeaderP = styled.p`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 60%;
  @media (max-width: 960px) {
    width: 100%;
    flex-direction: column;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 10px; 
  bottom: 10px; 
  max-width: 280px; 
  padding: 20px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;

const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  color: #333;
`;
