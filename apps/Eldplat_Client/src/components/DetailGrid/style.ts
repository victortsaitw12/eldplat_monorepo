import styled from "styled-components";

interface I_Props {
  borderRadius: string;
  isShowTitle: boolean;
}

const BodySTY = styled.ul<I_Props>`
  border-radius: ${props => props.borderRadius ? props.borderRadius : "4px"};
  overflow: hidden;
  border: 1px solid  ${({ theme }) => theme.color.N40};
  border-top: ${props => props.isShowTitle ? "auto" : "0"};
  
  .grid_title {
    background-color: ${({ theme }) => theme.color.N20};
    color: ${({ theme }) => theme.color.N300};
    padding: 10px 20px;
    font-weight: 600;
  }

  .collapse {
    .collapse_title {
      padding: 10px 20px;

      > span {
        font-size: 14px;
        color: ${({ theme }) => theme.color.N300};
      } 

      > svg {
        path {
          fill: ${({ theme }) => theme.color.N200};
        }
      }
    } 

    .collapse_content {
      padding: 0;
    }

  }
`;

export { BodySTY };