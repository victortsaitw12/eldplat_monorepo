import styled from "styled-components";

export const DivSTY = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.Heading600};
  padding: 8px 12px;
  border-radius: 10px;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.N400};
  }

  .header {
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    &__icon {
    }
    &__title {
      font-size: 18px;
      font-weight: 600;
      pointer-events: none;
    }
  }

  /* .user-container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-radius: 0.625rem;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.color.N400};
    }
    .user-info {
      display: flex;
      align-items: center;
      gap: 12px;

      img {
        border-radius: 16px;
      }
      .desp {
        display: flex;
        flex-direction: column;
        gap: 12px;
        h4 {
          font-size: 16px;
          font-weight: 600;
        }
        p {
          font-weight: 400;
        }
      }
    }
  } */
`;
