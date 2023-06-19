import styled from "styled-components";

const BodySTY = styled.div`
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
        >li{
            height: 32px;
            align-items: center;
            display: flex;
            gap:52px;
            &>span:first-child{
                position: relative;
                padding-left: calc(11px + 12px);
                min-width: 80px;
            }
            .schedule-list-label{
                &>.dot{
                    display: inline-block;
                    position: absolute;
                    width: 11px;
                    height: 11px;
                    top: 5px;
                    left: 0;
                    &>svg{
                        position: absolute;
                        z-index: 9;
                    }
                    &.withLine::after{
                        content: " ";
                        position: absolute;
                        background-color: ${({ theme }) => theme.color.B300};
                        height: 50px;
                        width: 2px;
                        left: 5px;
                        top: 5px;
                    }
                }
            }
            .schedule-item-action{
                display: flex;
                align-items: center;
                gap:32px;
                svg{
                    cursor: pointer;
                }
            }
        }
    }
`;

export { BodySTY }