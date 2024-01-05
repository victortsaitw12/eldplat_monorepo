import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  padding: 8px 12px;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.N700};
  .item-content {
    display: flex;
    align-items: center;
    gap: 8px;
    .icon {
      padding: 1px 6px;
      border-radius: 20px;
      color: ${({ theme }) => theme.color.ChartYellow};
      border: 1px solid ${({ theme }) => theme.color.ChartYellow};
    }
  }
`;
