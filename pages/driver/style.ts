import styled from "styled-components";

const BodySTY = styled.div<{ isOpenDrawer: boolean }>`
  height: calc(100% - 20px);
  display: flex;
  position: relative;
  margin: 10px;
  /* fonts */
  font-family: "Noto Sans";
  font-weight: ${({ theme }) => theme.fontWeight.Paragraph200};
  font-size: ${({ theme }) => theme.fontWeight.Paragraph200};
  line-height: 19px;

  & > div {
    border: none;
  }
  & > div > div:nth-child(2) {
    background: ${({ theme }) => theme.color.N0};
    border-radius: 10px;
  }
  /* fonts */
  .wrapMain {
    /* width: ${(props) =>
      props.isOpenDrawer ? "calc(100% - 300px)" : "100%"}; */
    width: 100%;
    height: calc(100% - 51px - 32px);
    overflow-x: hidden;
    & > div {
      height: 100%;
    }
    & > div > div {
      height: 100%;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    .container-header {
      position: sticky;
      left: 0;
    }
    table {
      thead {
      }
      tbody {
        tr {
          &:nth-child(1) {
            justify-self: left;
          }
        }
      }
    }
    .table-row-option {
    }

    .TableContainerSTY {
    }
  }

  .drawer__container {
    height: calc(100vh - 60px - 10px * 2);
    position: sticky;
    top: 0;
    .drawer__content {
      overflow: hidden;
      padding: 20px;
      border-radius: 10px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        /* display:none; */
        width: 7px;
        position: fixed;
      }
      &::-webkit-scrollbar-button {
        background: transparent;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-track-piece {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: ${({ theme }) => theme.color.N400};
      }
      &::-webkit-scrollbar-track {
        box-shadow: transparent;
      }
      .drawer__btn {
        height: 32px;
        width: 100%;
        background: ${({ theme }) => theme.color.B400};
        color: ${({ theme }) => theme.color.N0};
        border: none;
        border-radius: 32px;
        cursor: pointer;
      }
      section {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        gap: 12px;

        label {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 8px;
          svg {
            fill: ${({ theme }) => theme.color.N700};
          }
        }
        input {
          width: 100%;
          height: 32px;
        }
        select {
          width: 100%;
          height: 32px;
        }
        span {
          min-width: 4px;
        }
      }
    }
  }
`;

const StyledDot = styled.div<{ value: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ value, theme }) => {
    if (value === "01") {
      return theme.color.N400;
    }
    if (value === "02") {
      return theme.color.Y400;
    }
    return theme.color.G400;
  }};
`;

const UserSTY = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* fonts */
  font-family: "Noto Sans";
  font-weight: ${({ theme }) => theme.fontWeight.Heading400};
  font-size: ${({ theme }) => theme.fontWeight.Heading400};
  line-height: 19px;
  color: ${({ theme }) => theme.color.N900};

  /* fonts */

  a {
    color: ${({ theme }) => theme.color.N900};
    text-decoration: inherit !important;
  }
`;

export { BodySTY, StyledDot, UserSTY };
