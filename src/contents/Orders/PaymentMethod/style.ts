import styled from "styled-components";

export const DivSTY = styled.div`
  .collapse {
    &_title {
    }
    &_content {
      padding: 20px;
      .detail_list {
        gap: 14.5px;
        .detail_item {
          justify-content: space-between;
          &:first-child {
            font-weight: ${({ theme }) => theme.fontWeight.Heading400};
          }
          span {
            flex: unset;
            &:first-child {
              max-width: unset;
            }
          }
        }
      }
      .detail_list:not(:first-child) {
        margin-top: 26.5px;
      }

      .red {
        color: ${({ theme }) => theme.color.R400};
      }
    }
  }
`;
