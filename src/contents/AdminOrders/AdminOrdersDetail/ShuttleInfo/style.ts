import styled from "styled-components";

const BodySTY = styled.div`
.detail-with-icon{
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    &>svg{
        position: absolute;
        left: 2px;
        top: 10px;
    }
    .detail_item{
        padding-left: 23px;
        &>span{
            line-height: 32px;
        }
    }
}
    
`;

export { BodySTY }