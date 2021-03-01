import styled from "styled-components";

export const ProductWraper = styled.div`
  width: 250px;
  border: 1px solid #bbb;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProductTitle = styled.h1`
  font-size: 18px;
`;

export const ProductImage = styled.img`
  width: 200px;
`;

export const ProductButton = styled.button`
  background-color: ${(props) => (props.isRemovable ? "red" : "#6af21b")};
  outline: none;
  border: 0;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
