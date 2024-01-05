import styled from "styled-components";
export const BodySTY = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
`;

export const ItemSTY = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;
  width: 100%;
  > .item {
    flex: 1 0 0;
  }
`;

export const RemarkSTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  color: ${({ theme }) => theme.color.N700};
  > .title {
    font-weight: 700;
    font-size: 16px;
  }
`;

export const CollapseCardSTY = styled.div`

  overflow: hidden;
`;
