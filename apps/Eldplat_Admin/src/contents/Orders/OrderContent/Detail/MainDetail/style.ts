import styled from "styled-components";

export const DivSTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .row {
    display: flex;
    justify-content: start;
    align-items: stretch;
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};

    &:last-child {
      border-bottom: none;
    }

    .label {
      width: 25%;
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
      width: 75%;
      padding: 15px;
      height: fit-content;
      color: ${({ theme }) => theme.color.N900};
      flex-grow: 1;
      display: flex;
      align-items: center;
      gap: 2px;

      &.sub-wrapper {
        padding: 0;
        flex-direction: column;
        align-items: stretch;

        .row {
          height: 40px;

          .label {
            width: 350px;
          }
        }
      }
    }
  }
`;
