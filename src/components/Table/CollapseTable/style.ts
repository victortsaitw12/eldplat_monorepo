import styled from "styled-components";

export const DivSTY = styled.div<{ collapse: number[] }>`
  td > div {
    max-height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  tbody {
    tr {
      position: relative;
    }
  }
  // TODO 沒有做成功的功能 展開收合
  ${(props) =>
    props.collapse?.map((item) => {
      return `tr:nth-child(${item}) {
        td>div{
            max-height: 32px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
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
