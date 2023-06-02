import styled from "styled-components";

const BodySTY = styled.div`
    .special_content{
        .detail_list > .detail_item{
            & > span{
                &:first-child{
                    max-width: 200px;
                }
            }
        }
    }
`;


export { BodySTY };