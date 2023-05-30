import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  align-items: flex-start;
  padding: 0px;
  gap: 60px;
`;

export const IconSTY = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 120px;
  overflow: hidden;
  color: ${({ theme }) => theme.color.N600};
`;
