import styled from "styled-components";

export const DivSTY = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background: var(--neutral-n-0, #fff);

  &.shadow {
    box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
  }

  &.flex-end {
    justify-content: flex-end;
  }
  &.margin-bottom {
    margin-bottom: 20px;
  }
`;
