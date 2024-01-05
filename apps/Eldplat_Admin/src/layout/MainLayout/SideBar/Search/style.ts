import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 35px;
  .search-bar {
    position: relative;
    input {
      ::placeholder {
        color: #fff;
      }
    }
  }
  .icon {
    cursor: pointer;
    z-index: 10;
  }
  .prefix {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(50%, -40%);
  }
  .suffix {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -40%);
  }
`;
