import styled from "styled-components";

const BodySTY = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 0px 8px 20px;
`;

const ItemListSTY = styled.div`
  border-left: 1px solid ${({ theme }) => theme.color.N300};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 0px 0px 10px;
  gap: 4px;
`;
const StyledButton = styled.div`
  h5 {
    font-size: 14px;
  }
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 12px;
`;

export { BodySTY, ItemListSTY, StyledButton };
