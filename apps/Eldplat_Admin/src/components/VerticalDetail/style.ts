import styled from "styled-components";

const BodySTY = styled.div`
  .v_detail_title {
    line-height: 32px;
    color: ${({ theme }) => theme.color.N700};
    font-size: 14px;
    font-weight: 600;
  }
  & > ul {
    list-style: none;
    & > li {
      line-height: 32px;
      color: ${({ theme }) => theme.color.N700};
      font-size: 14px;
    }
  }
`;

export { BodySTY };
