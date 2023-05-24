import styled from "styled-components";

const RadioGroupListSTY = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 650px;
  height: 60px;
  /* Neutral/N0 */
  background: #ffffff;
  /* Neutral/N400 */
  border: 1px solid ${({ theme }) => theme.color.N400};
  border-radius: 10px;
  overflow: hidden;
`;

const RadioListFieldSTY = styled.div<{ checked: boolean }>`
  padding: 8px 16px;
  flex: 1;
  height: 100%;
  color: #101840;
  background-color: ${({ checked }) => (checked ? "#E2EDFF" : "#ffffff")};
`;

const RadioItemSTY = styled.input.attrs({ type: "radio" })``;

export { RadioGroupListSTY, RadioListFieldSTY, RadioItemSTY };
