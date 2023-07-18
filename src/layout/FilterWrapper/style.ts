import styled from "styled-components";

export const BodySTY = styled.div`
  /* height: 100%; */
  /* overflow-x: scroll; */
  display: flex;
  flex-direction: column;
  height: 100%;
  .sub-filter {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    gap: 4px;
    width: 100%;
    background: ${({ theme }) => theme.color.N200};
    border-radius: 10px 10px 0 0;
    .subFilter-item {
      cursor: pointer;
      border: none;
      background: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;
      height: 35px;
      border-radius: 32px;
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
    }
    .clear {
      font-weight: ${({ theme }) => theme.fontWeight.Heading400};
      color: ${({ theme }) => theme.color.B500};
    }
  }

  .search-tool {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    gap: 8px;
    /* Neutral/N0 */
    background: ${({ theme }) => theme.color.N0};
    /* Neutral/N400 */
    border: 1px solid ${({ theme }) => theme.color.N400};
    border-radius: 32px;
    input {
      border: none;
    }
    input:focus {
      outline: none;
    }
  }
  .filter-pannel-container {
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.color.N0};
    width: 280px;
    padding: 20px;
    height: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  > .children-container {
    flex: 1 0 0;
    background: #ffffff;
    //
    overflow: hidden;
  }
`;
