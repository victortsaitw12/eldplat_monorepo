import styled from "styled-components";

export const BodySTY = styled.div`
  > button {
    margin-top: 16px;
  }

  .charactor-card {
    width: 270px;
    border: 1px solid #afc3da;
    border-radius: 4px;
    margin-top: 6px;
    padding: 8px 16px;

    .card-title,
    p {
      font-weight: 600;
      font-size: 12px;
      color: #718baa;
      line-height: 16px;
    }

    .card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-weight: 600;
        color: #718baa;
      }
      button {
        border: none;
      }
    }
  }
`;
