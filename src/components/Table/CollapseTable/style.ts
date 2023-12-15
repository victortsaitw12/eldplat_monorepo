import styled from "styled-components";

const LINE_HEIGHT = 16;
const getRowHeight = (maxRow: number) => {
  return LINE_HEIGHT * maxRow;
};

export const DivSTY = styled.div<{ collapse: number[]; maxRow: number }>`
  header {
    padding: 0;
  }
  button {
    z-index: 1;
  }
  td > div {
    max-height: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  tbody {
    tr {
      position: relative;
    }
  }
  ${(props) =>
    props.collapse?.map((item) => {
      return `tr:nth-child(${item}) {
        td > div{
            max-height: ${getRowHeight(props.maxRow)}px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
      }`;
    })}
  ${(props) =>
    props.collapse?.map((item) => {
      return `tbody >tr:nth-child(${item}) {
                &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                height: 2rem;
                width: 100%;
                background: linear-gradient(
                    to bottom,
                    transparent,
                    ${props.theme.color.N0}
                );
              }
            }`;
    })}
`;
