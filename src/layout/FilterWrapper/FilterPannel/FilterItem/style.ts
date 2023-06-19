import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  input:focus,
  select:focus {
    outline: none;
  }
  .filter-name {
    font-size: ${({ theme }) => theme.fontSize.Paragraph200};
    color: ${({ theme }) => theme.color.N700};
  }
  .filter-option {
    width: 240px;
    height: 32px;
    padding: 8px 12px;
    /* Neutral/N0 */

    background: #ffffff;
    /* Neutral/N400 */

    border: 1px solid #afc3da;
    border-radius: 4px;
    &:invalid {
      color: ${({ theme }) => theme.color.N700};
    }
  }
  .filter-input {
    width: 240px;
    height: 32px;
    padding: 8px 12px;
    /* Neutral/N0 */

    background: #ffffff;
    /* Neutral/N400 */

    border: 1px solid #afc3da;
    border-radius: 4px;
  }
`;
