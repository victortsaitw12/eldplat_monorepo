import styled from "styled-components";

const BodySTY = styled.div`
  form {
    display: flex;
    gap: 20px;
    & > div {
      &:first-child {
        flex: 1;
        height: fit-content;
      }
    }
  }
  .special_content {
    .detail_list > .detail_item {
      & > span {
        &:first-child {
          max-width: 200px;
        }
      }
    }
  }
  .error-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.color.R400};
  }
`;

export { BodySTY };
