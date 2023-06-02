import styled from "styled-components";

const BodySTY = styled.div`
    li.v_detail_item{
        &:not(:last-child){
            margin-bottom: 10px;
        }
    }
    .bus_amount_title{
        color: ${({ theme }) => theme.color.N700};
        font-size: 14px;
        font-weight: 600;
        display: inline-block; 
        margin-bottom: 20px;
    }
    .bus_amount{
        .collapse_title{
            border-radius: 10px;
            background-color: ${({ theme }) => theme.color.G100};
        }
        .v_detail_list{
            width: 50%;
        }
    }
`;

export { BodySTY }