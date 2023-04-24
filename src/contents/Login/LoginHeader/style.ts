import styled from "styled-components";

export const BodySTY = styled.div`
  // 獅子頭LOGO
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  .lion-logo {
    display: flex;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.color.N700};
    border-radius: 0%;
    margin: 0 auto;
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  // 歡迎字樣
  p {
    font-size: 50px;
    font-weight: 700;
  }
`;
