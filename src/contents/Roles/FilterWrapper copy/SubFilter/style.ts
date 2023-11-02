import styled from "styled-components";

export const BodySTY = styled.div`
  position: relative;
  .filter-button {
    cursor: pointer;
    border: none;
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    height: 35px;
    border-radius: 32px;
    &:hover {
      background: ${({ theme }) => theme.color.N400};
    }
  }
  .filter-modal {
    position: absolute;
    display: flex;
    top: 42px;
    left: 0;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.16);
    border-radius: 0px 0px 10px 10px;
    background: ${({ theme }) => theme.color.N0};
    padding: 12px;
    gap: 12px;
    width: 280px;
    z-index: 10;
    .modal-input {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px;
      gap: 6px;
      width: 256px;
      height: 40px;
      /* Neutral/N0 */
      background: #ffffff;
      /* Neutral/N400 */
      border: 1px solid #afc3da;
      border-radius: 10px;
    }
    .modal-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px 0px 12px;
      gap: 4px;
      width: 100%;
      /* Neutral/N200 */
      border-bottom: 1px solid #d6e2f0;
    }
    .modal-actions {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 8px;
      width: 256px;
      height: 24px;
      button {
        cursor: pointer;
        border: none;
      }
    }
  }
`;
