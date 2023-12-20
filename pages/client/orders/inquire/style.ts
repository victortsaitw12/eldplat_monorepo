import styled from "styled-components";

const BodySTY = styled.div`
  max-width: 1030px;
  width: 100%:

  .breadcrumbs {
    width: 100%:
  }
  .page-title {
    color: ${({ theme }) => theme.color.N300};
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .item-container {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .item-title {
        > span {
          font-size: 14px;
          color: ${({ theme }) => theme.color.N700};
          font-weight: 600;
        }
      }
    }
  }
  
  .revise-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
`
export { BodySTY }