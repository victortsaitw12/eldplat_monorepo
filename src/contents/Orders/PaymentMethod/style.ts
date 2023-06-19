import styled from "styled-components";

export const DivSTY = styled.div`
  .collapse {
    &_title {
    }
    &_content {
      padding: 20px;
      li {
        font-weight: ${({ theme }) => theme.fontWeight.Heading400};
        height: 32px;
        justify-content: space-between;
        span {
          flex: unset;
        }
      }
    }
  }
`;
