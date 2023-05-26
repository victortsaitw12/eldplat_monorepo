import styled from "styled-components";

export const ShiftSTY = styled.div`
  font-family: "Noto Sans";
  font-weight: ${({ theme }) => theme.fontWeight.Heading200};
  font-size: ${({ theme }) => theme.fontSize.Heading200};
  line-height: 16px;
  width: 100%;
  height: calc(100vh - 56px);
  position: relative;
  padding: 10px;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  .wrap {
    width: 100%;
  }
  .pageContent {
    height: calc(100% - 36px);
    width: 100%;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.color.N0};
    padding: 20px;
    .mainBookmarkFilteredContent {
      padding: 20px;
    }
  }
  label {
    margin: 0;
  }
`;
