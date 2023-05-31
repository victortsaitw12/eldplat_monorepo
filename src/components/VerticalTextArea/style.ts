import styled from "styled-components";

const BodySTY = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    .v_textarea_title{
        font-weight: 600;
        font-size: 16px;
        color: ${({ theme }) => theme.color.N700};
    }
    .v_textarea_desc{
        font-size: 14px;
        color: ${({ theme }) => theme.color.N700};
    }
`;

export { BodySTY };