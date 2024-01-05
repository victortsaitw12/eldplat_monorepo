import { Heading } from "evergreen-ui";
import styled from "styled-components";

export const SearchEmployeeSTY = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #ffffff;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  .search-field {
    /* width: 100%; */
    border-radius: 100px;
    &:focus {
      outline: none;
    }
  }
  .search-result {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #f1f6fd;
    }
    .red {
      color: ${({ theme }) => theme.color.R400};
      font-weight: ${({ theme }) => theme.fontWeight.Heading200};
    }
  }
  .selected {
    background: ${({ theme }) => theme.color.N100};
    color: ${({ theme }) => theme.color.B400};
  }
`;
