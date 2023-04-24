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
        width: 100%;
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
