import styled from "styled-components";

export const DivSTY = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;

  .left-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .expense-card {
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    .row {
      display: flex;
      justify-content: space-between;
      border-bottom: none;
    }

    .expense-title {
      font-size: 20px;
      font-weight: ${({ theme }) => theme.fontWeight.Heading600};
      color: ${({ theme }) => theme.color.N700};
      padding-bottom: 10px;
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    }

    .sub-title {
      font-size: 16px;
      font-weight: ${({ theme }) => theme.fontWeight.Heading600};
      color: ${({ theme }) => theme.color.N500};
      padding-bottom: 10px;
      padding-top: 10px;
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    }

    .bold{
      font-weight: ${({ theme }) => theme.fontWeight.Heading600};
    }

    .red{
      color: ${({ theme }) => theme.color.R400};
    }
  }

  .row {
    display: flex;
    justify-content: start;
    align-items: stretch;
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};

    &:last-child {
      border-bottom: none;
    }

    .label {
      width: 20%;
      padding: 15px;
      border-right: 1px solid ${({ theme }) => theme.color.N40};

      display: flex;
      align-items: center;

      &.emphasis {
        width: 140px;
        background-color: ${({ theme }) => theme.color.N20};
        font-weight: ${({ theme }) => theme.fontWeight.Heading600};

        flex-direction: column;
        justify-content: center;
        gap: 5px;
      }
    }

    .value {
      width: 70%;
      padding: 15px;
      height: fit-content;
      color: ${({ theme }) => theme.color.N900};
      flex-grow: 1;
      display: flex;
      align-items: center;
      gap: 2px;

      &.sub-wrapper {
        width: 80%;
        padding: 0;
        flex-direction: column;
        align-items: stretch;

        .row {
          height: 40px;

          .label {
            width: 280px;
          }
        }
      }
    }
  }
`;
