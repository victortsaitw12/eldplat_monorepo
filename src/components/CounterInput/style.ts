import styled from "styled-components";

export const BodySTY = styled.div`
    display: flex;
    align-items: center;
    &>div{
        flex: 1;
    }
    .counter_input_content{
        justify-content: flex-end;
        display: flex;
        align-items: center;
        gap: 15px;
        input {
            width: 52px;
            line-height: 32px;
            text-align: center;
        }
        svg{
            cursor: pointer;
        }
    }
`