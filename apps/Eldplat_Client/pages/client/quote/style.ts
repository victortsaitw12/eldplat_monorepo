import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  // background-color: ${({ theme }) => theme.color.N300};

  .breadcrumbs {
    width: 100%;
  }
  
  > .header {
    display: flex;
    justify-content: center;
    // padding: 32px 0px;
    width: 100%;
    // background-color: ${({ theme }) => theme.color.N400};
    > .header_container {
      width: 1030px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      > .header_title {
        font-size: 32px;
        font-weight: 600;
        color: ${({ theme }) => theme.color.N300};
      }
    }
  }
  > .content_container {
    display: flex;
    padding: 40px 0px;
    gap: 40px;
    flex-direction: column;
    align-items: center;
    width: 1030px;
    > .content_title {
      color: ${({ theme }) => theme.color.N300};
      font-size: 32px;
      font-weight: 600;
      align-self: flex-start;
    }
    > .content_entry {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      gap: 25px;

      .server_entry_btn {
        padding: 25.5px 40px;
        border-radius: 10px;
        
        div {
          font-size: 24px;
          line-height: 32px;
        }
      }
    }
  }

  .service_wrap {
    box-shadow: 0px 4px 8px 0px #10184014;
    border-radius: 4px;
    overflow: hidden;
  }
  
`;
