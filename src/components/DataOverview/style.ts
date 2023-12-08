import styled from "styled-components";

export const DivSTY = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;
  background: var(--neutral-n-0, #fff);

  .profile-wrapper {
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
  }

  .insert-node {
  }
`;
