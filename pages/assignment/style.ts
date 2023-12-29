import styled from "styled-components";

export const BodySTY = styled.div`
  .children-container {
    padding: 12px 12px 20px 12px;
  }
  font-weight: ${({ theme }) => theme.fontWeight.Heading200};
  font-size: ${({ theme }) => theme.fontSize.Heading200};
  line-height: 16px;
  width: 100%;
  /* height: calc(100vh - 56px); */
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
    .overviewContainer {
      overflow: scroll;
    }
  }
`;
