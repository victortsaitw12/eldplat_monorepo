import styled from "styled-components";

export const BodySTY = styled.div`
  .option-tags {
    display: flex;
    flex-wrap: wrap;
    .tags {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      color: #1952a8;
      background-color: #e2edff;
      /* width: 70px; */
      height: 20px;
      border-radius: 8px;
      margin: 4px 4px 4px 0px;
      padding-left: 6px;

      span {
        font-size: 12px;
      }

      button {
        color: #1952a8;
        background: transparent;
        border: none;
        width: 6px;
        margin: 0;
        padding: 0;
      }
    }
  }
`;
