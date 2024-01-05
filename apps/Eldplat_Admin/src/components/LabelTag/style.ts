import styled from "styled-components";

export const BodySTY = styled.span`
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 8px;
    background:  ${({ theme }) => theme.color.B100};
    color: ${({ theme }) => theme.color.B500};
`;

