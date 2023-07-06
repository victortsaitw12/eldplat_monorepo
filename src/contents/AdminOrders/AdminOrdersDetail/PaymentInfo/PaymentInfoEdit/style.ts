import styled from "styled-components";

const BodySTY = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .final_payment_content {
    padding-left: 24px;
    & > span {
      display: inline-block;
      margin-bottom: 12px;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: ${({ theme }) => theme.color.N700};
    }
  }
  .radio_container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-left: 24px;
    & > label {
      margin: 0;
      margin-left: -24px;
    }
    & > label .radio_label {
      display: inline-block;
      color: ${({ theme }) => theme.color.N700};
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
    }
    & > div > .deposit_persent {
      gap: 0.5rem;
      max-width: 208px;
      display: flex;
      align-items: center;
      & > input {
        width: 50%;
      }
    }
  }
  .final_payment_content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .payment_record {
    & > span {
      display: inline-block;
      margin-bottom: 8px;
      font-weight: 400;
      font-size: 12px;
      color: ${({ theme }) => theme.color.N400};
    }
    & > div {
      display: flex;
      margin-bottom: 12px;
      max-width: 280px;
      gap: 12px;
    }
  }
`;

export { BodySTY };
