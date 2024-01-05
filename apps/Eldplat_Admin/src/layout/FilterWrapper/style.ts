import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;

  .filter-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;

    .search-tool {
      display: flex;
      align-items: center;
      gap: 8px;

      width: 200px;
      padding: 8px 12px;

      background: ${({ theme }) => theme.color.N0};
      border: 1px solid ${({ theme }) => theme.color.N50};
      border-radius: 4px;
      color: ${({ theme }) => theme.color.N100};

      input {
        width: 100%;
        font-size: ${({ theme }) => theme.fontSize.Paragraph300};
        border: none;
      }

      input:focus {
        outline: none;
      }

      svg {
        color: ${({ theme }) => theme.color.N100};
      }
    }

    .filter_btn {
      cursor: pointer;
      /* border: 1px solid ${({ theme }) => theme.color.N400}; */
      background: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;
      height: 35px;
      font-size: ${({ theme }) => theme.fontSize.Paragraph300};

      .item-number {
        width: 1.2rem;
        height: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.color.N0};
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.N400};
      }

      svg {
        color: ${({ theme }) => theme.color.N200};
      }

      &.clear {
        font-weight: ${({ theme }) => theme.fontWeight.Heading400};
        color: ${({ theme }) => theme.color.B500};
      }
    }
  }

  .btns {
    white-space: nowrap;
    button {
      height: 35px;
    }
  }
`;
