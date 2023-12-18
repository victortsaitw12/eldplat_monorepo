import styled from "styled-components";

export const BodySTY = styled.div`
    background-color: ${({ theme }) => theme.color.N0};
    
    .section-title {
        padding: 16px 0;
        margin: 0 16px;
        font-size: 20px;
        font-weight: 600;
        color:  ${({ theme }) => theme.color.N300};
        border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    }
    
    .section-content {
        padding: 16px;

    }
`;
