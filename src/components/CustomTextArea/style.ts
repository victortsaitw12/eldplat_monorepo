import styled from "styled-components";

export const TextareaFieldSTY = styled.div<{rows: number}>`
  .comment-textarea {
    div {
      margin-bottom: 0;
    }
  }

  textarea {
    font-size: 14px;
    resize: none;
    height: ${ ({rows}) => rows && rows == 1 && "32px" };;
    min-height: ${ ({rows}) => rows && rows == 1 && "0" };
    overflow: ${ ({rows}) => rows && rows == 1 && "hidden" };
    width: 100%;
  }

  .hint {
    text-align: right;
    font-size: 12px;
  }
`;
