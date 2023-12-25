import styled from "styled-components";

export const OverviewSTY = styled.div`
  height: 100%;
  /* height: calc(100% - 30px); */
  /* width: fit-content; */
  border: 1px solid ${({ theme }) => theme.color.N40};
  border-radius: 4px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .header {
    padding: 0 10px;
  }
  .table_header {
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    border-top: 1px solid ${({ theme }) => theme.color.N40};
    display: flex;
    .header_date {
      display: flex;
      align-items: center;
      width: 8%;
      padding: 0 10px;
    }
    .table_header_info {
      display: flex;
      width: 79%;
      /* width: calc(92% - 20px); */
      padding: 10px 10px;
    }
    p {
      font-size: 14px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.N200};
    }
  }
  .table_body {
    height: 100%;
  }
  .table_row {
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    min-height: 55px;
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    }

    .table_calendar {
      width: 8%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      border-right: 1px solid ${({ theme }) => theme.color.N40};
      padding-top: 10px;
      p {
        font-weight: 600;
        font-size: 14px;
        margin-right: 5px;
        position: relative;
        &.weekend {
          color: ${({ theme }) => theme.color.R400};
        }
        &.today {
          position: relative;
          z-index: 1;
          color: ${({ theme }) => theme.color.N0};
          &::before {
            z-index: -1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            content: "";
            position: absolute;
            display: inline-block;
            width: 24px;
            height: 24px;
            background: ${({ theme }) => theme.color.B400};
            border-radius: 50%;
            color: ${({ theme }) => theme.color.N0};
          }
        }
      }
      span {
        font-size: 12px;
        font-weight: 400;
        &.weekend {
          color: ${({ theme }) => theme.color.R400};
        }
        &.today {
          color: ${({ theme }) => theme.color.B400};
        }
      }
    }
    .table_info_row {
      width: 95%;
    }
    .table_info_wrapper {
      padding: 10px 10px 10px 10px;
      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.color.N40};
      }
      .mission_area {
        display: flex;
        width: 100%;
        justify-content: space-between;
        cursor: pointer;
        /* padding-bottom: 10px; */
      }
      .table_info {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        width: 86%;
      }
      .table_button {
        width: 120px;
        padding-right: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .button_edit {
          margin-right: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
  .dispatch_area {
    margin-top: 10px;
    .dispatch_table {
      border: 1px solid ${({ theme }) => theme.color.N40};
      box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
      border-bottom: none;
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
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
      &:not(:last-child) {
        border: none;
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
        justify-content: space-between;
        width: 100%;
        border-left: 1px solid ${({ theme }) => theme.color.N40};
        padding: 0 16px;
        .dispatch_info {
          display: flex;
          align-items: center;
          padding: 10px 0;
          .dw_1 {
            padding: 0 30px 0 0;
          }
        }
      }
      p {
        font-size: 16px;
      }
      .dispatch_info_button {
        display: flex;
        align-items: center;
        button {
          background: transparent;
          border: none;
          cursor: pointer;
        }
      }
    }
    .dispatch_button {
      display: flex;
      justify-content: flex-end;
      padding-top: 10px;
    }
  }
  .w_2 {
    width: 13%;
  }
  .w_3 {
    width: 16%;
  }
  .w_4 {
    width: 23%;
  }
  .pb_1 {
    padding-bottom: 8px;
  }
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.color.N500};
    font-weight: 400;
    letter-spacing: 0;
    &.font_main {
      color: ${({ theme }) => theme.color.B300};
    }
    &.font_sub {
      color: ${({ theme }) => theme.color.N80};
      font-size: 12px;
    }
  }
`;
