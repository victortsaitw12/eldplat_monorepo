import styled from "styled-components";
export const StyledCheckBoxContainer = styled.div`
  label {
    cursor: pointer;
    display: flex;
  }
  input[type="checkbox"] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }
  label::before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 4px;
    margin-right: 0.5em;
    border: none;
    background-color: ${({ theme }) => theme.color["N100"]};
  }

  input[type="checkbox"]:disabled + label,
  input[type="checkbox"]:disabled {
    color: #aaa;
    cursor: default;
  }
  input[type="checkbox"]:disabled + label,
  input[type="checkbox"]:disabled {
    color: #aaa;
    cursor: default;
  }
  input[type="checkbox"]:checked + label::before {
    content: "\u2714";
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color["N500"]};
  }

  input[type="checkbox"]:disabled + label::before {
    background-color: #ccc;
    border-color: #999;
  }
`;
