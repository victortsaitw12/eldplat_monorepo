import styled from "styled-components";

export const InfoCardSTY = styled.div<{ height: number | string }>`
  width: 100%;
  height: ${({ height }) =>
    height === "fit-content" ? "fit-content" : `${height}px`};

  padding: 0;
  background: ${({ theme }) => theme.color.N0};
  border: 1px solid ${({ theme }) => theme.color.N40};
  border-radius: 4px;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);

  .title-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    background: ${({ theme }) => theme.color.N20};

    .title {
      font-size: 16px;
      font-weight: 600;
    }

    .toggle-button {
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.color.N300};
      cursor: pointer;
      transform: rotate(180deg);

      &.open {
        transform: rotate(0deg);
      }
    }
  }

  ul {
    margin: 0;
    li {
      list-style: none;
    }
  }

  .content {
    padding: 20px;
    border-radius: 0 0 4px 4px;

    display: flex;
    gap: 40px;

    overflow: visible;

    .user__photo {
    }

    .col {
      flex: 1;

      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      gap: 24px;

      .fb-100 {
        flex-basis: 100%;
      }
      .fb-50 {
        flex-basis: calc((100% - 20px) / 2);
      }
      .fb-25 {
        flex-basis: calc((100% - 60px) / 4);
      }
      .fb-66 {
        flex-basis: calc((100% - 20px) / 3 * 2);
      }
      .fb-33 {
        flex-basis: calc((100% - 20px) / 3);
      }

      .m-0 {
        margin: 0;
      }

      .gap-0 {
        gap: 0;
      }
    }
  }
`;
