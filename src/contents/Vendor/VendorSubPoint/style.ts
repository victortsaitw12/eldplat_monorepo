import styled from "styled-components";

export const BodySTY = styled.div`
    overflow-x: auto;
    padding: 20px;
    background:  ${({ theme }) => theme.color.N0};
    display: block;
    height: calc(100vh - 180px);
    .subpoint-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > h4 {
            font-family: "Noto Sans";
            font-size: 16px;
            font-weight: 600;
            color:  ${({ theme }) => theme.color.N700};
            margin-bottom: 24px;
        }
    }
`;