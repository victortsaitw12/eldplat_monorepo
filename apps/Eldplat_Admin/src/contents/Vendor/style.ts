import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 0px 20px 20px 20px;
  .vendor-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    span {
      font-weight: 600;
      font-size: 16px;
      color: #567190;
    }
    button {
      background-color: #3670c9;
      color: #ffffff;
      border-radius: 32px;

      &:hover {
        color: black;
      }
    }
  }
`;
