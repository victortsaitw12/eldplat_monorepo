import styled from "styled-components";

export const BodySTY = styled.section<{ className?: string }>`
    background-color: ${({ theme }) => theme.color.N0};
    
    .section_title {
        padding: 16px 0;
        margin: 0 16px;
        font-size: 20px;
        font-weight: 600;
        color:  ${({ theme }) => theme.color.N300};
        border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    }
    
    .section_content {
        padding: 20px;
    }


    // TODO: for client 覆蓋 Collapse component, 或者可以做成新的獨立component
    .collapse {
        .collapse_title {
            background-color: ${({ theme }) => theme.color.N20};
            padding: 5px 12px;
            >span {
                font-size: 18px;
            }
        }

        .collapse_content {
            padding: 24px 8px 20px;

            > ul {
                padding: 0;
            }
      
        }
    }
`;
