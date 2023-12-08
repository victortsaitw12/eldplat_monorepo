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

  .main-column {
    /* flex-basis: 570px; */
    flex-basis: calc((100% - 20px) / 2);

    display: flex;
    flex-direction: column;
    gap: 20px;

    .create-more-button {
      border: 1px dashed ${({ theme }) => theme.color.N40};
      line-height: 127px;
      height: 127px;
    }
  }
`;

export { BodySTY };
