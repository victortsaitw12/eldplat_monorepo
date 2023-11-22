import styled from "styled-components";

export const InfoCardSTY = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0;
  background: ${({ theme }) => theme.color.N0};
  border: 1px solid ${({ theme }) => theme.color.N40};
  border-radius: 4px;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);

  .title {
    display: inline-block;
    width: 100%;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.N300};
    background: ${({ theme }) => theme.color.N20};
  }

  ul {
    margin: 0;
    li {
      list-style: none;
    }
  }

  .content {
    //純文字
    .column {
      .item {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin-bottom: 20px;
        .req {
          color: ${({ theme }) => theme.color.R400};
        }

        & > div {
          display: flex;
          flex: 3;
          margin-bottom: 0;
          gap: 10px;
          & > div {
            width: 100%;
          }
        }
        .infoCard__label {
        }
        .infoCard__value {
        }
      }
    }
  }
`;
