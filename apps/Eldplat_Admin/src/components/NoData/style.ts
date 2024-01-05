import styled from "styled-components";

export const NoDataSTY = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 100px 0;

  .msg {
    overflow: hidden;
    color: ${({ theme }) => theme.color.N70};
    text-align: center;
    text-overflow: ellipsis;

    /* Headline/H-500 */
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
