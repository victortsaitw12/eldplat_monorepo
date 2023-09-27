import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  /* width: 600px; */
  height: calc(100% - 20px);
  margin: 10px;
  .link {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    &:hover {
      font-weight: 600;
    }
  }
`;
