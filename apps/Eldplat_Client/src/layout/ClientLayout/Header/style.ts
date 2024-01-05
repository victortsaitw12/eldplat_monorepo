import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.N500};
  color: ${({ theme }) => theme.color.N0};
  justify-content: space-between;
  padding: 12px 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* font */
  .header {
    &__title {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    &__settings {
      display: flex;
      align-items: center;
      gap: 10px;
      &-lang {
        select {
          background-color: transparent;
          border: none;
          border-radius: 32px;
          color: ${({ theme }) => theme.color.N0};
          &:hover {
            background-color: transparent;
          }
          &:focus {
            outline: none;
          }
          option {
            border-radius: 32px;
            color: ${({ theme }) => theme.color.N800};
          }
        }
      }
      svg {
        fill: ${({ theme }) => theme.color.N0};
        cursor: pointer;
      }

      &-member {
        height: 32px;
        width: 32px;
        background-color: ${({ theme }) => theme.color.V100};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50rem;
        svg {
          fill: ${({ theme }) => theme.color.V500};
        }
      }
    }
  }
`;
