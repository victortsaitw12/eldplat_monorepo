import styled from "styled-components";

export const ShiftSTY = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.Heading200};
  font-size: ${({ theme }) => theme.fontSize.Heading200};
  line-height: 16px;
  width: 100%;
  height: calc(100vh - 56px);
  position: relative;
  padding: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  .pageContent {
    border-radius: 10px 10px 0px 0px;
    height: 100%;

    width: 100%;
    position: relative;
    background: ${({ theme }) => theme.color.N0};
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0px 20px;
    .mainBookmarkFilteredContent {
      padding: 20px;
    }
    .tableTitle {
      /* no padding */
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
