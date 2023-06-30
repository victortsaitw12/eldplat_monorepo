import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  > ul {
    width: 100%;
  }
  .detail_list > .detail_item {
    & > span {
      &:first-child {
        max-width: 200px;
      }
    }
  }
  > .remark {
    > .remark-title {
      font-size: 14px;
      color: ${({ theme }) => theme.color.N700};
      font-weight: 600;
      line-height: 19px;
    }
    > .remark-content {
      font-size: 14px;
      line-height: 19px;
    }
  }
`;

export { BodySTY };
/**
 *
 */
