import styled from "styled-components";

export const BodySTY = styled.div`
  width: 1030px;
  // margin: 28px auto;
  > .body-container {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 295px;
    > .content-container {
      display: flex;
      flex-direction: column;
      gap: 50px;
      box-shadow: 0px 4px 8px 0px #10184014;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 20px;
    }
          
    .content-actions-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 20px;
    }

    > .charge-container {
      border-radius: 4px;
      overflow: hidden;
      height: fit-content;
      background-color: ${({ theme }) => theme.color.N0};
      padding: 16px;
      box-shadow: 0px 4px 8px 0px #10184014;

      .charge-header {
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        color: ${({ theme }) => theme.color.N200};
        padding-bottom: 16px;
        border-bottom: 1px solid ${({ theme }) => theme.color.N40};

        .charge {
          color: ${({ theme }) => theme.color.R300};
        }
      }
    }
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.B400};
  }
  > .redirect-body {
    height: 122px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: ${({ theme }) => theme.color.N0};
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 8px 0px #10184014;


  }
  > .redirect-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    color: ${({ theme }) => theme.color.N700};
    font-size: 16px;
    > button {
      border: none;
      cursor: pointer;
      background: none;
      padding: 8px 16px;
      gap: 8px;
      font-size: 12px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.N700};
    }
  }
  .quote-detail {
    box-shadow: 0px 4px 8px 0px #10184014;
    border-radius: 4px;
    overflow: hiddden;
    .grid_content {
      .item:nth-child(odd) {
        background-color: ${({ theme }) => theme.color.N20};;
      }
  
      .item {
        font-weight: 600;
      }
    }
  }
`;
