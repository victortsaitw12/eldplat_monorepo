import styled from "styled-components";

export const BodySTY = styled.div`
  position: relative;
  .react-datepicker-wrapper {
    width: 100%;
    .react-datepicker__input-container {
      .date-picker {
        width: 90%;
        padding: 8px 12px;
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.color.N50};
      }
    }
  }

  .react-datepicker-popper {
    .react-datepicker {
      border: 1px solid ${({ theme }) => theme.color.N40};
      box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);

      .react-datepicker__triangle {
        display: none;
      }
      .react-datepicker__navigation {
        top: 12px;

        &--previous {
          left: 30px;
        }
        &--next {
          right: 30px;
        }

        .react-datepicker__navigation-icon::before {
          border-color: ${({ theme }) => theme.color.N100};
        }
      }
      .react-datepicker__month-container {
        padding: 20px;
        .react-datepicker__header {
          border-bottom: none;
          padding: 0;
          .react-datepicker__current-month {
            font-size: 16px;
            color: ${({ theme }) => theme.color.N600};
          }

          .react-datepicker__day-names {
            font-size: 12px;
            line-height: 16px;
            margin: 12px 0;
            display: flex;
            justify-content: space-between;

            border-bottom: 1px solid ${({ theme }) => theme.color.N40};
            .react-datepicker__day-name {
              color: ${({ theme }) => theme.color.N200};
            }
          }
        }
        .react-datepicker__month {
          margin: 0;
          .react-datepicker__week {
            display: flex;
            justify-content: space-between;
            .react-datepicker__day {
              color: ${({ theme }) => theme.color.N700};
              margin: 0.166rem 0;
              width: 2.4rem;
            }
            .react-datepicker__day--in-range {
              background: ${({ theme }) => theme.color.B100};
              border-radius: 0px 0px 0px 0px;
            }
            .react-datepicker__day--range-start {
              background: ${({ theme }) => theme.color.B400};
              color: ${({ theme }) => theme.color.N0};
              border-radius: 40px 5px 5px 40px;
            }
            .react-datepicker__day--range-end {
              background: ${({ theme }) => theme.color.B400};
              color: ${({ theme }) => theme.color.N0};
              border-radius: 5px 40px 40px 5px;
            }
            .react-datepicker__day--range-start.react-datepicker__day--range-end {
              border-radius: 40px 40px 40px 40px;
            }
          }
        }
      }
    }
  }
  .icon {
    position: absolute;
    right: 0;
  }
`;
