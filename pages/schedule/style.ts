import styled from "styled-components";

export const ShiftSTY = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.Heading200};
  font-size: ${({ theme }) => theme.fontSize.Heading200};
  line-height: 16px;
  width: 100%;
  height: calc(100vh - 56px);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  .pageContent {
    height: 100%;
    width: 100%;
    position: relative;
    background: ${({ theme }) => theme.color.N0};
    display: flex;
    flex-direction: column;
    .overviewControl {
      padding: 16px 8px;
      button {
        margin-right: 8px;
      }
    }
    .overviewContainer {
      flex-grow: 10;
      overflow: hidden;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        /* display: none; */
      }
    }
  }
  label {
    margin: 0;
  }
`;
