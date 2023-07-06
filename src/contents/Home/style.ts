import styled from "styled-components";
const ItemSTY = styled.div`
  display: flex;
  padding: 30px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1 0 0;
  align-self: stretch;
  background-color: ${({ theme }) => theme.color.N0};
  border-radius: 10px;
  cursor: pointer;
  > .icon {
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.N200};
    > svg {
      width: 32px;
      height: 32px;
      fill: ${({ theme }) => theme.color.N700};
    }
  }
  > .entrance-label {
    color: ${({ theme }) => theme.color.N700};
    font-size: 16px;
    font-weight: 600;
  }
`;

const ListSTY = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export { ItemSTY, ListSTY };
