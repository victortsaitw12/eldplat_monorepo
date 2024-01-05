import styled from "styled-components";

export const DivSTY = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  .user-photo {
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .row {
      display: flex;
      align-items: center;
    }

    .g-4 {
      gap: 4px;
    }

    .g-12 {
      gap: 12px;
    }

    .headline {
      font-weight: 600;
      font-size: 18px;
      color: ${({ theme }) => theme.color.N800};
      line-height: 24.52px;
    }

    .paragraph {
      color: ${({ theme }) => theme.color.N200};
    }

    svg {
      color: ${({ theme }) => theme.color.N40};
    }
  }
`;
