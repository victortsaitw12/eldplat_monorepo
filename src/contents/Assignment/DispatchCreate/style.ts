import styled from "styled-components";

export const DivSTY = styled.div`
    margin-top: 10px;
    .dispatch_table {
      border: 1px solid ${({ theme }) => theme.color.N40};
      box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
      &:not(:last-child) {
        border-bottom: none;
      }
    }
    .dispatch_header {
      padding: 10px 20px;
      background: ${({ theme }) => theme.color.N20};
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
      p {
        color: ${({ theme }) => theme.color.N300};
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0;
      }
    }
    .dispatch_row {
      display: flex;
      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.color.N40};
      }
      .dispatch_title {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.color.N20};
        width: 60px;
        p {
          font-size: 12px;
          color: ${({ theme }) => theme.color.N300};
          font-weight: 600;
        }
      }
    .dispatch_info_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        border-left: 1px solid ${({ theme }) => theme.color.N40};
        padding: 0 16px 20px;
        .dispatch_info {
        display: flex;
        align-items: center;
        padding: 20px 0;
        }
        p {
            font-size: 16px;
        }
        .dispatch_inputs {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            .item {
                width: 100%;
            }
        }
    }

     

    }
  
  
`;
