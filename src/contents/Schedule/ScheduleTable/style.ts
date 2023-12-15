import styled from "styled-components";
import { ThemeType } from "@styles/theme";

export const ScheduleSTY =styled.div`
  width: 100%;
  overflow: auto;
  position: relative;
  .calendars_weeksWrap {
    width: 100%;
    position: sticky;
    top:0;
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    .calendars_weeks {
      border: 1px solid ${({ theme }) => theme.color.N40};
      background: ${({ theme }) => theme.color.N10};
      color: ${({ theme }) => theme.color.N200};
      flex: 0 0 14.285%;
      min-width: 80px;
      text-align: center;
      font-weight: bold;
      font-size: 14px;
      padding: 10px 0;
      &.weekend {
        color: ${({ theme }) => theme.color.R400};
      }
    }
  }
  .calendars_daysWrap {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    .calendars_days {
      border: 1px solid ${({ theme }) => theme.color.N40};
      flex: 0 0 14.285%;
      min-width: 80px;
      height: 120px;
      padding: 12px; 
      font-size: 16px;
      color: ${({ theme }) => theme.color.N500};
      font-weight: 400;
      letter-spacing: 0;
      }
      .today {
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
      .weekend {
        color: ${({ theme }) => theme.color.R400};
      }
      &.other_month {
        background: ${({ theme }) => theme.color.N30};
        .date {
          opacity: 50%;
        }
      }
      // &:hover {
      //   background: $selected_date_bg_color;
      // } 
      // &.cover {
      //   background: $cover_date_bg;
      // }
      // &.selected {
      //   background: $selected_date_bg_color;
      //   border: 2px solid $selected_date_border_color;
      // }
  }
`;
