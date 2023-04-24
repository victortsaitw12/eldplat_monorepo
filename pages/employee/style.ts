import styled from "styled-components";

export const BodySTY = styled.div<{ addEmployeeActive: boolean }>`
  .add-employee-btn {
    display: ${({ addEmployeeActive }) =>
      addEmployeeActive ? "none" : "flex"};
    color: #ffffff;
    background-color: #3670c9;
    &:hover {
      color: black;
      /* background-color: #1952a8; */
    }
  }

  .list-style {
    padding: 24px;
    table {
      background-color: #ffffff;
    }
  }
`;
