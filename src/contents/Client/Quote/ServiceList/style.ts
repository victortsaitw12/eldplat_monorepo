import styled from "styled-components";

export const BodySTY = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .title {
        font-size: 14px;
        color: ${({ theme }) => theme.color.N300};
        margin-bottom: 5px;
    }

    .value {
        font-size: 16px;
        color: ${({ theme }) => theme.color.N800};
    }
`;
