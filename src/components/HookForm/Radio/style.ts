import theme from "@styles/theme";
import styled from "styled-components";

const RadioGroupListSTY = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.color.N400};
  border-radius: 10px;
  overflow: hidden;
`;

const RadioListFieldSTY = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 16px;
  flex: 1;
  height: 100%;
  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.color.N400};
  }
  background-color: ${({ checked, theme }) =>
    checked ? theme.color.N100 : "#ffffff"};
  > label > span {
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.N700};
  }
  > .description {
    font-size: 12px;
    padding-left: 20px;
  }
`;

const RadioItemSTY = styled.input.attrs({ type: "radio" })``;

export { RadioGroupListSTY, RadioListFieldSTY, RadioItemSTY };
