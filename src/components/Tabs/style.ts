import styled from "styled-components";

export const TabsSTY = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding-left: 24px;
  .tab {
    background: ${({ theme }) => theme.color.B100};
    border-radius: 10px 10px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    color: ${({ theme }) => theme.color.N700};
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
  .current {
    background: ${({ theme }) => theme.color.N0};
    gap: 4px;
  }
  .icon {
    height: 12px;
    width: 12px;
  }
`;
