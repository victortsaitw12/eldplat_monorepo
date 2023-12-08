import styled from "styled-components";

export const LightBoxBlock = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(40, 50, 60, 0.6);
  overflow: auto;
  z-index: 10;

  .wrapper {
    padding: 17px;
    max-width: 572px;
    margin: 10vh auto;
    border-radius: 10px;
    background: white;

    .titleWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      /* border-bottom: 1px solid #e2e8f0; */

      .title {
        color: ${({ theme }) => theme.color.N900};
        font-weight: 600;
        font-size: 18px;
      }

      .closeBtn {
        padding: 2px 7px;
        border-radius: 5px;
        font-size: 24px;
        cursor: pointer;

        &:hover {
          background-color: rgba(78, 89, 92, 0.1);
        }
      }
    }

    .content {
      padding: 15px;
    }
  }
`;

export const ButtonSetSTY = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  background: ${({ theme }) => theme.color.N0};
`;
