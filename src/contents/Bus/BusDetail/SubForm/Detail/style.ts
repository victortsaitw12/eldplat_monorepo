import styled from "styled-components";

export const DivSTY = styled.div`
  .detail {
    display: flex;
    flex-direction: column;
    gap: 20px;

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

    .w-50 {
      width: 50%;
    }
  }

  .maintenance {
  }

  .finance {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .specification {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .row {
      display: flex;
      gap: 20px;

      > div {
        height: 100%;
      }
    }
  }
`;
