import styled from "styled-components";

export const SectionSTY = styled.section`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .addon {
    li {
      span:first-child {
        min-width: 360px;
      }
    }
  }
  & > div {
    background: ${({ theme }) => theme.color.N0};
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .collapse {
    font-family: "Noto Sans";
    &__title {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      margin-right: 10px;
    }
    &__subTitle {
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
    }
  }
`;
