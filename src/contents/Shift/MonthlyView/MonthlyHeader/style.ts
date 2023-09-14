import styled from "styled-components";

export const DivSTY = styled.div`
  border: 1px solid ${({ theme }) => theme.color.N300};
  border-radius: 5px 5px 0px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.N300};
  z-index: 99;
  .headerCell {
    height: 32px;
    width: calc(100% / 7);
    background: ${({ theme }) => theme.color.N100};
    line-height: 32px;
    text-align: center;
    border-left: 1px solid ${({ theme }) => theme.color.N300};
    &:first-child {
      border-left: none;
    }
  }
  .weekend {
    color: ${({ theme }) => theme.color.R300};
    background: ${({ theme }) => theme.color.R50};
  }
`;
