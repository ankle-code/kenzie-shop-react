import styled from "styled-components";

export const BannerContainer = styled.div`
  background-image: url(${(props) => props.illustrationImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  max-width: 900px;
  height: 600px;
  margin-top: 150px;
`;

export const BannerWrap = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  top: 25%;
  left: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerTitle = styled.h1`
  font-size: 38px;
  color: #05dbf2;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 2px;
  margin: 0;
`;

export const BannerSubTittle = styled(BannerTitle)`
  color: #fff;
  letter-spacing: 0;
  max-width: 250px;
  font-size: 45px;
`;

export const BannerText = styled.p`
  color: #3e2ea6;
  font-size: 16px;
`;

export const BannerButton = styled.button`
  background-color: #05dbf2;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  letter-spacing: 1px;
  cursor: pointer;
  width: 180px;
  height: 50px;
  border-radius: 50px;
  outline: none;
  border: 0;
  margin-top: 10px;
  box-shadow: 0px 6px 5px 3px rgba(2, 30, 115, 0.62);
`;
