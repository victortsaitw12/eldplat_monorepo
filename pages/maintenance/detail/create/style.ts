import styled from "styled-components";

const BodySTY = styled.div`
  height: calc(100% - 20px);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  position: relative;
  margin: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.Paragraph200};
  font-size: ${({ theme }) => theme.fontSize.Paragraph200};
  line-height: 19px;

  .flex {
    display: flex;
  }
  .gap-1 {
    gap: 10px
  }
  .flex-col {
    flex-direction: column;
  }
  .main-column {
    /* flex-basis: 570px; */
    flex-basis: calc((100% - 20px) / 2);

    display: flex;
    flex-direction: column;
    gap: 20px;
    &.fb-33 {
      flex-basis: calc((100% - 20px) / 3);
    }
    &.fb-66 {
      flex-basis: calc((100% - 20px) / 3 * 2);
    }
    .create-more-button {
      border: 1px dashed ${({ theme }) => theme.color.N40};
      line-height: 110px;
      height: 110px;
      display: block;
      text-align: left;
      margin-bottom: 20px;
    }
    .InfoCard__container {
        height: 100%;
    }
  }
  .w-full {
    flex-basis: 100%;
  }
  .max-w-full {
    max-width: 100%;
  }
`;

export { BodySTY };
