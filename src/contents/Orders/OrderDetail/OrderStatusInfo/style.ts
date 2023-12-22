import styled from "styled-components";

export const BodySTY = styled.div`

`


export const CustomTableSTY = styled.div` 
  .detail_grid {
    .grid_item {
      .item:first-child {
        background-color: ${({ theme }) => theme.color.N20};
        font-weight: 600;
      }
    }
  }
`
