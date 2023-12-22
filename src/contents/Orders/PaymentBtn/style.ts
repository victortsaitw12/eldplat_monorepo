import styled from "styled-components";

export const DivSTY = styled.div`
  position: relative;
  width: 100%;
  /* flex-direction: row;
  display: flex;
  gap: 20px; */
  button {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 12px;
    transition: all 0.3s;
    font-weight: 600;
    background-color: ${({ theme }) => theme.color.N300};
    
    &:not([disabled]):focus, &:not([disabled]):hover {
      background-color: ${({ theme }) => theme.color.N200};
    }
  }
`;

export const CustomTableSTY = styled.div`
  table {
    thead {
      tr {
        background-color: ${({ theme }) => theme.color.N20};
      }
    }
  }
`

export const InputWrapperSTY = styled.div`
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .item-title {
    margin-bottom: 8px;

    span {
      font-weight: 600;
    }
  }
}
`