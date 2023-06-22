import React, { useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import Countdown from './Countdown';
import HeaderImage from "../../assets/img/saco.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

axios.defaults.baseURL = 'http://localhost:5000';

export default function Header() {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState(null);

  // const subscribeEmail = async () => {
  //   try {
  //     const response = await axios.post('/subscribe', { email: email });
  //     if (response.status === 200) {
  //       setNotification('Thank you for subscribing!');
  //       setEmail('');
  //     } else {
  //       setNotification('Something went wrong, please try again.');
  //     }
  //   } catch (error) {
  //     setNotification('An error occurred, please try again later.');
  //   }
  // };

  const subscribeEmail = async () => {
    try {
      console.log("clicked me")
      const response = await axios.post('/subscribe', { email: email });
      console.log(response);  // <--- Add this line
      if (response.status === 200) {
        setNotification('Thank you for subscribing!');
        setEmail('');
      } else {
        setNotification('Something went wrong, please try again.');
      }
    } catch (error) {
      console.log(error);  // <--- Add this line
      setNotification(`An error occurred: ${error.message}`);
    }
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
            <FieldWrapper>
              <EmailInput
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              {/* <FullButton title="Join Waitlist" onClick={subscribeEmail} /> */}
              <FullButton title="Join Waitlist" action={subscribeEmail} />

            </FieldWrapper>
          </BtnWrapper>
          {notification && <p>{notification}</p>}
          <CountdownWrapper>
            <Countdown targetDate="2024-01-01" />
          </CountdownWrapper>
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

const HeaderP = styled.div`
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

const FieldWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const EmailInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
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
  left: 10px;  // Closer to the left edge
  bottom: 10px;  // Closer to the bottom edge
  max-width: 280px;  // Smaller width
  padding: 20px;  // Smaller padding, will make the box smaller
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
