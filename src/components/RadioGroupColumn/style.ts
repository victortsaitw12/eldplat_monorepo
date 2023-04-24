import styled from "styled-components";

export const RadioGroupColumnSTY = styled.div`
  width: 100%;

  .title {
    margin-bottom: 8px;
    font-weight: normal;
  }

  .hint {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

export const RadioColumnFieldSTY = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 28px;
  padding: 24px 15px 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:has(input[type="radio"]:checked) {
    border: 2px solid #0091e6;
  }

  input[type="radio"] {
    margin-right: 10px;
  }

  .content {
    label {
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 0;
      cursor: pointer;
    }

    & > div {
      margin: 0;
    }
  }
`;
