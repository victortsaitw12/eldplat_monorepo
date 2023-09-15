import styled from "styled-components";

export const DivSTY = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.N300};
  border-radius: 5px 5px 0px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: sticky;
  top: 0;
  z-index: 99;
  .headerCell {
    width: 100%;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: ${({ theme }) => theme.color.N100};
    &:not(:first-child) {
      border-left: 1px solid ${({ theme }) => theme.color.N300};
    }
  }
  .weekend {
    color: ${({ theme }) => theme.color.R300};
    background: ${({ theme }) => theme.color.R50};
  }
`;
