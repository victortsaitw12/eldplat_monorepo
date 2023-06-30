import styled from "styled-components";

const BodySTY = styled.div`
  .title_children {
    gap: 10px;
    position: relative;
    display: flex;
    align-items: center;
    width: calc(100% - 50px);
    & > svg {
      right: 0;
    }
    & > input {
      width: calc(100% - 100px);
    }
  }
  .detail-with-icon {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    & > svg {
      position: absolute;
      left: 2px;
      top: 10px;
    }
    .detail_item {
      padding-left: 16px;
      & > span {
        line-height: 32px;
      }
    }
  }
  .add_day_container {
    color: ${({ theme }) => theme.color.N700};
    padding: 17.5px;
    button {
      width: 100%;
      border: none;
      background: transparent;
      justify-content: flex-start;
      gap: 9.5px;
      &:hover {
        border: none;
        background: transparent;
      }
    }
  }
  .input-error {
    color: ${({ theme }) => theme.color.R400};
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

export { BodySTY };
