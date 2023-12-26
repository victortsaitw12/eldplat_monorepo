import styled from "styled-components";

export const InfoCardSTY = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0;
  background: ${({ theme }) => theme.color.N0};
  border: 1px solid ${({ theme }) => theme.color.N40};
  border-radius: 4px;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);

  .title {
    display: inline-block;
    width: 100%;
    padding: 8px 16px;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.N300};
    background: ${({ theme }) => theme.color.N20};
  }

  .content {
    border-radius: 0 0 4px 4px;
    overflow: visible;

    &.padding-20 {
      padding: 20px;
    }
  }
`;
