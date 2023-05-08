import styled from "styled-components";

export const ShiftSTY = styled.div`
  width: 100%;
  height: 100%;
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
