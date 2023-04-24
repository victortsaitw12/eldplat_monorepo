import styled from "styled-components";

export const RadioGroupRowSTY = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid #eee;
  border-radius: 10px;

  .radio-block {
    width: calc(100% / 3);
    padding: 5px 15px 30px;

    &:has(input[type="radio"]:checked) {
      background: #e2edff;
    }

    &:not(&:last-child) {
      border-right: 1px solid #eee;
    }

    .hint {
      padding-left: 22px;
      font-size: 12px;
      color: #696f8c;
      transform-origin: left;
      transform: scale(0.9);
    }
  }
`;
