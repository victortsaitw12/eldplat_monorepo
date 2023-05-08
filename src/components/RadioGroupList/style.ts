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

  .radio-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const RadioListFieldSTY = styled.div`
  color: #101840;
`;

const RadioItemSTY = styled.input.attrs({ type: "radio" })``;

export { RadioGroupListSTY, RadioListFieldSTY, RadioItemSTY };
