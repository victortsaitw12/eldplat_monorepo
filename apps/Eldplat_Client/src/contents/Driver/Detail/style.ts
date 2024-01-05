import styled from "styled-components";

export const DivSTY = styled.div`
  height: calc(100% - 20px);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  position: relative;
  margin: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.Paragraph200};
  font-size: ${({ theme }) => theme.fontSize.Paragraph200};
  line-height: 19px;

  .main-column {
    /* flex-basis: 570px; */

    &.fb-33 {
      flex-basis: calc((100% - 20px) / 3);
    }

    &.fb-66 {
      flex-basis: calc((100% - 20px) / 3 * 2);
    }

    display: flex;
    flex-direction: column;
    gap: 20px;

    .create-more-button {
      border: 1px dashed ${({ theme }) => theme.color.N40};
      line-height: 127px;
      height: 127px;
    }

    .tag-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;

      .tag {
        height: 27px;
        border-radius: 4px;
        padding: 4px 8px;
        background-color: ${({ theme }) => theme.color.B100};
        color: ${({ theme }) => theme.color.N200};
        text-align: center;

        display: flex;
        align-items: center;
        gap: 8px;
      }
    }

    p {
      font-size: 16px;
      color: ${({ theme }) => theme.color.N800};
    }
  }
`;
