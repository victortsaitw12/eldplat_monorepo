import styled from "styled-components";
export const BodySTY = styled.div`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.color.N300};
  cursor: pointer;
  .tooltip {
    position: absolute;
    bottom: 4px;
    right: 50%;
    transform: translate(50%, -100%);
    width: auto;
    height: 24px;
    background: ${({ theme }) => theme.color.N900};
    color: ${({ theme }) => theme.color.N0};
    border-radius: 30px;
    visibility: hidden;
    padding: 4px 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
