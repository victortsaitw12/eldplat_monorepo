import styled from "styled-components";

export const Detail = styled.div`
  background-color: rgba(235, 246, 254);
  padding: 15px;
  border-top: 3px solid rgba(0, 145, 230);
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 13px;

  .date {
    display: block;
    padding: 10px;
    > span {
      padding: 2px 0;
      display: block;
    }
  }
  .more {
    color: rgba(0, 108, 184);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
