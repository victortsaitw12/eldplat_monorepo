import styled from "styled-components";

export const DivSTY = styled.div`
  width: 100%;

  .roles__module {
    .label {
      padding: 8px 10px;
      gap: 8px;
      button {
        border: none;
      }
      &:active {
        border: none;
      }
    }
  }
  .roles__elements {
    .role_element {
      display: flex;
      padding: 8px 64px;
      gap: 12px;
      align-items: center;
    }
  }
  .row {
    border: 1px solid ${({ theme }) => theme.color.N40};
  }
  .padStart {
    width: 16px;
  }
  .hide {
    display: none;
  }
`;
