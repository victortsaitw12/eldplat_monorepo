import styled, { css } from "styled-components";

interface I_StyInputProps {
  horizonLabel?: boolean;
}

const ItemSTY = styled.label<I_StyInputProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  input {
    width: 100%;
    padding: 0 12px;
    border: 1px solid #afc3da;
    border-radius: 4px;
    line-height: 32px;
    color: #718baa;
    &.error {
      border-color: ${({ theme }) => theme.color.R400};
    }
  }
  input: focus {
    outline: none;
  }
  .field-title {
    display: flex;
    align-items: center;
    font-size: 14px;
    .requier-icon {
      font-weight: 700;
      color: ${({ theme }) => theme.color.R400};
    }
  }
  .error-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.color.R400};
  }
  ${(props) => getHorizonStyles(props)}
`;
const getHorizonStyles = (props: any) =>
  props.horizonLabel
    ? css`
        flex-direction: row;
        flex-wrap: wrap;
        input {
          display: block;
          width: calc(60% - 12px);
        }
        .field-title {
          width: 40%;
        }
        .error-message {
          width: 100%;
        }
      `
    : css``;
export { ItemSTY };
