import styled from "styled-components";
export const BodySTY = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
  width: 100%;
  > .header-container {
    display: flex;
    flex-direction: row;
    padding: 0px;
    gap: 40px;
    > .header-item {
      flex: 1 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 20px;
      > .header-title {
        font-weight: 700;
        font-size: 14px;
        color: ${({ theme }) => theme.color.N700};
      }
    }
  }
  > .content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
  }
`;

export const CardSTY = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

export const CollapseCardSTY = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;
