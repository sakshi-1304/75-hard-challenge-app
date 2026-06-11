import React from 'react';
import styled from 'styled-components';

// Styled components for the content section
const ContentSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2vw;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const CornerImage = styled.img`
  width: 10vw;
  height: 35vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentBox = styled.div`
  flex: 1;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 20px;
  border-radius: 40px;
  text-align: center;
  height: 33vw;

  h2 {
    font-size: 2vw;
    font-weight: 500;
    text-decoration: underline;
    color: #FF7F3F;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.5vw;
    color: #fff;
    line-height: 1.5;
  }

  img {
    margin-top: -30px;
    width: 33vw;
    height: 60vh;
    border-radius: 10px; /* Add some border radius to the image */
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 100vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    padding: 10px;

    h2 {
      font-size: 4vh;
      margin-bottom: 5px;
    }

    p {
      font-size: 3vh;
    }

    img {
      width: 133vw;
      height: 62vh;
      margin-left: -28vw;
    }
  }
`;

const ContentSection = () => {
  return (
    <ContentSectionWrapper>
      <CornerImage src="assets/left.png" alt="First Image" />
      <ContentBox>
        <h2>ACHIEVEMENTS:</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quos labore temporibus numquam soluta quidem, dicta explicabo vitae eveniet quo asperiores recusandae, optio quam beatae quis est. Optio, est repudiandae.</p>
      </ContentBox>
      <ContentBox>
        <h2>PROGRESS:</h2>
        <img src="assets/piechart.png" alt="Pie Chart" />
      </ContentBox>
      <CornerImage src="assets/right.png" alt="Second Image" />
    </ContentSectionWrapper>
  );
};

export default ContentSection;
