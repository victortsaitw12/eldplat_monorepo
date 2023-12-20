import styled from "styled-components";

const BodySTY = styled.div`
  padding-bottom: 20px;
  
  .section {
    box-shadow: 0px 4px 8px 0px #10184014;

    .section-content {
      padding-bottom: 40px;
    }
  }


  table {
    thead {
      tr {
        background-color: ${({ theme }) => theme.color.N20};
        color: ${({ theme }) => theme.color.N200};
      }

    }
    td, tr {
      font-size: 16px;
    }

    .button-wrap {
      button:hover {
        border: none;
      }
    }

    a {
      color: ${({ theme }) => theme.color.B400};
      text-decoration: none;
    }
  }
  
  .notice-message {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 16px;
  }

  .back-link {
    font-size: 16px;
    color: ${({ theme }) => theme.color.N300};
    text-decoration: none;
    font-weight: 600;
    display: block;
    margin-top: 48px;
    text-align: center;
  }
`

export { BodySTY }