import styled from "styled-components";

export const FileCardSTY = styled.div`
  .uploaded-files {
    margin-top: 8px;
    border: 1px solid ${({ theme }) => theme.color.N40};
    box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
    border-radius: 4px;
    width: 100%;
    max-width: 346px;

    .title {
    }

    .content-wrapper {
      padding: 10px;
      display: flex;
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};

      &:last-child {
        border-bottom: none;
      }

      &.existed {
        color: ${({ theme }) => theme.color.B400};
      }

      .icon {
        flex-basis: 20px;
        flex-shrink: 0;
      }
      .file-name {
        flex-grow: 1;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .check {
        flex-basis: 20px;
        flex-shrink: 0;
      }
      .delete {
        flex-basis: 36px;
        flex-shrink: 0;

        color: ${({ theme }) => theme.color.N200};
      }
      button {
        border: none;
        background-color: #fff;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
