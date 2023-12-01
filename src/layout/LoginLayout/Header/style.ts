import styled from "styled-components";

const BodySTY = styled.div`
  height: 40px;
  display: flex;
  background: ${({ theme }) => theme.color.N300};
  border-bottom: 1px solid ${({ theme }) => theme.color.N40};
  justify-content: space-between;
  padding: 12px 20px;
  .tool-container {
    display: flex;
    align-items: center;
    gap: 10px;
    & > .header-title {
      color: ${({ theme }) => theme.color.N0};
      /* Headline/H-500 */
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  .plan-info {
    display: flex;
    align-items: center;
    gap: 10px;

    svg:not(.notification) {
      fill: ${({ theme }) => theme.color.N700};
    }
    select {
      background-color: transparent;
      border-radius: 32px;
      border-color: transparent;
      color: ${({ theme }) => theme.color.N0};
      &:hover {
        background-color: transparent;
      }
      option {
        border-radius: 32px;
        color: ${({ theme }) => theme.color.N800};
      }
    }
  }
  .breadcrumbs.main-layout {
    .breadcrumbs-item {
      & > * {
        color: ${({ theme }) => theme.color.N500};
        opacity: 0.5;
      }
      .breadcrumbs__route {
        color: ${({ theme }) => theme.color.N500};
        &:hover {
          opacity: 1;
        }
      }
      &:last-child {
        & > .breadcrumbs__route,
        & > div {
          opacity: 1;
        }
      }
    }
  }
`;

const StyledButton = styled.button`
  padding: 4px 12px 4px 12px;
  /* Chart/Chart Green */
  color: ${({ theme }) => theme.color.G600};
  border: 1px solid #6bdaae;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.ChartGreen};
  font-weight: 600;
  font-size: 14px;
`;

export { BodySTY, StyledButton };
