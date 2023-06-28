import styled from "styled-components";

interface I_StyProps {
  color?: string;
}

export const BodySTY = styled.div<I_StyProps>`
  width: 100%;
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* for Chrome、Safari */
  -moz-user-select: none; /* for Mozilla、Firefox */
  .collapse_title {
    cursor: pointer;
    position: relative;
    padding: 14px 20px;
    background-color: ${(props) => props.color};
    font-size: 16px;
    font-weight: ${(props) => props.theme.fontWeight.Heading600};
    color: ${(props) => props.theme.color.N700};
    & > span {
      font-size: 16px;
      font-weight: ${(props) => props.theme.fontWeight.Heading600};
      color: ${(props) => props.theme.color.N700};
      cursor: pointer;
    }
    svg {
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -8px;
    }
  }
  .collapse_content {
    display: none;
    background-color: ${({ theme }) => theme.color.N0};
    &.show {
      display: block;
    }
  }
`;
