import styled from "styled-components";

export const NewUploaderSTY = styled.div`
  .inline-alert {
    div {
      margin-right: 4px;
    }
  }

  .upload-button {
    gap: 8px;
  }

  .uploaded-files {
    margin-top: 8px;
    border: 1px solid ${({ theme }) => theme.color.N40};
    box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
    border-radius: 4px;
    width: 346px;

    .title {
    }

    .content-wrapper {
      padding: 10px;
      display: flex;
      gap: 4px;

      .icon {
        flex-basis: 20px;
      }
      .file-name {
        flex-grow: 1;
        font-size: 16px;
      }
      .check {
        flex-basis: 20px;
      }
      .delete {
        flex-basis: 36px;
      }
      button {
        border: none;
        background-color: #fff;
      }
    }
  }
`;
