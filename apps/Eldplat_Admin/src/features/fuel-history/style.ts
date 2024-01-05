import styled from "styled-components";

export const FuelEntryBlock = styled.div`
  width: 100%;
  display: flex;
  .detail-table-wrap {
    width: 40%;
    margin: 15px 0 0 15px;
    background-color: #fff;
    border-radius: 8px;
    .title {
      color: #262c2d;
      font-size: 18px;
      padding: 12px 15px 0 15px;
    }
  }

  .right-content {
    width: 60%;
    margin: 15px;
    .card-content {
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;
      border-radius: 8px;
      .item {
        width: 33%;
        padding: 15px;
        line-height: 1.5;
        div {
          padding: 4px 0;
        }
        .number {
          color: #262c2d;
          font-size: 18px;
          font-weight: 600;
        }
        .unit {
          color: #8d989c;
          font-size: 12px;
        }
        .up {
          color: #ea352b;
        }
        .down {
          color: #0fb860;
        }
      }
    }
    .location-content {
      background-color: #fff;
      border-radius: 8px;
      margin-top: 15px;
      padding: 15px;
      .title {
        font-size: 18px;
      }
      p {
        text-align: center;
        padding: 64px;
        color: #636f73;
        font-size: 13px;
      }
    }
  }
`;

export const DetailBlock = styled.div`
  .title {
    font-size: 18px;
    color: #262c2d;
    padding-bottom: 12px;
  }
  .line {
    border-bottom: 1px solid #e2e8f0;
    padding: 5px 0;
  }
  .flags {
    font-weight: bold;
    font-size: 13px;
    padding-top: 15px;
    > p {
      padding-top: 5px;
      font-weight: normal;
      line-height: 1.5;
      > a {
        font-weight: normal;
        display: inline;
        color: #006cb8;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
