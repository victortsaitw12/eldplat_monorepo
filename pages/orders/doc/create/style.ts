import styled from "styled-components";

export const BodySTY = styled.div`
  .main-column {
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    .create-more-button {
      width: 100%;
      border: 1px dashed ${({ theme }) => theme.color.N40};
      line-height: 127px;
      height: 127px;
    }
  }
`;
