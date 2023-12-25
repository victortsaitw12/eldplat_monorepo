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

    .switch-wrapper {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .col-wrapper {
      display: flex;
      gap: 20px;
    }

    .w-50 {
      width: calc(50% - 10px);
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
    }
  }

  .radio-wrapper {
    display: flex;
    gap: 5px;

    label {
      span {
        font-size: 16px;
      }
    }
  }
`;
