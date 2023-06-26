import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
      padding-left: 23px;
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
`;

export { BodySTY };
