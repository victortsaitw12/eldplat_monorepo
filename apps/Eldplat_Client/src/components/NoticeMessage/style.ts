import styled from "styled-components";

export const BodySTY = styled.div.attrs({
    className: "notice_message"
})`
    background-color: ${({ theme }) => theme.color.N20};
    padding: 8px 16px;
    display: flex;
    gap: 8px;

    .message {
        font-size: 14px;
        min-width: 14px;
        color: ${({ theme }) => theme.color.N300};
    }
`;
