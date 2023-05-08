import styled from "styled-components";

export const FormSTY = styled.form<{ color?: string }>`
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .form__startTime {
  }
  .form__endTime {
  }
  .form__leaveCode {
  }
  .form__description {
  }
  .form_signOff {
    .form_signOff-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
      gap: 12px;
      width: 100%;
      height: 59px;
      background: ${({ theme }) => theme.color.N100};
      border-radius: 5px;
      .form_signOff-option {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        input {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  label {
    padding-inline-start: 5px;
  }
  svg {
    fill: ${({ theme }) => theme.color.N700};
  }
`;

export const ViewSTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  .eventStatus {
    &__tags {
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
    &__duration {
      width: fit-content;
      background: ${({ theme }) => theme.color.N200};
      border-radius: 4px;
      padding: 4px 2px;
    }
    &__schdType {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      span {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        gap: 6px;
        color: ${({ theme }) => theme.color.N600};
      }
    }
    &__schdType-left {
      span {
        color: ${({ theme, color }) => (color ? theme.color[color] : "unset")};
      }
    }
    &__schdType-right {
      display: flex;
      flex-direction: row;
      gap: 8px;
      svg {
        cursor: pointer;
      }
    }
    &__leaveCode {
      padding-left: 20px;
    }
    &__description {
      padding-left: 20px;
    }
    &__divider {
      height: 0;
      width: 100%;
      border-width: 0px;
      border-bottom: 1px solid ${({ theme }) => theme.color.N300};
    }
  }
`;
