import styled from "styled-components";

export const View3Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const View3Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const View3Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 440px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  border-style: solid;
  border-color: white;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const View3Icon = styled.img`
  height: 60px;
  width: 60px;
  margin-bottom: 10px;
  padding: 5px 5px 5px 5px;
`;

export const View3H1 = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const View3H2 = styled.h2`
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  padding: 10px 5px 5px 5px;
`;

export const View3P = styled.p`
  color: #ffffff;
  font-size: 0.8rem;
  text-align: center;
`;
