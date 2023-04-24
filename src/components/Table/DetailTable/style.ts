import styled from "styled-components";

export const DetailTableSTY = styled.div`
  width: 100%;
  padding: 20px;

  h3 {
    margin-bottom: 15px;
  }

  table {
    width: 100%;

    tr th:nth-child(1) {
      width: 35%;
    }

    td,
    th {
      padding: 15px 0;
      border-bottom: 1px solid #eee;
      white-space: nowrap;
      vertical-align: middle;

      span {
        display: flex;
        align-items: center;
      }

      img {
        margin-right: 10px;
      }
    }

    th {
      font-weight: normal;
    }

    td {
      a {
        text-decoration: dotted underline;
        color: blue;
      }

      .no-data div {
        width: 20px;
        height: 1px;
        background: #e3e3e3;
      }
    }
  }
`;
