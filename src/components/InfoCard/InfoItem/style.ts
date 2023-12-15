import styled from "styled-components";

export const ListItem = styled.li`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 8px;

font-size: 14px;
color: ${({ theme }) => theme.color.N800};
  .label {
    color: ${({ theme }) => theme.color.N300};

    &.bold {
      font-weight: 600;
      color: ${({ theme }) => theme.color.N700};
    }

    .req {
      color: ${({ theme }) => theme.color.R400};
    }
  }
  .value {
    color: ${({ theme }) => theme.color.N800};

    .select-wrapper {
      width: 100%;
      max-width: 240px;

      select {
        font-size: 16px;
        color: ${({ theme }) => theme.color.N100};
      }
    }
  }
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
`;
