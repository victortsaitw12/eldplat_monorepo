import styled from "styled-components";

const BodySTY = styled.div`
  .final_payment_content {
    margin-top: 8px;
    & > span {
      display: inline-block;
      margin-bottom: 12px;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: ${({ theme }) => theme.color.N700};
    }
  }
`;

export { BodySTY };
