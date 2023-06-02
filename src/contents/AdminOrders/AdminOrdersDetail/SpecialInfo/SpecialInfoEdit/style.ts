import styled from "styled-components";

const BodySTY = styled.div`
    .custom_select{
        &>div{
            width: 100%;
        }
    }
    li.v_detail_item{
        &:not(:last-child){
            margin-bottom: 20px;
        }
    }
`;

export { BodySTY }