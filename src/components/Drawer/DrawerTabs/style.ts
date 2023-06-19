import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  .tab-container {
    display: flex;
    margin-left: 20px;
  }
  .icons {
    color: #718baa;
    button {
      background-color: transparent;
      border: none;
      &:hover {
        background-color: transparent;
      }
    }
  }
`;

const TabSTY = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 10px 10px 0px 0px;
  background-color: ${({ isActive }) => (isActive ? "#fff" : "transparent")};
  span {
    color: ${({ theme }) => theme.color.N700};
    font-size: 14px;
    font-weight: 600;
    margin-right: 0;
  }
`;

export { BodySTY, TabSTY };
