import styled from "styled-components";

const BodySTY = styled.div`
    position: sticky;
    top: 10px;
    margin-top: 31px;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.N0};
    width: 280px;
    box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
    border-radius: 10px;
    .detail_item{
        span{
            &:last-child{
                text-align: right;
            }
        }
    }
    .total_price{
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > span{
            flex: 1;
            margin-bottom: 8px;
            color:  ${({ theme }) => theme.color.N700};
            font-weight: 600;
            font-size: 25px;
            &:first-child{
                max-width: 60px;
                font-size: 16px;
            }
            &:last-child{
                display: flex;
                align-items: center;
                gap: 4px;
            }
            &>input{
                height: 48px;
                width: 100%;
            }
        }
    
        & ~ span{
            display: inline-block;
            width: 100%;
            text-align: right;
            font-weight: 400;
            font-size: 12px;
            color: ${({ theme }) => theme.color.N700};
        }
    }
    .price_detail{
        & > div {
            display: flex;
            align-items: center;
            &:not(:last-child){
                margin-bottom: 20px;
            }
            & > div , & > span{
                flex:1
            }
            & >div{
                display: flex;
                align-items: center;
                gap: 4px;
                &>input{
                    width: 100%;
                }
            }
        }
    }
    & > div {
        .submit_btn{
            width: 100%;
            margin-bottom: 20px;
        }
    }
    .detail_item{
        span{
            &:last-child{
                text-align: right;
            }
        }
    }
    hr{
        margin: 20px 0;
        border-top: 1px solid ${({ theme }) => theme.color.N0};
    }
`;

export { BodySTY }