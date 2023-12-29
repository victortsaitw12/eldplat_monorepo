import styled from "styled-components";

const checkboxWidth = 36;
const freezeColWidth = 72;

export const OverviewSTY = styled.div<{
  expandPercentage: number;
}>`
  ${({ expandPercentage }) => `
    --cellWidth: ${64 + (expandPercentage * (256 - 64)) / 100 + "px"};
  `}
  height:fit-content;
  /* width: fit-content; */
  display: flex;
  width: 100%;
  .schedule_zone {
    height: calc(100% - 32px);
  }
  .schedule_weeksWrap {
    display: flex;
    width: fit-content;
    position: sticky;
    left: 0;
    top: 0;
    z-index: 3;
    .font_driver {
      display: flex;
      width: fit-content;
      position: sticky;
      left: 0;
      top: 0;
      z-index: 2;
      div {
        border-bottom: 1px solid ${({ theme }) => theme.color.N40};
        border-right: 1px solid ${({ theme }) => theme.color.N40};
        padding: 5px 0;
        height: 38px;
        color: ${({ theme }) => theme.color.N200};
        background: ${({ theme }) => theme.color.N10};
        font-weight: normal;
        text-align: center;
        width: 95px;
        font-weight: bold;
        color: ${({ theme }) => theme.color.N200};
        background: ${({ theme }) => theme.color.N0};
        font-size: 14px;
        padding: 11px 0;
        &.w-50 {
          width: 90px;
        }
        &:nth-child(3) {
          border-right: 2px solid ${({ theme }) => theme.color.N40};
        }
      }
    }
    .zoom_width {
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
      border-right: 1px solid ${({ theme }) => theme.color.N40};
      padding: 5px 0;
      height: 38px;
      color: ${({ theme }) => theme.color.N200};
      background: ${({ theme }) => theme.color.N10};
      font-weight: normal;
      text-align: center;
      width: var(--cellWidth);
    }
    .font_date {
      font-size: 14px;
      font-weight: 600;
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
  }
  .schedule_bodyWrap {
    height: 100%;
    /* overflow-y: scroll;
    overflow-x: scroll; */
    /* &::-webkit-scrollbar {
      display: none;
    } */
    padding-bottom: 10px;
  }
  .schedule_daysWrap {
    width: fit-content;
    display: flex;
    /* position: relative; */
    .driver_info {
      display: flex;
      position: sticky;
      left: 0;
      background: ${({ theme }) => theme.color.N0};
      & div {
        border-bottom: 1px solid ${({ theme }) => theme.color.N40};
        border-right: 1px solid ${({ theme }) => theme.color.N40};
        text-align: center;
        padding: 0 2px;
        letter-spacing: 0px;
        height: 56px;
        width: 95px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &.driver {
          padding: 12px 0;
          display: unset;
          font-size: 14px;
          p {
            font-size: 12px;
            color: ${({ theme }) => theme.color.N80};
            padding-top: 4px;
          }
        }
        &.w-50 {
          width: 90px;
        }
        .icon {
          border: none;
          border-radius: 5px;
          padding: 2px;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          flex-wrap: nowrap;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-align-items: center;
          align-items: center;
          text-align: center;
          padding: 4px;
          background: ${({ theme }) => theme.color.N20};
          color: ${({ theme }) => theme.color.N200};
          cursor: pointer;
          svg {
            width: 15px;
            height: 15px;
          }
        }
        &:nth-child(3) {
          border-right: 2px solid ${({ theme }) => theme.color.N40};
        }
      }
    }
    .driver_shift {
      display: flex;
      .zoom_width {
        border-bottom: 1px solid ${({ theme }) => theme.color.N40};
        border-right: 1px solid ${({ theme }) => theme.color.N40};
        text-align: center;
        padding: 0 2px;
        letter-spacing: 0px;
        height: 56px;
        width: var(--cellWidth);
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
`;
