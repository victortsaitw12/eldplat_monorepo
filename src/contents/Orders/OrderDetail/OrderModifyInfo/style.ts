import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.N0};
  border-radius: 0 0 4px 4px;

  .detail_grid {
    border-top: 1px solid ${({ theme }) => theme.color.N40};

    .grid_item {
      grid-template-columns: 1fr 180px;

      .item:nth-child(odd) {
        border-right: 0;
        font-size: 16px;
      }
      .item:nth-child(even) {
        font-size: 12px;
      }
    }

    .title-wrap {
      display: grid;
      grid-template-columns: 1fr 140px;
      width: 100%;

      span:nth-child(even) {
        font-size: 12px;
      }
    }

    .title-item {
      div, li {
        line-height: 21px;
        font-weight: 400;
      }

      li {
        list-style: none;
        position: relative;
        margin-left: 20px;

        &::before {
          position: absolute;
          content: "";
          width: 4px;
          height: 4px;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          background-color: ${({ theme }) => theme.color.N800};
        }
      }
    }
  }
`
