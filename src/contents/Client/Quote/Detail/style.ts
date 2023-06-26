import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 40px;
  gap: 12px;
  background-color: ${({ theme }) => theme.color.N0};
  border-radius: 10px;
  overflow: hidden;
  .special_content {
    .detail_list > .detail_item {
      & > span {
        &:first-child {
          max-width: 200px;
        }
      }
    }
  }
`;

export { StyledForm };
