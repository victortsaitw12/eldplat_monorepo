import styled from "styled-components";

export const FormCardSTY = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 40px;
  }

  a {
    text-decoration: none;
    color: #3ea5d9;
  }

  .formCard_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;

    .w100 {
      width: calc(100%);
    }

    .w50 {
      width: 100%;
      display: flex;
      gap: 0 20px;
      flex-wrap: wrap;
    }

    .w50 > div {
      flex-grow: 1;
      width: calc(50% - 20px);
    }

    .w33 {
      width: 100%;
      display: flex;
      gap: 0 20px;
      flex-wrap: wrap;
    }

    .w33 > div {
      flex-grow: 1;
      width: calc(100% / 3 - 20px);
    }

    .gap-10 {
      gap: 10px;
    }

    // required 改成紅色
    span[title="This field is required."] {
      color: red;
    }

    // 標籤改樣式
    .hintText {
      margin-top: 10px;
      font-size: 12px;
      letter-spacing: 0;
    }
  }
`;

export const FilePickBtnSTY = styled.div`
  .inputFileTitle {
    display: block;
    font-family: "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    color: #101840;
    font-weight: 500;
    margin-bottom: 7px;
    letter-spacing: 0;
  }

  .evergreen-file-picker-button {
    background: green;
    color: white;
    border-radius: 10px;
    &:hover {
      background: green;
    }
  }

  .ub-txt-ovrf_ellipsis {
    display: none;
  }
`;

export const StepControlSTY = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  border-top: 1px solid #eee;

  .next-step {
    display: flex;
    gap: 10px;
  }

  button {
    padding: 10px;
    color: #3670c9;
    background-color: transparent;
    border: 0;
    border-radius: 5px;
    outline: none;
    cursor: pointer;

    &.fill {
      color: #fff;
      background-color: #3670c9;
    }

    &.bordered {
      border: 1px solid #808080;
      background-color: #fff;
      color: #000;
    }
  }
`;
