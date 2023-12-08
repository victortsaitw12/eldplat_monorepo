import styled from "styled-components";

export const DivSTY = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  background: var(--neutral-n-0, #fff);

  /* Elevation / 1 */
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
  .actionRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btns {
    white-space: nowrap;
    padding: 8px 12px;
  }
`;