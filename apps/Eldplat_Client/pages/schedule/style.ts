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
    .overviewPag {
      border: 1px solid ${({ theme }) => theme.color.N40};
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      padding: 5px 12px;
    }
    .overviewContainer {
      overflow: scroll;
    }
  }
  label {
    margin: 0;
  }
`;
