import styled from "styled-components";

export const OverviewSTY = styled.div`
  height: 100%;
  width: fit-content;
  .schedule_zone {
    height: calc(100% - 32px);
  }
  .schedule_weeksWrap {
    display: flex;
    flex-flow: row wrap;
    flex-wrap: nowrap;
    list-style: none;
    padding: 0;
    margin: 0;
    div {
      border:1px solid ${({ theme }) => theme.color.N40};
      padding: 5px 0;
      height: 38px;
      color: ${({ theme }) => theme.color.N200};
      background: ${({ theme }) => theme.color.N10};
      font-weight: normal;
      text-align: center;
      width: 145px;
      &.font_driver {
        font-weight: bold;
        color: ${({ theme }) => theme.color.N200};
        background: ${({ theme }) => theme.color.N0};
        font-size: 14px;
        padding: 11px 0;
      }
      &.w-50 {
        width: 90px;
      }
      &.zoom_width {
        width: var(--cellWidth);
        width: 150px;
      }
      .font_date {
        font-size: 14px;
        font-weight: 600;
        &.today{
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
            width: 21px;
            height: 21px; 
            background: ${({ theme }) => theme.color.B400};
            border-radius: 50%;
            color: ${({ theme }) => theme.color.N0};
          }
        }
        &.week_label {
          font-size: 12px;
          font-weight: 400;
          display: inline-block;
          margin-left: 4px;
          &.today {
            color: ${({ theme }) => theme.color.B400};
            &::before {
              display: none;
            }
          }
        }
      }
      p {
        font-size: 10px;
        padding-top: 3px;
      }
      .weekend {
        color: ${({ theme }) => theme.color.R400};
      }
      &:nth-child(1) {
        border-right: 2.5px solid ${({ theme }) => theme.color.N40};
      }
    }
  }
  .schedule_bodyWrap {
    height: 100%;
    overflow-y: scroll; 
      &::-webkit-scrollbar {
        display: none;
      }
    padding-bottom: 10px;
  }
  .schedule_daysWrap {
    display: flex;
    flex-flow: row wrap;
    flex-wrap: nowrap;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    .driver_info {
      border-right: 2.5px solid ${({ theme }) => theme.color.N40} !important;
      border:1px solid ${({ theme }) => theme.color.N40};
      width: 145px;
      padding: 10px;
      display: flex;
      align-items: center;
      p {
        font-size: 14px;
        padding-bottom: 5px;
      }
      span {
        font-size: 12px;
        color: ${({ theme }) => theme.color.N200};
        letter-spacing: 0;
        padding: 0 4.5px 5px 0;
        display: inline-block;
      }
    }
    .bus_info {
      border:1px solid ${({ theme }) => theme.color.N40};
      text-align: center;
      padding: 0 2px;
      letter-spacing: 0px;
      height: 100px;
      width: 150px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }
`