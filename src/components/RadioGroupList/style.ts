import styled from "styled-components";

const RadioGroupListSTY = styled.div`
  width: 100%;

  .title {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.Heading700};
    color: #101840;
  }

  .hint {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

const RadioListFieldSTY = styled.div`
  color: #101840;
`;

export { RadioGroupListSTY, RadioListFieldSTY };
