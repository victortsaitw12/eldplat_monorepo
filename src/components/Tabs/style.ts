import styled from "styled-components";

export const TabsSTY = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  .tabs {
    .tab {
      background-color: ${({ theme }) => theme.color.B100};
      border-radius: 10px 10px 0px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 12px;
      color: #567190;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      &:nth-child(1) {
        margin-left: 24px;
      }
    }
    .current {
      background-color: ${({ theme }) => theme.color.N0};
      gap: 4px;
      &:after {
        content: "›";
        transform: rotate(90deg);
        margin-left: 4px;
      }
    }
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
