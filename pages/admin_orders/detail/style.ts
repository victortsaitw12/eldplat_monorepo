import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  /* width: 600px; */
  margin: 10px;
  gap: 10px;
  .title-bar{
    margin-bottom: -1rem;
  }
  &>div{
    border: none;
    &:first-child{
      flex: 1;
    }
    &:last-child{
      margin-bottom: 20px;
    }
  }
`;
