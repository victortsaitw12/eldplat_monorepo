import styled from "styled-components";

export const BodySTY = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  background-color: ${({ theme }) => theme.color.N0};
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  gap: 20px;
  /* Neutral/N100 */
  box-shadow: 0px 4px 8px 0px #10184014;
  border-radius: 10px;
`;

export const IconSTY = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.color.N0};
  overflow: hidden;
`;

export const LabelSTY = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: ${({ theme }) => theme.color.N700};
`;
