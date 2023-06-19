import styled from "styled-components";

export const MultiSelectSTY = styled.div`
  height: 30px;
  width: 100%;
  .evergreen-group {
    width: 100%;
    height: 100%;
    .evergreen-group {
      width: 100%;
      .evergreen-tagInput {
        color: ${({ theme }) => theme.color.B500};
        width: 100%;
        padding-top: 0;
        padding-bottom: 0;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  input {
    border: none !important;
    position: absolute;
    z-index: -99;
    &:hover {
      cursor: pointer;
    }
  }
`;
