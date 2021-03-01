import styled from "styled-components";

export const ProductWraper = styled.div`
  width: ${(props) => (props.isSeeingDetails ? "100%" : "26.5%")};
  border: 1px solid #bbb;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 10px;
`;

export const ProductTitle = styled.h1`
  font-size: 18px;
`;

export const ProductImage = styled.img`
  width: 200px;
`;

export const SaleButton = styled.button`
  background-color: ${(props) => (props.isRemovable ? "#fc2003" : "#05dbf2")};
  outline: none;
  border: 0;
  color: #fff;
  padding: 20px 0;
  width: 180px;
  margin: 5px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

export const ProductButton = styled(SaleButton)`
  background-color: black;
  padding: 13px;
  font-weight: normal;
`;
