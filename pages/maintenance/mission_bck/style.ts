import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  /* height: calc(100% - 20px); */
  margin: 10px;

  /* 派單號樣式 */
  .assignment-link {
    display: flex;
    flex-direction: column;
    a {
      margin: 2px auto;
      color: ${({ theme }) => theme.color.N700};
      text-decoration: none;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
